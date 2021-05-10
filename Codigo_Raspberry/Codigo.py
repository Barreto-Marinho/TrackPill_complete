from datetime import datetime 
import time
import adafruit_dht
import RPi.GPIO as GPIO
import paho.mqtt.client as mqtt

client= mqtt.Client()
client.connect("mqtt.thingspeak.com",1883,60)
channelId = "1345667"
APIkey="6NELCOC9WXOV6BC2"
GPIO.setmode(GPIO.BCM)  ## Para indicar que los numeros de los pines son GPIO
GPIO.setup(2, GPIO.IN)  ## Para indicar que pines son entradas
GPIO.setup(3, GPIO.IN)  
dhtDevice = adafruit_dht.DHT11(7) ## Inicializar objeto de lectura sensor temp
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
    texto = "field1="+texto_imprimir[0]+"&field2="+texto_imprimir[1]+"&field3="+texto_imprimir[2]
    client.publish("/channels%s/publish/%s" % (channelId,APIkey),texto)
    texto_imprimir[1]="1C1d1/"
    texto_imprimir[2]="2C1d1/"
    print(buffer[0])
    if(buffer[0]>8):
        buffer[0]= buffer[0]-8
        for i in range(8):
            if(buffer[0]-i>0):
                texto_imprimir[1]= texto_imprimir[1]+guar_1[0]
                guar_1.pop(0)
                
    else:
        buffer[0]=0
    print(buffer[1])
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
guar_1 = []
guar_2 = []
buffer = [0,0] ## 
millis_v = [1]
texto_imprimir= ["","1C1d1/","2C1d1/"]              ##lista para enviar str
ini_text()
tiempo=datetime.now()                   ##Lectura tiempo actual
list_fecha=[2021, 2, 27, 10, 14, 0]     ##Inicializacion vector fecha
cont_temp=0                             ##ultimo tiempo de lectura sensor temp   
cont_inf=0                              ##ultimo tiempo lectura infrarojos
milis   =int((tiempo.microsecond)/1000) ##milis tiempo actual en millisegundos
segs    =tiempo.second                  ##segundos tiempo actual en segundos
cont_temp=segs                          ##actualizar cont_temp
cont_inf =milis                         ##actulizar cont_inf
estado_1=1                              ##inicializar estado infrarojo 1
estado_2=1                              ##inicializar estado infrarojo 2
#-------------------------------------------------------
while 1: 
    tiempo=datetime.now()               ##tiempo actual
    milis=int((tiempo.microsecond)/1000)## actualizar millis a tiempo actual
    segs  =tiempo.second                ## actualizar segundos a tiempo actual
    
    ## if para leer temperatura cada 10 segundos
    ##if ((segs >= cont_temp+10) or (segs<10 and cont_temp>50 and (segs >= cont_temp-50))):
    if ((segs >= cont_temp+20) or (segs<20 and cont_temp>40 and (segs >= cont_temp-40))):
        fecha()##Actualizar vector de fecha
        lecturaDHT()  ##leer variables
        cont_temp=segs##Actualizar variable tiempo 
        texto_imprimir[0]= str(list_fecha[2])+"/"+str(list_fecha[1])+"/"+str(list_fecha[0])+"/"+str(list_fecha[3])+"/"+str(list_fecha[4])+"/"+str(list_fecha[5])
        texto_imprimir[0]= texto_imprimir[0]+"/T/{}/H/{}".format(temp,hum)
        imprimir()
        
        
    ## if para leer infrarojo cada 100 milisegundos
    if ((milis >= cont_inf+100) or (milis<100 and cont_inf>900 and (milis >= cont_inf-900))):
       fecha()
       infrarojo()  
        cont_inf= milis
       ## if para guardar cambio en el archivo de textos e imprimir cuando se de un cambio en este
       if(inf1 != estado_1 ):
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
            estado_2=inf2
            if(buffer[1]<=7):
                texto_imprimir[2]=texto_imprimir[2] +str(list_fecha[2])+"/"+str(list_fecha[1])+"/"+str(list_fecha[0])+"/"+str(list_fecha[3])+"/"+str(list_fecha[4])+"/"+str(list_fecha[5])+"/"+str(millis_v[0])
                texto_imprimir[2]=texto_imprimir[2] + "/E2/"+ str(estado_2)+"/+/"
                buffer[1]=buffer[1]+1 
            else:
                guar_2.append(str(list_fecha[2])+"/"+str(list_fecha[1])+"/"+str(list_fecha[0])+"/"+str(list_fecha[3])+"/"+str(list_fecha[4])+"/"+str(list_fecha[5])+"/"+str(millis_v[0])+ "/E2/"+ str(estado_2)+"/+/")
                buffer[1]=buffer[1]+1 
#-------------------------------------------------------
