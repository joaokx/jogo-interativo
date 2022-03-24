var alternativaCorreta= "b";
var myBtn = document.getElementById('myButton');


myBtn.addEventListener('click', function(event) {

    var maximoTentativas = 2;
    var tentativaAtual = 1;

    while(tentativaAtual <= maximoTentativas) {

        var  SelecioneAlertnativa = prompt("Alternativa ?");
        

        if( alternativaCorreta == SelecioneAlertnativa ) {

            alert("Você decide usar seu Elixir mas o monstro o toma e acaba tendo efeito contrário tendo medo de qualquer coisa que o ataque, Sendo assim você o destroi com sua arma  e acaba  recuperando o pergaminho Sagrado ", + SelecioneAlertnativa);
            window.location.assign("../faze final/indexfinal.html")

            tentativaAtual = maximoTentativas; 

        } else if(tentativaAtual < 2) {

            alert("Resposta incorreta, o monstro preve seu movimento e te ataca . Tente novamente");
            
        } else{
            alert("GAME OVER")
            window.location.assign("../game over/indexgameover.html")
        }

        tentativaAtual++; 

    }
});
