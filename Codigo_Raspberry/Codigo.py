from datetime import datetime 
import time
import adafruit_dht
import RPi.GPIO as GPIO
import paho.mqtt.client as mqtt
import requests


cL= 129
cLS= 139
dL =146
dLS= 156
eL =163
fL =173
fLS= 185
gL =194
gLS= 207
aL= 219
aLS =228
bL= 232
c =261
cS =277
d =294
dS =311
e =329
f =349
fS =370
g =391
gS= 415
a =440
aS= 455
b =466
cH= 523
cHS= 554
dH =587
dHS= 622
eH= 659
fH= 698
fHS =740
gH =784
gHS= 830
aH =880
aHS= 910

sonido = []  
sonido.append([ a, 499]);
sonido.append([  a, 500]);
sonido.append([  f, 350]);
sonido.append([  cH, 150]);
sonido.append([ a, 500]);
sonido.append([  f, 350]);
sonido.append([  cH, 150]);
sonido.append([  a, 1000]);
sonido.append([  eH, 500]);

sonido.append([  eH, 500]);
sonido.append([ eH, 500]);
sonido.append([ fH, 350]);
sonido.append([ cH, 150]);
sonido.append([ gS, 500]);

sonido.append([ f, 350]);
sonido.append([ cH, 150]);
sonido.append([ a, 1000]);
sonido.append([ aH, 500]);
sonido.append([ a, 350]);

sonido.append([ a, 150]);
sonido.append([ aH, 500]);
sonido.append([ gHS, 250]);
sonido.append([ gH, 250]);
sonido.append([ fHS, 125]);

sonido.append([ fH, 125]);
sonido.append([ fHS, 250]);

sonido.append([1,250]);

sonido.append([ aS, 250]);
sonido.append([ dHS, 500]);
sonido.append([ dH, 250]);
sonido.append([ cHS, 250]);
sonido.append([ cH, 125]);

sonido.append([ b, 125]);
sonido.append([ cH, 250]);

sonido.append([1,250]);

sonido.append([ f, 125]);
sonido.append([ gS, 500]);
sonido.append([ f, 375]);
sonido.append([ a, 125]);
sonido.append([ cH, 500]);

sonido.append([ a, 375]);
sonido.append([ cH, 125]);
sonido.append([ eH, 1000]);
sonido.append([ aH, 500]);
sonido.append([ a, 350]);

sonido.append([ a, 150]);
sonido.append([ aH, 500]);
sonido.append([ gHS, 250]);
sonido.append([ gH, 250]);
sonido.append([ fHS, 125]);

sonido.append([ fH, 125]);
sonido.append([ fHS, 250]);

sonido.append([1,250]);

sonido.append([ aS, 250]);
sonido.append([ dHS, 500]);
sonido.append([ dH, 250]);
sonido.append([ cHS, 250]);
sonido.append([ cH, 125]);

sonido.append([ b, 125]);
sonido.append([ cH, 250]);

sonido.append([1,250]);

sonido.append([ f, 250]);
sonido.append([ gS, 500]);
sonido.append([ f, 375]);
sonido.append([ cH, 125]);
sonido.append([ a, 500]);

sonido.append([ f, 375]);
sonido.append([ c, 125]);
sonido.append([ a, 1000]);

musica_alarma= sonido;


client= mqtt.Client()
client.connect("mqtt.thingspeak.com",1883,60)
channelId = "1345667"
APIkey="6NELCOC9WXOV6BC2"
clock= 13
latch=19
data=26
GPIO.setmode(GPIO.BCM)  ## Para indicar que los numeros de los pines son GPIO
pin_parlante = 6;
GPIO.setup(pin_parlante, GPIO.OUT)  
p = GPIO.PWM(pin_parlante, 523)
frecuency_alarma = 523;
enable_peligro=0;
comienzo=1;
enable_alarma=0;
GPIO.setup(clock, GPIO.OUT)  
GPIO.setup(latch, GPIO.OUT) 
GPIO.setup(data, GPIO.OUT) 
GPIO.setwarnings(False)
GPIO.setup(2, GPIO.IN)  ## Para indicar que pines son entradas
GPIO.setup(3, GPIO.IN)  
dhtDevice = adafruit_dht.DHT11(7) ## Inicializar objeto de lectura sensor temp
#-------------------------------------------------------

def sonido_alarma(milis):
    global enable_alarma
    global comienzo
    global tempo
    global posi
    if(enable_alarma):
        if(comienzo == 1):
            comienzo = 0;
            p.ChangeFrequency(musica_alarma[0][0])
            p.start(50)
            posi = 0
            tempo= milis;
        time_wait = musica_alarma[posi][1]
        cond_Temp = (milis >= tempo+time_wait) or (milis<time_wait and tempo>1000-time_wait and (milis >= tempo-(1000-time_wait)));
        if(cond_Temp):
            tempo= milis
            posi = (posi+1)% len(musica_alarma);
            if(posi>len(musica_alarma)):
                posi=0
            p.ChangeFrequency(musica_alarma[posi][0])
    else:
        if(enable_peligro==0):
            p.stop()
            comienzo = 1
#-------------------------------------------------------
def sonido_peligro(milis,time_wait):
    global enable_peligro
    global comienzo
    global encendido
    global tempo
    if(enable_peligro ==1 ):
        if(comienzo == 1):
            p.ChangeFrequency(2000)
            comienzo = 0;
            p.start(50)
            encendido = 1
            tempo= milis;
            
        cond_Temp = (milis >= tempo+time_wait) or (milis<time_wait and tempo>1000-time_wait and (milis >= tempo-(1000-time_wait)));
        if(encendido == 0 and cond_Temp ):
            p.ChangeDutyCycle(25)
            encendido = 1
            tempo= milis;
        elif(encendido==1 and cond_Temp):
            p.ChangeDutyCycle(0)
            encendido = 0
            tempo= milis;
    else:
        if(enable_alarma==0):
            p.stop()
            comienzo = 1
        

#-------------------------------------------------------

def shift_update(entrada,clock,latch,data):
    global enable_alarma
    global enable_peligro
    if(entrada==0):
        input = "01111111"
        enable_alarma = 1
        enable_peligro = 0
    elif((entrada==1)):
        input = "00010100"
        enable_alarma = 1
        enable_peligro = 0
    elif((entrada==2)):
        input = "10110011"
        enable_alarma = 1
        enable_peligro = 0
    elif((entrada==3)):
        input = "10110110"
        enable_alarma = 1
        enable_peligro = 0
    elif((entrada==4)):
        input = "11010100"
        enable_alarma = 1
        enable_peligro = 0
    elif((entrada==5)):
        input = "11100110"
        enable_alarma = 1
        enable_peligro = 0
    elif((entrada==6)):
        input = "11100111"
        enable_alarma = 1
        enable_peligro = 0
    elif((entrada==7)):
        input = "00110100"
        enable_alarma = 1
        enable_peligro = 0
    elif((entrada==8)):
        input = "11110111"
        enable_alarma = 1
        enable_peligro = 0
    elif((entrada==9)):
        input = "11110110"
        enable_alarma = 1
        enable_peligro = 0
    elif((entrada==-1)):
        input = "00000000"
        enable_alarma= 0
        enable_peligro = 0
    else:
        input = "11100011"
        enable_alarma = 0
        enable_peligro = 1
    #put latch down to start data sending
    GPIO.output(clock,0)
    GPIO.output(latch,0)
    GPIO.output(clock,1)

    #load data in reverse order
    for i in range(7, -1, -1):
        GPIO.output(clock,0)
        GPIO.output(data, int(input[i]))
        GPIO.output(clock,1)

    #put latch up to store data on register
    GPIO.output(clock,0)
    GPIO.output(latch,1)
    GPIO.output(clock,1)
#-------------------------------------------------------
def solicitar_info_user():
    global Id
    global Npastillas 
    global hum_max
    global temp_max
    global hora
    global lect_hora
    URL = "https://api.thingspeak.com/channels/1345669/feeds.json?api_key=VOJD7XGKRBQ8DST1&results=1"
    r = requests.get(url = URL)
    data = r.json()
    data = data["feeds"][0]
    Id = data["field1"]
    Npastillas = int(data["field2"])
    hora = data["field3"]
    hora= hora.split("/")
    hora.remove('')
    hora.remove('')
    pos_min = hora[0].index("T")
    pos_max= hora[0].index(".")
    for i in  range(len(hora)):
        hora[i]=hora[i][pos_min+1:pos_max-3]
        hora[i]= hora[i].split(":")
        hora[i][0]=int(hora[i][0])
        hora[i][1]=int(hora[i][1])
    hum_max = int(data["field4"])
    temp_max= int(data["field7"])
    vec_aux=[]
    for i in range(len(hora)):
        vec_aux.append(hora[i][0]*100+hora[i][1])
    vec_aux.sort()
    min_hora= 2561
    fecha()
    for i in range(len(hora)):
        hora[i][0]=int(vec_aux[i]/100)## hora
        hora[i][1]=vec_aux[i]-hora[i][0]*100## minuto
        dif =vec_aux[i]-list_fecha[3]*100-list_fecha[4]
        if((dif<min_hora) and (dif>0)):
            min_hora= dif
            lect_hora= i
    if(min_hora==2561):
        lect_hora = 0
#-------------------------------------------------------
def fecha():                            ##Funcion para obtener fecha actual
    tiempo=datetime.now()
    list_fecha[0]   =tiempo.year
    list_fecha[1]   =tiempo.month
    list_fecha[2]   =tiempo.day
    list_fecha[3]   =tiempo.hour
    list_fecha[4]   =tiempo.minute
    list_fecha[5]   =tiempo.second
    millis_v[0]     =int(tiempo.microsecond/1000) 
#-------------------------------------------------------
def imprimir():
    global enable
    if(enable ==2):
        enable_2 = 1
        enable=0
    else:
        enable = enable+1
        enable_2 = 0
    texto = "field1="+texto_imprimir[0]+"&field2="+texto_imprimir[1]+"&field3="+texto_imprimir[2]+"&field4="+str(enable_2)
    client.publish("channels/%s/publish/%s" % (channelId,APIkey),texto)
    texto_imprimir[1]="1C1d1/"
    texto_imprimir[2]="2C1d1/"
    print(buffer[0])
    print(buffer[1])
    if(buffer[0]>8):
        buffer[0]= buffer[0]-8
        for i in range(8):
            if(buffer[0]-i>0):
                texto_imprimir[1]= texto_imprimir[1]+guar_1[0]
                guar_1.pop(0)
                
    else:
        buffer[0]=0
    if(buffer[1]>8):
        buffer[1]= buffer[1]-8
        for i in range(8):
            if(buffer[1]-i>0):
                texto_imprimir[2]= texto_imprimir[2]+guar_2[0]
                guar_2.pop(0)
    else:
        buffer[1]=0
    print("se envio datos:   "+texto)

#-------------------------------------------------------
def lecturaDHT():                       ##Funcion para lectura de DHT
    global temp                         ##Declaracion temperatura
    global hum                          ##Declaracion humedad
    while 1:                            ##Ciclo while para tomar temperatura
        try:                            ##Intentar leer la variable
            temp = dhtDevice.temperature##Lectura variable temperatura
            hum  = dhtDevice.humidity   ##Lectura variable humedad
            break                       ##Salir de while en caso de leer
        except:
            print("Error")
 #-------------------------------------------------------   
def infrarojo():                        ## Funcion para lectura infrarojo  
    global inf1                         ##declaracion variable global
    global inf2
    inf1 = GPIO.input(2)                ##Lectura pin GPIO2
    inf2 = GPIO.input(3)                ##Lectura pin GPIO3
#-------------------------------------------------------    
def ini_text():                         ##Inicializacion archivo de texto para borrar datos
    texto_t=open("Datos.txt","w")       
    texto_t.close()


#-------------------------------------------------------
shift_update(-1,clock,latch,data)
enable = 0
list_fecha=[2021, 2, 27, 10, 14, 0]     ##Inicializacion vector fecha
vec_temp=[0,0,0,0,0]
vec_hum=[0,0,0,0,0]
millis_v = [1]
solicitar_info_user()
guar_1 = []
guar_2 = []
buffer = [0,0] ## 
millis_v = [1]
texto_imprimir= ["","1C1d1/","2C1d1/"]              ##lista para enviar str
ini_text()
tiempo=datetime.now()                   ##Lectura tiempo actual
cont_temp=0                             ##ultimo tiempo de lectura sensor temp   
cont_inf=0                              ##ultimo tiempo lectura infrarojos
milis   =int((tiempo.microsecond)/1000) ##milis tiempo actual en millisegundos
segs    =tiempo.second                  ##segundos tiempo actual en segundos
cont_temp=segs                          ##actualizar cont_temp
cont_inf =milis                         ##actulizar cont_inf
estado_1=1                              ##inicializar estado infrarojo 1
estado_2=1                              ##inicializar estado infrarojo 2
alarma = 0
peligro = 0
#-------------------------------------------------------
while 1: 
    tiempo=datetime.now()               ##tiempo actual
    milis=int((tiempo.microsecond)/1000)## actualizar millis a tiempo actual
    segs  =tiempo.second                ## actualizar segundos a tiempo actual
    fecha()##Actualizar vector de fecha
    sonido_peligro(milis,200)
    sonido_alarma(milis)
    if((list_fecha[3]==hora[lect_hora][0]) and (list_fecha[4]==hora[lect_hora][1]) and alarma==0 and peligro ==0):
        alarma = 1  
        lect_hora = (lect_hora+1) % len(hora) 
        shift_update(Npastillas,clock,latch,data)
        
        
    
    if ((segs >= cont_temp+20) or (segs<20 and cont_temp>40 and (segs >= cont_temp-40))):
        lecturaDHT()  ##leer variables
        vec_temp.append(temp)
        vec_temp.pop(0)
        prom_temp = sum(vec_temp)/len(vec_temp)
        vec_hum.append(hum)
        vec_hum.pop(0)
        prom_hum= sum(vec_hum)/len(vec_hum)
        if(prom_hum > hum_max or prom_temp > temp_max ):
            peligro = 1
            shift_update(10,clock,latch,data)
            
        else: 
            if(peligro==1):
                peligro =0
                shift_update(-1,clock,latch,data)
                
        cont_temp=segs##Actualizar variable tiempo 
        texto_imprimir[0]= str(list_fecha[2])+"/"+str(list_fecha[1])+"/"+str(list_fecha[0])+"/"+str(list_fecha[3])+"/"+str(list_fecha[4])+"/"+str(list_fecha[5])
        texto_imprimir[0]= texto_imprimir[0]+"/T/{}/H/{}".format(temp,hum)
        imprimir()
        solicitar_info_user()
        
        
    ## if para leer infrarojo cada 100 milisegundos
    if ((milis >= cont_inf+100) or (milis<100 and cont_inf>900 and (milis >= cont_inf-900))):
       infrarojo()   
       cont_inf= milis
       ## if para guardar cambio en el archivo de textos e imprimir cuando se de un cambio en este
       if(inf1 != estado_1 ):
            ##print("cambio_1")
            estado_1=inf1
            if(buffer[0]<=7):
                texto_imprimir[1]=texto_imprimir[1] +str(list_fecha[2])+"/"+str(list_fecha[1])+"/"+str(list_fecha[0])+"/"+str(list_fecha[3])+"/"+str(list_fecha[4])+"/"+str(list_fecha[5])+"/"+str(millis_v[0])
                texto_imprimir[1]=texto_imprimir[1] + "/E1/"+ str(estado_1)+"/+/"
                buffer[0]=buffer[0]+1 
            else:
                guar_1.append(str(list_fecha[2])+"/"+str(list_fecha[1])+"/"+str(list_fecha[0])+"/"+str(list_fecha[3])+"/"+str(list_fecha[4])+"/"+str(list_fecha[5])+"/"+str(millis_v[0])+ "/E1/"+ str(estado_1)+"/+/")
                buffer[0]=buffer[0]+1 
        ## if para guardar cambio en el archivo de textos e imprimir cuando se de un cambio en este
       if(inf2 != estado_2 ):
            ##print("cambio_2")
            alarma = 0
            if(peligro==0):
                shift_update(-1,clock,latch,data)
            estado_2=inf2
            if(buffer[1]<=7):
                texto_imprimir[2]=texto_imprimir[2] +str(list_fecha[2])+"/"+str(list_fecha[1])+"/"+str(list_fecha[0])+"/"+str(list_fecha[3])+"/"+str(list_fecha[4])+"/"+str(list_fecha[5])+"/"+str(millis_v[0])
                texto_imprimir[2]=texto_imprimir[2] + "/E2/"+ str(estado_2)+"/+/"
                buffer[1]=buffer[1]+1 
            else:
                guar_2.append(str(list_fecha[2])+"/"+str(list_fecha[1])+"/"+str(list_fecha[0])+"/"+str(list_fecha[3])+"/"+str(list_fecha[4])+"/"+str(list_fecha[5])+"/"+str(millis_v[0])+ "/E2/"+ str(estado_2)+"/+/")
                buffer[1]=buffer[1]+1 
#-------------------------------------------------------
