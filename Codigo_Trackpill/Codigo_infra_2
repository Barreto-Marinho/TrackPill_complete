readChannelID = 1345667;
% TODO - Enter the Read API Key between the '' below:
readAPIKey = '9J8GYR4CBQ0JXYJK';
num_datos_read=30;
cont = 1;
mul = 1;
while(cont)
    data = thingSpeakRead(readChannelID,'Field', 3, 'NumPoints', num_datos_read*mul, 'ReadKey', readAPIKey,'OutputFormat','table');
    aux_2 = 1;
    for j = 1:num_datos_read
        infrarojo_1 = data(j,2);
        infrarojo_1 = string(infrarojo_1.Variables);
        infrarojo_1= split(infrarojo_1,'/');
        n = floor(length(infrarojo_1)/10);
        cond = 0;
        clear i
        %%j 
        %%length(infrarojo_1)
        if((infrarojo_1(1)=='2C1d1')&& (length(infrarojo_1)>6))
            for(i = 1:n)
                if((infrarojo_1(10*i-1) == 'E2') && (infrarojo_1(10*i+1) == " "))
                    cond = 1;
                    aux= 10*(i-1);
                    var= strcat(infrarojo_1(aux+4),'-',infrarojo_1(aux+3),'-',infrarojo_1(aux+2)," ",infrarojo_1(aux+5),':',infrarojo_1(aux+6),':',infrarojo_1(aux+7),'.',infrarojo_1(aux+8));
                    tS1(2*i) = datetime(var,'InputFormat','yyyy-MM-dd HH:mm:ss.SSS');
                    milisegundo= num2str(str2num(infrarojo_1(aux+8))-1);
                    var = strcat(infrarojo_1(aux+4),'-',infrarojo_1(aux+3),'-',infrarojo_1(aux+2)," ",infrarojo_1(aux+5),':',infrarojo_1(aux+6),':',infrarojo_1(aux+7),'.',milisegundo);
                    tS1(2*i-1) = datetime(var,'InputFormat','yyyy-MM-dd HH:mm:ss.SSS');
                    es_1(2*i)= str2num(infrarojo_1(10*i));
                    if(es_1(2*i) == 1)
                        es_1(2*i-1)=0;
                    else
                        es_1(2*i-1)=1;
                    end
                end
            end
            if(cond)
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
    mul = mul+1;
end
plot(tiempo,ygraf)
if(tiempo(1) > tiempo(length(tiempo))-minutes(3))
    mintime= tiempo(1);
else
    mintime= tiempo(length(tiempo))-minutes(3);
end
xlim([mintime tiempo(length(tiempo))]);
ylim([-0.1 1.1])
grid on;
xlabel('Tiempo')
ylabel('Detección')
title('Grafica infrarrojo 2')
