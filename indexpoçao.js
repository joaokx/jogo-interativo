var alternativaCorreta= "a";
var myBtn = document.getElementById('myButton');


myBtn.addEventListener('click', function(event) {

    var maximoTentativas = 3;
    var tentativaAtual = 1;

    while(tentativaAtual <= maximoTentativas) {

        var  SelecioneAlertnativa = prompt("Alternativa ?");
        

        if( alternativaCorreta == SelecioneAlertnativa ) {

            alert("Resposta Correta ,Parabéns Somente com a  Bravura sera capaz de derrotar o Monstro ", + SelecioneAlertnativa);
            window.location.assign("../monstro/indexmonstro.html")

            tentativaAtual = maximoTentativas; 

        } else if(tentativaAtual < 3 ) {

            alert("Resposta incorreta, O elixir não surtira efeito no monstro. Tente novamente");
            
        } else{
            alert("GAME OVER")
            window.location.assign("../game over/indexgameover.html")
        }

        tentativaAtual++; 

    }
});
