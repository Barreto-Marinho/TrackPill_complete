lim = 0.3;
% Declarar ID del canal
readChannelID = 1345667;
% Declarar key del canal
readAPIKey = '9J8GYR4CBQ0JXYJK';
% Declarar numero de datos a leer
num_datos_read=3;
%Declarar variables auxiliares
cont = 1;
% Se leen los ultimos num_datos_read del canal 2
data = thingSpeakRead(readChannelID,'Field', [1,2,3], 'NumPoints', num_datos_read, 'ReadKey', readAPIKey,'OutputFormat','table')
for i = 1:num_datos_read
    tempe_hume = data(i,2);
    tempe_hume = string(tempe_hume.Variables);
    tempe_hume= split(tempe_hume,'/');
    temperatura(i) = str2num(tempe_hume(8));
    humedad(i) = str2num(tempe_hume(10));
end
i = 1;
aux_2 = 1; % Se declara un aux
vari=0;
for j = 1:num_datos_read    % Se recorre los num_datos_read  leidos
    infrarojo_1 = data(j,3);    %Se lee el dato j
    infrarojo_1 = string(infrarojo_1.Variables); % Se da el dato de tambla a string
    infrarojo_1= split(infrarojo_1,'/');    % Se separa la cadena en partes segun /
    n = floor(length(infrarojo_1)/10);      % Se da la longitud del vector de strings
    cond = 0;                               % se declara variable auxiliar
    clear i         
    % Se evaluan las condiciones segun el ID del sensor, y el tamaño del vector
    if((infrarojo_1(1)=='1C1d1')&& (length(infrarojo_1)>6))
        for(i = 1:n)    % Se da un bucle para recorrer el vector en la cantidad de cambios
            % Se evaluan condiciones que debe cumplir el vector
            if((infrarojo_1(10*i-1) == 'E1') && (infrarojo_1(10*i+1) == " "))
                cond = 1; 
                aux= 10*(i-1);
                % Var se genera para poder sacar la estampa de tiempo 
                var= strcat(infrarojo_1(aux+4),'-',infrarojo_1(aux+3),'-',infrarojo_1(aux+2)," ",infrarojo_1(aux+5),':',infrarojo_1(aux+6),':',infrarojo_1(aux+7),'.',infrarojo_1(aux+8));
                % Se guarda la estampa de tiempo en el vector ts1
                tS1(i) = datetime(var,'InputFormat','yyyy-MM-dd HH:mm:ss.SSS');
                % Se declara variable de que tenga la misma estampa de tiempo pero 1 milisegundo antes
                es_1(i)= str2num(infrarojo_1(10*i));
            end
        end
        if(cond) %% Si detecta cond significa que si cambiaron las señales en ese dato
            if(cont ~= 1)
                tiempo = [tiempo,tS1]; 
                ygraf= [ygraf,es_1];
            else
                tiempo= tS1;
                ygraf= es_1;
                cont = 0;
                vari=1;
            end
            clear tS1 es_1;
        end
    end
end
figure(1)
%%plot(tiempo,ygraf)%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
i = 0;
pastillas_tomadas= 0;
enable = 0;
cont = 1;
if(vari)
    for i = 1:length(ygraf)
        if(ygraf(i)==0)
           temp = tiempo(i);
           enable = 1;
        end
        if(ygraf(i)==1 && enable == 1)
            resta = (split(string(cellstr(between(temp,tiempo(i)))),' '));
            resta_Def(1)= str2num(erase(resta(1),'h'));
            resta_Def(2)= str2num(erase(resta(2),'m'));
            resta_Def(3)= str2num(erase(resta(3),'s'));
            segs = resta_Def(1)*3600+resta_Def(2)*60+resta_Def(3);
            if(segs>=lim)
                pastillas_tomadas= pastillas_tomadas+1;
                enable = 0;
            end
        end
    end
end
clear ygraf tiempo
cont = 1;
aux_2 = 1;
vari=0;
for j = 1:num_datos_read    % Se recorre los num_datos_read  leidos
    infrarojo_1 = data(j,4);    %Se lee el dato j
    infrarojo_1 = string(infrarojo_1.Variables); % Se da el dato de tambla a string
    infrarojo_1= split(infrarojo_1,'/');    % Se separa la cadena en partes segun /
    n = floor(length(infrarojo_1)/10);      % Se da la longitud del vector de strings
    cond = 0;                               % se declara variable auxiliar
    clear i         
    % Se evaluan las condiciones segun el ID del sensor, y el tamaño del vector
    if((infrarojo_1(1)=='2C1d1')&& (length(infrarojo_1)>6))
        for(i = 1:n)    % Se da un bucle para recorrer el vector en la cantidad de cambios
            % Se evaluan condiciones que debe cumplir el vector
            if((infrarojo_1(10*i-1) == 'E2') && (infrarojo_1(10*i+1) == " "))
                cond = 1; 
                aux= 10*(i-1);
                % Var se genera para poder sacar la estampa de tiempo 
                var= strcat(infrarojo_1(aux+4),'-',infrarojo_1(aux+3),'-',infrarojo_1(aux+2)," ",infrarojo_1(aux+5),':',infrarojo_1(aux+6),':',infrarojo_1(aux+7),'.',infrarojo_1(aux+8));
                % Se guarda la estampa de tiempo en el vector ts1
                tS1(i) = datetime(var,'InputFormat','yyyy-MM-dd HH:mm:ss.SSS');
                % Se declara variable de que tenga la misma estampa de tiempo pero 1 milisegundo antes
                es_1(i)= str2num(infrarojo_1(10*i));
            end
        end
        if(cond) %% Si detecta cond significa que si cambiaron las señales en ese dato
            if(cont ~= 1)
                tiempo = [tiempo,tS1]; 
                ygraf= [ygraf,es_1];
            else
                tiempo= tS1;
                ygraf= es_1;
                cont = 0;
                vari=1;
            end
            clear tS1 es_1;
        end
    end
end
i = 0;
pastillas_ingresadas= 0;
enable = 0;
if(vari)
    for i = 1:length(ygraf)
        if(ygraf(i)==0)
           temp = tiempo(i);
           enable = 1;
        end
        if(ygraf(i)==1 && enable == 1)
            resta = (split(string(cellstr(between(temp,tiempo(i)))),' '));
            resta_Def(1)= str2num(erase(resta(1),'h'));
            resta_Def(2)= str2num(erase(resta(2),'m'));
            resta_Def(3)= str2num(erase(resta(3),'s'));
            segs = resta_Def(1)*3600+resta_Def(2)*60+resta_Def(3);
            if(segs>=lim)
                pastillas_ingresadas= pastillas_ingresadas+1;
                enable = 0;
            end
        end
    end
end

data = thingSpeakRead(1393024,'Field', [1,2,3,4,5,6,7,8], 'NumPoints', 1, 'ReadKey', 'SHQT9SFZTFGKBJEE','OutputFormat','table');

pastillas_actuales = data(1,2).Variables;

pastillas_actuales= pastillas_actuales+ pastillas_ingresadas-pastillas_tomadas;

pastillas_tratamiento = data(1,3).Variables;

pastillas_tratamiento = pastillas_tratamiento- pastillas_tomadas;

temperatura_time = str2num(string(data(1,8).Variables));
humedad_time = str2num(string(data(1,9).Variables));




desviacion = data(1,6).Variables;
desviacion=string(desviacion).split('/')
desviacion =(desviacion(1:length(desviacion)-1));

vector_alarma = (string(data(1,4).Variables).split('/'));
vector_alarma =(vector_alarma(1:length(vector_alarma)-1));
dia_s= str2num(string(data(1,7).Variables));

i = 1;
for i = 1:length(vector_alarma)
    vector_alarma_2(i) = str2num(vector_alarma(i));
    desviacion(i)= str2num(desviacion(i));
end

vector_cumplido = (string(data(1,5).Variables).split('/'));
vector_cumplido =(vector_cumplido(1:length(vector_cumplido)-1));
i = 1;


data_3 = thingSpeakRead(1345669,'Field', [2,3,6], 'NumPoints', 1, 'ReadKey', 'VOJD7XGKRBQ8DST1','OutputFormat','table');
data_4 = thingSpeakRead(1345669,'Field', [4,7], 'NumPoints', 1, 'ReadKey', 'VOJD7XGKRBQ8DST1','OutputFormat','table');
Npastillas = str2num(string(data_3(1,2).Variables));
hora =  string(data_3(1,3).Variables);
hora = hora.split("/");
hora= hora(2:length(hora)-1);
tiempo_actual = datetime('now');
[hora_actual, minuto_actual] = hms(tiempo_actual);
min_hora= 2561;

lim_temp = str2num(string(data_4(1,3).Variables));
lim_hum = str2num(string(data_4(1,2).Variables));

i = 1;
for i = 1: num_datos_read
    if(temperatura(i)> lim_temp)
        temperatura_time = temperatura_time+1;
    end
    
    if(humedad(i)> lim_hum)
        humedad_time = humedad_time+1;
    end
    i = 1;
end


for i = 1:length(hora)
    hora_2= hora(i,1);
    hora_2 = char(hora_2);
    hora_2 = string(hora_2(12:16));
    hora_2 =hora_2.split(':');
    hora_num(i,1)= str2num(hora_2(1));
    hora_num(i,2)= str2num(hora_2(2));
    vec_aux(i) = hora_num(i,1)*100+ hora_num(i,2);
end
i = 1;
hora_actual;
minuto_actual;
if(hora_actual-5<0)
    hora_actual = hora_actual-5+24;
else
    hora_actual = hora_actual-5;
end

for i = 1:length(vec_aux)
    hora_num(i,1)= floor(vec_aux(i)/100);
    hora_num(i,2)= vec_aux(i)-hora_num(i,1)*100;
    dif =abs(vec_aux(i)-hora_actual*100-minuto_actual);
    if((dif<min_hora))
            min_hora= dif;
            lect_hora= i
    end
    if(min_hora==2561)
        lect_hora = 1;
    end
end

vector_alarma_2(lect_hora) = vector_alarma_2(lect_hora)+pastillas_tomadas;

if(vector_alarma_2(lect_hora)==Npastillas  && (vector_cumplido(lect_hora) ~= '1' ) )
    vector_cumplido(lect_hora)='1';
    desviacion(lect_hora)=floor(min_hora/100)*60+ min_hora-floor(min_hora/100);
else
    if(vector_alarma_2(lect_hora)>Npastillas && (vector_cumplido(lect_hora) ~= '2' ))
        vector_cumplido(lect_hora)='2';
        writeChannelID=1397630;
        writeAPIKey='0F0F6LLMN445G9Q8';
        thingSpeakWrite(writeChannelID,'Fields',[1,2],'Values',{'1','0'},'WriteKey',writeAPIKey)
    end
end
i = 1;
vector_hora='';
vector_cumplido_2='';
desviacion_2 = '';
for i=1:length(hora)
    vector_cumplido_2= [vector_cumplido_2,char(vector_cumplido(i))];
    vector_cumplido_2= [vector_cumplido_2,'/'];
    vector_hora = [vector_hora,char(string(vector_alarma_2(i)))];
    vector_hora = [vector_hora,'/'] ; 
    desviacion_2 = [desviacion_2,char(string(desviacion(i)))];
    desviacion_2 = [desviacion_2,'/'] ;
end
fecha =datetime('now');
fecha = string(fecha);
fecha = fecha.split("-");
dia = str2num(fecha(1));


if(dia_s ~= dia)
    horacio =  string(data_3(1,3).Variables);
    horacio = horacio.split("/");
    vectis='';
    i = 1
    for i=1:length(horacio)-2
       vectis = [vectis,'0/'];
    end
    if(sum(vector_alarma_2)==0)
        writeChannelID=1397630;
        writeAPIKey='0F0F6LLMN445G9Q8';
        thingSpeakWrite(writeChannelID,'Fields',[1,2],'Values',{'0','1'},'WriteKey',writeAPIKey)
    end
    thingSpeakWrite(1391142,'Fields',[1,2,3,4,5,6,7,8],'Values',{vector_cumplido_2,vector_hora ,char(string(data_3(1,3).Variables)),desviacion_2,char(string(data_3(1,4).Variables)),char(string(data_3(1,2).Variables)),temperatura_time,humedad_time },'WriteKey','EFWH4FDFN5K7TX5S')
    thingSpeakWrite(1393024,'Fields',[1,2,3,4,5,6,7,8],'Values',{pastillas_actuales, pastillas_tratamiento,vectis,vectis,vectis, dia,'0','0'},'WriteKey','2I1UJOGW2LD22057')
else
    thingSpeakWrite(1393024,'Fields',[1,2,3,4,5,6,7,8],'Values',{pastillas_actuales, pastillas_tratamiento,vector_hora,vector_cumplido_2,desviacion_2, dia,temperatura_time,humedad_time},'WriteKey','2I1UJOGW2LD22057')
end