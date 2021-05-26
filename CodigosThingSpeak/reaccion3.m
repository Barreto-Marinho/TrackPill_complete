% Enter your MATLAB Code below
data = thingSpeakRead(1345669,'Field', [3,8], 'NumPoints', 1, 'ReadKey', 'VOJD7XGKRBQ8DST1','OutputFormat','table');

pastillas_tratamiento = data(1,3).Variables;

data_2 = thingSpeakRead(1393024,'Field', [1,6], 'NumPoints', 1, 'ReadKey', 'SHQT9SFZTFGKBJEE','OutputFormat','table');

hora =  string(data(1,2).Variables);

hora = hora.split("/");

dia = char(string((data_2(1,3).Variables)));
%%dia= '21';
pastillas_actuales = data_2(1,2).Variables;

vector_hora='';
for i=1:length(hora)-2
   vector_hora = [vector_hora,'0/'];
end

thingSpeakWrite(1393024,'Fields',[1,2,3,4,5,6,7,8],'Values',{pastillas_actuales,pastillas_tratamiento, vector_hora, vector_hora,vector_hora,dia,'0','0'},'WriteKey','2I1UJOGW2LD22057')


