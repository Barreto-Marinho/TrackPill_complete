readChannelID = 1397630;
% TODO - Enter the Read API Key between the '' below:
readAPIKey = 'QAKQH46XZBYM5P81';


while(1)
    pause(25)
    data = thingSpeakRead(readChannelID,'NumPoints', 1, 'ReadKey', readAPIKey,'OutputFormat','table');
    data_2 = thingSpeakRead(1397650,'NumPoints', 1, 'ReadKey', '5OP4OUGKW21F6TRF','OutputFormat','table');
    correo = string(data_2(1,2).Variables)
    if((string(data(1,2).Variables))=='1')
        Asunto = "Notificacion Trackpill";
        Mensaje = "Tu ser querido se sobremedico, por favor contactate con el lo mas pronto posible, ya que estamos preocupados por su seguridad";
    end
    if(((string(data(1,3).Variables))=='1'))
        Asunto = "Notificacion Trackpill";
        Mensaje = "Tu ser querido no ha tomado ninguna pastilla en todo el dia, por favor contactate con el lo mas pronto posible, ya que estamos preocupados por su seguridad";  
    end

    if(((string(data(1,2).Variables))=='1') || ((string(data(1,3).Variables))=='1'))
        mail    = 'Trackpillsa@gmail.com'; 
        password = 'Sebasman12';
        setpref('Internet','SMTP_Server','smtp.gmail.com');
        setpref('Internet','E_mail',mail);
        setpref('Internet','SMTP_Username',mail);
        setpref('Internet','SMTP_Password',password);
        props = java.lang.System.getProperties;
        props.setProperty('mail.smtp.auth','true');
        props.setProperty('mail.smtp.starttls.enable','true');
        props.setProperty('mail.smtp.socketFactory.port','465');
        %props.setProperty('mail.smtp.socketFactory.class', 'javax.net.ssl.SSLSocketFactory');
        %props.setProperty('mail.smtp.socketFactory.port','25');
        sendmail(correo,Asunto,Mensaje)
        writeChannelID=1397630;
        writeAPIKey='0F0F6LLMN445G9Q8';
        pause(25);
        thingSpeakWrite(writeChannelID,'Fields',[1,2],'Values',{'0','0'},'WriteKey',writeAPIKey)
    end
end