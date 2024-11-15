const game = ()=>{
    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button') ;
        const introScreen = document.querySelector('.intro') ;
        const puzzle = document.querySelector('.puzzle') ;

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut') ;
            puzzle.classList.add('fadeIn') ;
        });
    };


    //inner function call
    startGame();

};

//game call
game();

function myOption1() {
    alert("Are you even trying?!");
  }

  function myOption3() {
    alert("Someone clearly can't recite the alphabet. XD");
  }

