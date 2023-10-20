// Iteration 2: Generate 2 random number and display it on the screen

const num1 = Math.floor(Math.random()*100)
const num2 = Math.floor(Math.random()*100)

const number_1 = document.getElementById("number1");
const number_2 = document.getElementById("number2");

number_1.innerText = num1;
number_2.innerText = num2;


// Iteration 3: Make the options button functional

const gtrthn = document.getElementById("greater-than");
const eqlto = document.getElementById("equal-to");
const lessthn = document.getElementById("lesser-than");


const buttons = document.getElementById("buttons");

var totscore = Number(sessionStorage.getItem('score')) || 0;


buttons.addEventListener('click', (event) =>{
    if(num1>num2 && event.target.alt == "greater-than-button"){
        console.log("correct")
        totscore += 1;
        sessionStorage.setItem('score' , totscore);
        window.location.href = "game.html"

    }
    else if(num1 == num2 && event.target.alt == "equal-to-button"){
        console.log("correct")
        totscore +=1 ;
        sessionStorage.setItem('score' , totscore);
        window.location.href = "game.html"
    }
    else if(num1<num2 && event.target.alt == "less-than-button"){
        console.log("correct")
        totscore += 1;
        sessionStorage.setItem('score' , totscore);
        window.location.href = "game.html"
    }
    else{
        console.log("not correct")
        sessionStorage.setItem('score' , totscore);
        window.location.href = "gameover.html"
    }
})


const timer = document.getElementById("timer")

var counter = 5;

setInterval(() => {
    timer.innerText = counter;
    counter -= 1;
    if(counter <0){
        window.location.href = "gameover.html"
    }
}, 1000);