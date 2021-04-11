readChannelID = 1345667;
% TODO - Enter the Read API Key between the '' below:
readAPIKey = '9J8GYR4CBQ0JXYJK';


data = thingSpeakRead(readChannelID,'Field', 1, 'NumPoints', 30, 'ReadKey', readAPIKey,'OutputFormat','table');
cont = 1;
for j = 1: height(data)
    tempe_hume = ((data(j,2)));
    tempe_hume = string(tempe_hume.Variables);
    tempe_hume= split(tempe_hume,'/');
    if(length(tempe_hume)==10)
        var= strcat(tempe_hume(3),'-',tempe_hume(2),'-',tempe_hume(1)," ",tempe_hume(4),':',tempe_hume(5),':',tempe_hume(6));
        tStamp(cont) = datetime(var,'InputFormat','yyyy-MM-dd HH:mm:ss');
        hume(cont)= str2num(tempe_hume(10));
        cont = cont+1;
    end
end
plot(tStamp,hume);
grid on 
xlabel('Tiempo')
ylabel('Humedad(%)')
ylim([min(hume)-1 max(hume)+1])
title('Humedad')
