

  var alternativaCorreta= "c";
    
  var myBtn = document.getElementById('myButton');


  myBtn.addEventListener('click', function(event) {
   
    var maximoTentativas = 3;
    var tentativaAtual = 1;

    while(tentativaAtual <= maximoTentativas) {

        var  SelecioneAlertnativa = prompt("Alternativa ?");
        

        if( alternativaCorreta == SelecioneAlertnativa ) {

            alert("Resposta Correta, apesar de ser o caminho mais longo é o menos perigoso", + SelecioneAlertnativa);
            window.location.assign("../poçoes/indexpoção.html")
            

            tentativaAtual = maximoTentativas; 
            
        } else if(tentativaAtual < 3 ) {

            alert("Resposta incorreta. Tente novamente");
            
        } else{
            alert("GAME OVER")
            window.location.assign("../game over/indexgameover.html")
        }

        tentativaAtual++;
    }
});

    
