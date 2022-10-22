const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

//get all the elements first

var quiz = document.getElementById("quiz");//quiz container
var question = document.getElementById("question");//question
var optionList = document.querySelectorAll(".optionList")//radio button
//each option
var aOption = document.getElementById('aOption')
var bOption = document.getElementById('bOption')
var cOption = document.getElementById('cOption')
var dOption = document.getElementById('dOption')
//submit
var submit = document.getElementById("submit")


var score =0;
var quizCount = 0;
loadquiz();
function loadquiz(){
    deselectOption();
    var currentquizData = quizData[quizCount]
    question.innerText = currentquizData.question
    aOption.innerText = currentquizData.a;
    bOption.innerText = currentquizData.b;
    cOption.innerText = currentquizData.c;
    dOption.innerText = currentquizData.d;
   
}

//deselect options initially

function deselectOption(){
    optionList.forEach(Element=>{
        Element.checked=false
    })
}

//selection of option

function selectOption(){
    var selectedAnswer
    optionList.forEach(Element=>{
        if(Element.checked){
            selectedAnswer = Element.id;
        }
    })
    return selectedAnswer;
}


submit.addEventListener("click",()=>{
    
    let answer = selectOption();
    
    if(answer == quizData[quizCount].correct)
    {
        score++;
        
    }
    quizCount++;
    if(quizCount<quizData.length){
        loadquiz();
    }
    else{
        quiz.innerHTML=(
            `
            <h2>You scored ${score}/${quizData.length}</h2>
            <button id = "submit" onClick = location.reload()>Reload</button>
            `
        )
        quiz.style.backgroundColor = "transparent";
        quiz.style.border = "none"
        
        document.body.style.backgroundImage = "url('https://previews.123rf.com/images/neirfy/neirfy1802/neirfy180200329/95767291-bright-colorful-carnival-or-party-scene-of-metalic-confetti-on-yellow-background-flat-lay-style-birt.jpg')"
    }
})