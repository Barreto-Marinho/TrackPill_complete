% Declarar ID del canal
readChannelID = 1345667;
% Declarar apikey de lectura del canal
readAPIKey = '9J8GYR4CBQ0JXYJK';

% Se leen los ultimos 30 datos del primer canal 
data = thingSpeakRead(readChannelID,'Field', 1, 'NumPoints', 30, 'ReadKey', readAPIKey,'OutputFormat','table');
cont = 1;%declara variable auxiliar
for j = 1: height(data) 
    tempe_hume = ((data(j,2))); %lectura dato en posicion j
    tempe_hume = string(tempe_hume.Variables);   % extraccion de tablla a string
    tempe_hume= split(tempe_hume,'/');           % separacion de los string con / 
    if(length(tempe_hume)==10)                   % Se verifica la extension del canal 
        var= strcat(tempe_hume(3),'-',tempe_hume(2),'-',tempe_hume(1)," ",tempe_hume(4),':',tempe_hume(5),':',tempe_hume(6));
        tStamp(cont) = datetime(var,'InputFormat','yyyy-MM-dd HH:mm:ss');
        temp(cont)= str2num(tempe_hume(8));
        cont = cont+1;
    end
end
plot(tStamp,temp);
grid on 
xlabel('Tiempo')
ylabel('Temperatura(°C)')
ylim([min(temp)-1 max(temp)+1])
title('Temperatura')
