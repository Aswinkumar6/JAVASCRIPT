/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,dice;

scores =[0,0];
roundScore= 0;
activePlayer=0;


//document.querySelector('#current-'+activePlayer).textContent= dice;
//document.querySelector('#current-'+activePlayer).innerHTML= '<em>' +dice+ '</em>';




//var x= document.querySelector('#score-0').textContent;

//console.log(x);

//function btn(){
//console.log("called btn fn");

//}
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
//------------------------------NEW BUTTON-----------------------------------
document.querySelector('.btn-new').addEventListener('click',function(){

  document.querySelector('.btn-hold').style.display='block';
  document.querySelector('.btn-roll').style.display='block';
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');

scores =[0,0];
roundScore= 0;
activePlayer=0;

});


document.querySelector('.btn-roll').addEventListener('click',function(){
//1.Random no
var dice= Math.floor(Math.random()*6)+1;
//2. Display Result
var diceDOM= document.querySelector('.dice');
diceDOM.style.display='block';
diceDOM.src= 'dice-'+dice+'.png';
//3. Update round score
        if (dice !== 1 ){

                            roundScore=roundScore+dice;
                            document.querySelector('#current-'+activePlayer).textContent= roundScore;

                          }
      else{
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            activePlayer === 0? activePlayer=1 :activePlayer=0 ;
            roundScore=0;
            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';
//document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
          }
    document.querySelector('.btn-hold').style.display='block';
});

//------------------------------------------Hold fUNCTION------------------------------------------------
document.querySelector('.btn-hold').addEventListener('click',function(){
//activePlayer==0?activePlayer=1:activePlayer=0;
scores[activePlayer]= roundScore + scores[activePlayer];
  if (scores[activePlayer]>10 ){
    document.querySelector('.btn-hold').style.display='none';
    document.querySelector('.btn-roll').style.display='none';
      document.getElementById('current-0').textContent='0';
      document.getElementById('current-1').textContent='0';

    alert("Player" +(activePlayer+1)+" Won. Score is:" +scores[activePlayer]+". Click on New Game");

  }
else{


document.querySelector('#score-'+activePlayer).textContent= scores[activePlayer];

//document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
activePlayer==0?activePlayer=1:activePlayer=0;
roundScore=0;
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');

}
document.querySelector('.btn-hold').style.display='none';
});
