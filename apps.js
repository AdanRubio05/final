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


function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("message").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "riddler_message.xml");
    xhttp.send();
  }

function myOption1() {
    alert("Are you even trying?!");
  }

  function myOption3() {
    alert("Someone clearly can't recite the alphabet.");
  }

  function myOption4() {
    alert("Tut tut, you really are a dummard.");
  }

  function myOption5() {
    alert("I don't know if I should cry or laugh!");
  }

  function myOption6() {
    alert("Your intellect is starting to irritate me...");
  }

  function myOption7() {
    alert("Clearly, Gotham sent their 'best'.");
  }

  function myOption8() {
    alert("Can't you tell the difference between numbers and letters? Apples to Oranges.");
  }

