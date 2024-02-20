let  levels={
    ".facile":true,
    ".intermediaire":false,
    ".difficile":false
}
let pace;
let tryNumber;
let randomNumber;
let gameStarted=false;
const startButton=document.querySelector("#startGame");
const print=document.querySelector(".print");
const input=document.querySelector("#input");
const validate=document.querySelector("#validate");
const otherGame=document.querySelector("#otherGame");
resetButtonColor();
function resetButtonColor(){
    for(i in levels){
        const level=document.querySelector(i);
        if(levels[i]){
            level.style.backgroundColor='blue';
        }
        else{
            level.style.backgroundColor='white';
        }
    }
}
function placeEventListener(target){
    const level=document.querySelector(target);
    level.addEventListener('click',()=>{
        for( i in levels){
            levels[i]=false;
        }
        levels[target]=true;
        resetButtonColor();
    })
}
for(i in levels){
    placeEventListener(i);
}
startButton.addEventListener('click',
()=>{
    input.value=""
    for(button in levels){
        const levelButton=document.querySelector(button);
        levelButton.disabled=true;
    }
    if(levels[".facile"]==true){
        pace=30;
        tryNumber=4;
    }
    else if(levels[".intermediaire"]==true){
         pace=60;
         tryNumber=6;
    }else{
         pace=100
         tryNumber=8;
    }
     randomNumber=Math.floor(Math.random()*(pace));
    console.log(randomNumber);
    print.innerText="devinez le nombre !!!";
    gameStarted=true;
})
validate.addEventListener('click',()=>{
    tryNumber--;
    if(input.value===""){
        alert("entrez un nombre s'il vous plait")
    }
    else if(!gameStarted){
        alert("vous devez commencez le jeu")
    }
    else if(+input.value===randomNumber){
        print.innerText="Bravo,vous avez gagné"
        validate.disabled=true;
        startButton.disabled=true;
    }
    else if(tryNumber===0){
       print.innerText="vous avez perdu\n faire une autre partie";
       validate.disabled=true;
        startButton.disabled=true;

    }else{
        if(input.value===randomNumber){
            print.innerText="Bravo,vous avez gagné"
        }else if( input.value<randomNumber){
           print.innerText=`le nombre est plus grand \n il vous reste ${tryNumber} chances`;
        }
        else{
            print.innerText=`le nombre est plus  petit \n il vous reste ${tryNumber} chances`;
        }
    }
})
otherGame.addEventListener('click',()=>{
    print.innerText="";
    input.value="";
    validate.disabled=false;
    startButton.disabled=false;
    for(button in levels){
        const levelButton=document.querySelector(button);
        levelButton.disabled=false;
    }
})
