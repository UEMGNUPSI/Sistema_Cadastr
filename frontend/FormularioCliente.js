function troca1(){
    var RGlabel = document.getElementById('RGlabel');
    RGlabel.innerHTML = 'RG';

    var CPFlabel = document.getElementById('CPFlabel');
    CPFlabel.innerHTML = 'CPF';

    var Apelidolabel = document.getElementById('Apelidolabel');
    Apelidolabel.innerHTML = 'Apelido';

    var DTNlabel = document.getElementById('DTNlabel');
    DTNlabel.innerHTML = 'Data de Nascimento';

    var Nomelabel = document.getElementById('Nomelabel');
    Nomelabel.innerHTML = 'Nome';
    };
    
    function troca2(){
    var RGlabel = document.getElementById('RGlabel');
    RGlabel.innerHTML = 'IE';

    var CPFlabel = document.getElementById('CPFlabel');
    CPFlabel.innerHTML = 'CNPJ';

    var Apelidolabel = document.getElementById('Apelidolabel');
    Apelidolabel.innerHTML = 'Nome Fantasia';

    var DTNlabel = document.getElementById('DTNlabel');
    DTNlabel.innerHTML = 'Data de Abertura';

    var Nomelabel = document.getElementById('Nomelabel');
    Nomelabel.innerHTML = 'Razão Social';

    


    };

    function DataAtual(){
        Dataatual= new Date();
        year = Dataatual.getFullYear();
        month = Dataatual.getMonth() + 1;
        day = Dataatual.getDate();
        document.getElementById("Dataatual").innerHTML =  day + "/" + month + "/" + year;
   }


    
