var alternativaCorreta= "b";
    

    var maximoTentativas = 3;
    var tentativaAtual = 1;

    while(tentativaAtual <= maximoTentativas) {

        var  SelecioneAlertnativa = prompt("Alternativa ?");
        

        if( alternativaCorreta == SelecioneAlertnativa ) {

            alert("Resposta Correta", + SelecioneAlertnativa);
            window.location.assign("../armas/armas.html")

            tentativaAtual = maximoTentativas; 

        } else if(tentativaAtual < 3 ) {

            alert("Resposta incorreta. Tente novamente");
            
        } else{
            alert("GAME OVER")
            window.location.assign("../gameover.html")
        }

        tentativaAtual++; 

    }