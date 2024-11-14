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