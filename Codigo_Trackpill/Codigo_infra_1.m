% Declarar ID del canal
readChannelID = 1345667;
% Declarar key del canal
readAPIKey = '9J8GYR4CBQ0JXYJK';
% Declarar numero de datos a leer
num_datos_read=30;
%Declarar variables auxiliares
cont = 1;
mul = 1;
while(cont)  % Inicio de bucle para asegurar que si se esten leyendo cambios
    % Se leen los ultimos num_datos_read del canal 2
    data = thingSpeakRead(readChannelID,'Field', 2, 'NumPoints', num_datos_read*mul, 'ReadKey', readAPIKey,'OutputFormat','table');
    aux_2 = 1; % Se declara un aux
    for j = 1:num_datos_read    % Se recorre los num_datos_read  leidos
        infrarojo_1 = data(j,2);    %Se lee el dato j
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
                    tS1(2*i) = datetime(var,'InputFormat','yyyy-MM-dd HH:mm:ss.SSS');
                    % Se declara variable de que tenga la misma estampa de tiempo pero 1 milisegundo antes
                    milisegundo= num2str(str2num(infrarojo_1(aux+8))-1);
                    var = strcat(infrarojo_1(aux+4),'-',infrarojo_1(aux+3),'-',infrarojo_1(aux+2)," ",infrarojo_1(aux+5),':',infrarojo_1(aux+6),':',infrarojo_1(aux+7),'.',milisegundo);
                    tS1(2*i-1) = datetime(var,'InputFormat','yyyy-MM-dd HH:mm:ss.SSS');
                    % Se lee estado de la variable
                    es_1(2*i)= str2num(infrarojo_1(10*i));
                    if(es_1(2*i) == 1)%% Asegurar que el dato justamente anterior sea el negado para construir la señal completa
                        es_1(2*i-1)=0;
                    else
                        es_1(2*i-1)=1;
                    end
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
                end
                clear tS1 es_1;
            end
        end
    end
    mul = mul+1; % Se suma multi para el caso en el que los ultimos 30 datos no se hayan modificado
end
plot(tiempo,ygraf) % se grafica los datos tomados
if(tiempo(1) > tiempo(length(tiempo))-minutes(3))
    mintime= tiempo(1);
else
    mintime= tiempo(length(tiempo))-minutes(3);
end
xlim([mintime tiempo(length(tiempo))]); % se limita el tiempo para observarlo mejor
ylim([-0.1 1.1])                        % se aumenta la escala en y para observar mejor la señal
grid on;
xlabel('Tiempo')
ylabel('Detección')
title('Grafica infrarrojo 1')
