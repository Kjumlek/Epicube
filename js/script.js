const cube = document.querySelector('.cube');
let leftPos = 2;
let topPos = 2;
let turnY = 0;
let turnX = 0;
let turnZ = 0;
let loose = false;

var gramPoints = document.getElementById("uu");
var gramPoints2 = document.getElementById("message");


let indicUp = document.querySelector(".indicUp");
let indicRight = document.querySelector(".indicRight");
let indicDown = document.querySelector(".indicDown");
let indicLeft = document.querySelector(".indicLeft");
let indicRoof = document.querySelector(".indicRoof");
let indicFloor = document.querySelector(".indicFloor");
///////////////////////////////////////////////
var soundPlus = 1;
function groundPlay(){
    if(soundPlus === 1){
        ground1.play();
        soundPlus++;
    }
    else if(soundPlus === 2){
        ground2.play();
        soundPlus++;
    }
    else if(soundPlus === 3){
        ground3.play();
        soundPlus++;
    }
    else if(soundPlus === 4){
        ground4.play();
        soundPlus++;
    }
    else if(soundPlus === 5){
        ground5.play();
        soundPlus++;
    }
    else if(soundPlus === 6){
        ground6.play();
        soundPlus++;
    }
    else if(soundPlus === 7){
        ground7.play();
        soundPlus++;
    }
    else if(soundPlus === 8){
        ground8.play();
        soundPlus = 1;
    }
};

var soundEnemyPlus = 1;
function enemyPlay(){
    if(soundEnemyPlus === 1){
        enemy1.play();
        soundEnemyPlus++;
    }
    else if(soundEnemyPlus === 2){
        enemy2.play();
        soundEnemyPlus++;
    }
    else if(soundEnemyPlus === 3){
        enemy3.play();
        soundEnemyPlus++;
    }
    else if(soundEnemyPlus === 4){
        enemy4.play();
        soundEnemyPlus++;
    }
    else if(soundEnemyPlus === 5){
        enemy5.play();
        soundEnemyPlus++;
    }
    else if(soundEnemyPlus === 6){
        enemy6.play();
        soundEnemyPlus++;
    }
    else if(soundEnemyPlus === 7){
        enemy7.play();
        soundEnemyPlus++;
    }
    else if(soundEnemyPlus === 8){
        enemy8.play();
        soundEnemyPlus = 1;
    }
};

var soundKillPlus = 1;
function killPlay(){
    if(soundKillPlus === 1){
        kill1.play();
    }
    soundKillPlus++;
};


function pointsPlay(){
    points1.play();
};

var soundTurnPlus = 1;
function turnPlay(){

    if(soundTurnPlus === 1){
        turn5.play();
        soundTurnPlus++;
        turn5.volume = 0.3;
    }
    else if(soundTurnPlus === 2){
        turn6.play();
        soundTurnPlus++;
        turn6.volume = 0.3;
    }
    else if(soundTurnPlus === 3){
        turn7.play();
        soundTurnPlus = 1;
        turn7.volume = 0.3;
    }
};
var soundMegaTurnPlus = 1;
function megaturnPlay(){
    if(soundMegaTurnPlus === 1){
        turn1.play();
        soundMegaTurnPlus++;
        turn1.volume = 0.3;
    }
    else if(soundMegaTurnPlus === 2){
        turn2.play();
        soundMegaTurnPlus++;
        turn2.volume = 0.3;
    }
    else if(soundMegaTurnPlus === 3){
        turn3.play();
        soundMegaTurnPlus = 1;
        turn3.volume = 0.3;
    }
    
    else if(soundMegaTurnPlus === 4){
        turn4.play();
        soundMegaTurnPlus = 1;
        turn4.volume = 0.3;
    }
};
var turnMemo = 10;


///////////////////////////////////////////////
//Elements principaux
///////////////////////////////////////////////
//Terrain de jeu
let theGrid = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];
let cubeInGrid = [
    [0,0,0,0,0],
    [0,0,2,0,0],
    [0,4,3,5,0],
    [0,0,6,0,0],
    [0,0,0,0,0]
];





let level5 = [
    [3,2,1,2,3],
    [2,0,0,0,2],
    [8,0,0,0,8],
    [0,0,0,0,0],
    [0,0,0,0,0]
];
let level2 = [
    [3,0,0,0,3],
    [0,0,0,0,0],
    [0,7,0,7,0],
    [3,0,0,0,3],
    [7,5,5,5,7]
];
let level3 = [
    [1,0,0,0,2],
    [0,0,7,7,0],
    [0,0,0,0,0],
    [0,7,7,0,0],
    [4,0,0,0,3]
];
let level4 = [
    [7,7,3,7,7],
    [2,0,0,0,4],
    [7,0,0,0,7],
    [1,0,0,0,5],
    [7,7,6,7,7]
];
let level10 = [
    [1,7,0,7,1],
    [0,0,0,0,0],
    [7,0,0,0,7],
    [0,0,0,0,0],
    [1,7,0,7,1]
];
let level1 = [
    [7,0,0,0,7],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [7,0,0,0,7]
];

var color = ["colorNull", "colorRed", "colorOrange", "colorYellow", "colorGreen", "colorBlue", "colorUv", "colorWall", "colorDoorLocked", "colorDoorOpen"];

var scorePlayer = 0;

///////////////////////////////////////////////
//Transfert des couleurs de la grille
///////////////////////////////////////////////

let rdmX = 0;
let rdmY = 0;
let rdmC = 0;
let score = 1;

function randomize(x){
    let rnd = (Math.floor(Math.random() * x)) + 1;
    return rnd;
}

function randomCase() {
    if (!loose){

        rdmX = randomize(5);
        rdmY = randomize(5);
        rdmC = randomize(6);

        if((rdmY - 1 == topPos && rdmX - 1 == leftPos) || (theGrid[rdmY - 1][rdmX - 1] !== 0)){
            randomCase();
        } 
        
        else {
            document.querySelector(".case" + rdmY + rdmX).className = "case case"+ rdmY + rdmX + " " + color[rdmC];
            theGrid[rdmY - 1][rdmX - 1] = rdmC;
        }
    }
};


// function drawLevel(x){
//     cube.style.left = 12 + "rem";
//     cube.style.top = 12 + "rem";
//     cube.style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
//     topPos = 2;
//     leftPos = 2;
//     turnY = 0;
//     turnX = 0;
//     turnZ = 0;
    

//     theGrid = x;
//     for (let i = 1; i < 6; i++){
//         for(let j = 1; j < 6; j++){
//             document.querySelector(".case" + i + j).className = "case case"+ i + j + " " + color[x[i - 1][j - 1]];
//         }
//     }

// };



let hardness = 0;
let timer = document.getElementById("timerBar");
let time = 100;


let movinTime = 1;
let sentinelY = 4;
let sentinelX = 4;
let vectorSentinel = 0;
let stopLeft = false;
let stopUp = false;
let stopRight = false;
let stopDown = false;
let degres = 90;

let sentinel = document.getElementById("sentinel");
sentinel.style.top = sentinelY * 6 + "rem";
sentinel.style.left = sentinelX * 6 + "rem";
// console.log(sentinelY, sentinelX);
spidow = function() {
    if(!loose){
        time-= 0.1 + hardness;
    } else {
        time = 0;
    }
    
    timer.style.width = Math.abs(time) + "%";
    if (time <= 0){
        randomCase();
        if(!loose){
            loosePoint.play();
        };
        
        time = 100;
    }

    //Trapped System
    if ((topPos == 4 || (theGrid[parseInt(topPos) + 1][leftPos] !== 0)) &&
    (topPos == 0 || (theGrid[parseInt(topPos) - 1][leftPos] !== 0)) &&
    (leftPos == 4 || (theGrid[topPos][parseInt(leftPos) + 1] !== 0)) &&
    (leftPos == 0 || (theGrid[topPos][parseInt(leftPos) - 1] !== 0))){
        gramPoints2.innerHTML = "Trapped!";
        loose = true;
    }






    //Trapped System
    if (topPos === sentinelY && leftPos == sentinelX){
        killPlay();
        soundKillPlus = 5;
        gramPoints2.innerHTML = "Killed!";
        loose = true;
        cube.style.transformStyle = "flat";
        cube.style.transform = "rotateX(0deg) translateZ(-2.9rem)";
        cube.style.background = 
        "radial-gradient(#ff0000 2%, transparent 70%)";
    }







    if ((sentinelX === leftPos + 1 && sentinelY === topPos && vectorSentinel == 0)
    || (sentinelX === leftPos && sentinelY === topPos + 1 && vectorSentinel == 1)
    || (sentinelX === leftPos - 1 && sentinelY === topPos && vectorSentinel == 2)
    || (sentinelX === leftPos && sentinelY === topPos - 1 && vectorSentinel == 3)){
        movinTime -= .2;
    }

    movinTime -= 0.01;
    if (movinTime < 0){
        enemyPlay();
        if(turnMemo != vectorSentinel){
            turnPlay();
            turnMemo = vectorSentinel;
        };
        //left
        if (vectorSentinel == 0){

            
            if((sentinelX === leftPos + 1) && (sentinelY === topPos)){
                sentinelX -= 1;
                movinTime = .2;
            }
            else if(sentinelY < 4 && theGrid[sentinelY + 1][sentinelX] === 0 
                && theGrid[sentinelY + 1][sentinelX + 1] !== 0 
                && !stopDown){
                vectorSentinel = 3;
                stopRight = true;
                degres -= 90;
            } else if (sentinelX > 0 && (theGrid[sentinelY][sentinelX - 1] === 0)){
                // console.log("left");
                sentinelX -= 1;
                movinTime = .5;
                stopDown = false;
            } else if (sentinelY > 0 && (theGrid[sentinelY - 1][sentinelX] === 0)){
                vectorSentinel = 1;
                degres += 90;
            } else {
                vectorSentinel = 2;
                degres += 180;
                megaturnPlay();
                turnMemo = vectorSentinel
                movinTime = .5;
            }
        } 
        //up
        else if (vectorSentinel == 1){

            if((sentinelX === leftPos) && (sentinelY === topPos + 1)){
                sentinelY -= 1;
                movinTime = .2;
            }
            else if (sentinelX > 0 && (theGrid[sentinelY][sentinelX - 1] === 0)
            && (sentinelY == 4 || theGrid[sentinelY + 1][sentinelX - 1] !== 0)  
            && !stopLeft){
                vectorSentinel = 0;
                stopDown = true;
                degres -= 90;
            } else if (sentinelY > 0 && (theGrid[sentinelY - 1][sentinelX] === 0)){
                // console.log("up");
                sentinelY -= 1;
                movinTime = .5;
                stopLeft = false;
            } else if (sentinelX < 4 && theGrid[sentinelY][sentinelX + 1] === 0){
                vectorSentinel = 2;
                degres += 90;
            } else {
                vectorSentinel = 3;
                degres += 180;
                megaturnPlay();
                turnMemo = vectorSentinel
                movinTime = .5;
            }
        }
        //right
        else if (vectorSentinel == 2 ){
 
            if((sentinelX === leftPos - 1) && (sentinelY === topPos)){
                sentinelX += 1;
                movinTime = .2;
            }
            else if (sentinelY > 0 && (theGrid[sentinelY - 1][sentinelX] === 0) 
            && theGrid[sentinelY - 1][sentinelX - 1] !== 0
            && !stopUp){
                vectorSentinel = 1;
                stopLeft = true;
                degres -= 90;
            } else if (sentinelX < 4 && theGrid[sentinelY][sentinelX + 1] === 0){
                // console.log("right");
                sentinelX += 1;
                movinTime = .5;
                stopUp = false;
            } else if (sentinelY < 4 && theGrid[sentinelY + 1][sentinelX] === 0){
                vectorSentinel = 3;
                degres += 90;

            } else {
                vectorSentinel = 0;
                degres += 180;
                megaturnPlay();
                turnMemo = vectorSentinel
                movinTime = .5;
                
            }
        }
        //down
        else if (vectorSentinel == 3){

            if((sentinelX === leftPos) && (sentinelY === topPos - 1)){
                sentinelY += 1;
                movinTime = .2;
            }
            else if (sentinelX < 4 && theGrid[sentinelY][sentinelX + 1] === 0 
                && (sentinelY == 0 || theGrid[sentinelY - 1][sentinelX + 1] !== 0) 
                && !stopRight){
                vectorSentinel = 2;
                stopUp = true;
                degres -= 90;
            } else if (sentinelY < 4 && theGrid[sentinelY + 1][sentinelX] === 0){
                // console.log("down");
                sentinelY += 1;
                movinTime = .5;
                stopRight = false;
            } else if (sentinelX > 0 && (theGrid[sentinelY][sentinelX - 1] === 0)){
                vectorSentinel = 0;
                degres += 90;
            } else {
                vectorSentinel = 1;
                degres += 180;
                megaturnPlay();
                turnMemo = vectorSentinel
                movinTime = .5;
            }
        }
        sentinel.style.top = sentinelY * 6 + "rem";
        sentinel.style.left = sentinelX * 6 + "rem";
        sentinel.style.transform = "rotateZ("+ degres +"deg)";
    }

    

    window.requestAnimationFrame(spidow);
}
randomCase();

function pillar() {

    // rdmX = randomize(5);
    // rdmY = randomize(5);
    // if(rdmY - 1 == topPos && rdmX - 1 == leftPos){
    //     pillar();
    // }
    //     document.querySelector(".case" + rdmY + rdmX).className = "case case"+ rdmY + rdmX + " " + color[7];
    //     theGrid[rdmY - 1][rdmX - 1] = 7;  



    // theGrid = level1;
    // for (let i = 1; i < 6; i++){
    //     for(let j = 1; j < 6; j++){
    //         document.querySelector(".case" + i + j).className = "case case"+ i + j + " " + color[level1[i - 1][j - 1]];
    //     }
    // }

    // drawLevel(level1);



};
pillar();
// pillar();

////////////////////////////////////////////////////////
//EVENTS
////////////////////////////////////////////////////////

padController = {
    left:false,
    right:false,
    up:false,
    down:false,
    keyListener:function(event) {
        
    var key_state = (event.type == "keydown")?true:false;
    
    switch(event.keyCode) {
        
        case 39:// right key
        padController.right = key_state;
        if (leftPos <= 3 && !loose){
            if (theGrid[topPos][leftPos + 1] == 0 
                || cubeInGrid[topPos][leftPos + 1] == theGrid[topPos][leftPos + 1]
                ){
                groundPlay();
                leftPos = leftPos + 1;
                if (turnX%360 == 0){
                    turnY = turnY + 90;
                } else if (turnX%360 == -180 || turnX%360 == 180){
                    turnY = turnY - 90;
                } else if (turnX%360 == -90 || turnX%360 == 270){
                    if(turnY%360 == 180 || turnY%360 == -180){
                        turnZ = turnZ - 90;
                    } else{
                        turnZ = turnZ + 90;
                    }
                } else if (turnX%360 == 90 || turnX%360 == -270){
                    if(turnY%360 == 180 || turnY%360 == -180){
                        turnZ = turnZ + 90;
                    } else{
                        turnZ = turnZ - 90;
                    }
                }
                cube.style.transform = "rotateX(" + turnX + "deg) rotateY(" + turnY + "deg) rotateZ(" + turnZ + "deg)";
            }
        }

        break;

        case 37:// left key
        padController.left = key_state;
        if (leftPos >= 1 && !loose){
            if (theGrid[topPos][leftPos - 1] == 0
                || cubeInGrid[topPos][leftPos - 1] == theGrid[topPos][leftPos - 1]){
                groundPlay();
                leftPos = leftPos - 1;
                if (turnX%360 == 0){
                    turnY = turnY - 90;
                } else if (turnX%360 == -180 || turnX%360 == 180){
                    turnY = turnY + 90;
                } else if (turnX%360 == -90 || turnX%360 == 270){
                    if(turnY%360 == 180 || turnY%360 == -180){
                        turnZ = turnZ + 90;
                    } else{
                        turnZ = turnZ - 90;
                    }
                } else if (turnX%360 == 90 || turnX%360 == -270){
                    if(turnY%360 == 180 || turnY%360 == -180){
                        turnZ = turnZ - 90;
                    } else{
                        turnZ = turnZ + 90;
                    }
                }
                cube.style.transform = "rotateX(" + turnX + "deg) rotateY(" + turnY + "deg) rotateZ(" + turnZ + "deg)";
            }
        }
        
        
        break;
        case 38:// up key
        padController.up = key_state;
        if (topPos >= 1 && !loose){
            if (theGrid[topPos - 1][leftPos] == 0
                || cubeInGrid[topPos - 1][leftPos] == theGrid[topPos - 1][leftPos]){
                groundPlay();
                topPos = topPos - 1;

                if (turnY%360 == 0){
                    turnX = turnX + 90;
                } else if (turnY%360 == -180 || turnY%360 == 180){
                    turnX = turnX + 90;
                } else if (turnY%360 == -90 || turnY%360 == 270){
                    turnZ = turnZ - 90;
                } else if (turnY%360 == 90 || turnY%360 == -270){
                    turnZ = turnZ + 90;
                }
                
                cube.style.transform = "rotateX(" + turnX + "deg) rotateY(" + turnY + "deg) rotateZ(" + turnZ + "deg)";
            }
        }

        break;
        case 40:// down key
        padController.down = key_state;
        if (topPos <= 3 && !loose){
            if (theGrid[topPos + 1][leftPos] == 0
                || cubeInGrid[topPos + 1][leftPos] == theGrid[topPos + 1][leftPos]){
                groundPlay();
                topPos = topPos + 1;

                if (turnY%360 == 0){
                    turnX = turnX - 90;
                } else if (turnY%360 == -180 || turnY%360 == 180){
                    turnX = turnX - 90;
                } else if (turnY%360 == -90 || turnY%360 == 270){
                    turnZ = turnZ + 90;
                } else if (turnY%360 == 90 || turnY%360 == -270){
                    turnZ = turnZ - 90;
                }
                cube.style.transform = "rotateX(" + turnX + "deg) rotateY(" + turnY + "deg) rotateZ(" + turnZ + "deg)";
            }
        }
        break;
        
        }
        // console.log(leftPos, topPos);
        cube.style.left= leftPos * 6 + "rem";
        cube.style.top= topPos * 6 + "rem";
        scoring();
        logic();
    }
};

window.addEventListener('load', function(){
        var el = document.getElementById('glass')

        ontouch(el, function(evt, dir, phase, swipetype, distance){
            console.log(dir);
            
        if (dir== 'left' && xxx === 0){
            
            ++xxx;
            if (leftPos >= 1 && !loose){
                if (theGrid[topPos][leftPos - 1] == 0
                    || cubeInGrid[topPos][leftPos - 1] == theGrid[topPos][leftPos - 1]){
                        groundPlay();
                    leftPos = leftPos - 1;
                    if (turnX%360 == 0){
                        turnY = turnY - 90;
                    } else if (turnX%360 == -180 || turnX%360 == 180){
                        turnY = turnY + 90;
                    } else if (turnX%360 == -90 || turnX%360 == 270){
                        if(turnY%360 == 180 || turnY%360 == -180){
                            turnZ = turnZ + 90;
                        } else{
                            turnZ = turnZ - 90;
                        }
                    } else if (turnX%360 == 90 || turnX%360 == -270){
                        if(turnY%360 == 180 || turnY%360 == -180){
                            turnZ = turnZ - 90;
                        } else{
                            turnZ = turnZ + 90;
                        }
                    }
                    cube.style.transform = "rotateX(" + turnX + "deg) rotateY(" + turnY + "deg) rotateZ(" + turnZ + "deg)";
                }
            }
        };
        if (dir== 'right' && xxx === 0){
            ++xxx;
            if (leftPos <= 3 && !loose){
                if (theGrid[topPos][leftPos + 1] == 0 
                    || cubeInGrid[topPos][leftPos + 1] == theGrid[topPos][leftPos + 1]
                    ){
                    groundPlay();
                    leftPos = leftPos + 1;
                    if (turnX%360 == 0){
                        turnY = turnY + 90;
                    } else if (turnX%360 == -180 || turnX%360 == 180){
                        turnY = turnY - 90;
                    } else if (turnX%360 == -90 || turnX%360 == 270){
                        if(turnY%360 == 180 || turnY%360 == -180){
                            turnZ = turnZ - 90;
                        } else{
                            turnZ = turnZ + 90;
                        }
                    } else if (turnX%360 == 90 || turnX%360 == -270){
                        if(turnY%360 == 180 || turnY%360 == -180){
                            turnZ = turnZ + 90;
                        } else{
                            turnZ = turnZ - 90;
                        }
                    }
                    cube.style.transform = "rotateX(" + turnX + "deg) rotateY(" + turnY + "deg) rotateZ(" + turnZ + "deg)";
                }
            }
        };
        if (dir == 'up' && xxx === 0){
            ++xxx;
            if (topPos >= 1 && !loose){
                if (theGrid[topPos - 1][leftPos] == 0
                    || cubeInGrid[topPos - 1][leftPos] == theGrid[topPos - 1][leftPos]){
                    groundPlay();
                    topPos = topPos - 1;

                    if (turnY%360 == 0){
                        turnX = turnX + 90;
                    } else if (turnY%360 == -180 || turnY%360 == 180){
                        turnX = turnX + 90;
                    } else if (turnY%360 == -90 || turnY%360 == 270){
                        turnZ = turnZ - 90;
                    } else if (turnY%360 == 90 || turnY%360 == -270){
                        turnZ = turnZ + 90;
                    }
                    
                    cube.style.transform = "rotateX(" + turnX + "deg) rotateY(" + turnY + "deg) rotateZ(" + turnZ + "deg)";
                }
            }
        };
        if (dir == 'down' && xxx === 0){
            ++xxx;
            if (topPos <= 3 && !loose){
                if (theGrid[topPos + 1][leftPos] == 0
                    || cubeInGrid[topPos + 1][leftPos] == theGrid[topPos + 1][leftPos]){
                    groundPlay();
                    topPos = topPos + 1;

                    if (turnY%360 == 0){
                        turnX = turnX - 90;
                    } else if (turnY%360 == -180 || turnY%360 == 180){
                        turnX = turnX - 90;
                    } else if (turnY%360 == -90 || turnY%360 == 270){
                        turnZ = turnZ + 90;
                    } else if (turnY%360 == 90 || turnY%360 == -270){
                        turnZ = turnZ - 90;
                    }
                    cube.style.transform = "rotateX(" + turnX + "deg) rotateY(" + turnY + "deg) rotateZ(" + turnZ + "deg)";
                }
            }
        };

        cube.style.left= leftPos * 6 + "rem";
        cube.style.top= topPos * 6 + "rem";
        scoring();
        logic();
        })
}, false)




////////////////////////////////////////////////////////
//SCORE
////////////////////////////////////////////////////////
function scoring(){
    if (cubeInGrid[topPos][leftPos] == theGrid[topPos][leftPos]){
        theGrid[topPos][leftPos] = 0;
        document.querySelector(".case" + (topPos + 1) + (leftPos + 1)).className = "case case"+ (topPos + 1) + (leftPos + 1) + " " + color[0];
        randomCase();
        // scorePlayer++;
        scorePlayer = parseInt(scorePlayer + time);
        if(scorePlayer%10 === 0){
            points2.play();
        }
        hardness += 0.005;
        time = 100;
        gramPoints.innerHTML = scorePlayer;
        pointsPlay();
    }


    if (!theGrid.some(r => r.some(v => v > 0 && v < 7))){

        // drawLevel(level2);
        scorePlayer++;
        // hardness += 0.0005;
    }
};



////////////////////////////////////////////////////////
//CUBE FACES ORIENTATION PROCESSOR
////////////////////////////////////////////////////////
function logic(){
////////////////////////////////////////////////////////


//Blue & Green
    if ((turnY % 360 == 0 && turnZ % 360 == 0) ||
    (Math.abs(turnY) % 360 == 180 && Math.abs(turnZ) % 360 == 180)){
        indicRight.className = "indicRight colorBlue";
        indicLeft.className = "indicLeft colorGreen";
        if(leftPos <= 3){
            cubeInGrid[topPos][leftPos + 1] = 5;
        }
        if(leftPos >= 1){
            cubeInGrid[topPos][leftPos - 1] = 4;
        }
    }
    else if ((Math.abs(turnY) % 360 == 180 && turnZ % 360 == 0) ||
    (turnY % 360 == 0 && Math.abs(turnZ) % 360 == 180)){
        indicRight.className = "indicRight colorGreen";
        indicLeft.className = "indicLeft colorBlue";
        if(leftPos <= 3){
        cubeInGrid[topPos][leftPos + 1] = 4;}
        if(leftPos >= 1){
        cubeInGrid[topPos][leftPos - 1] = 5;}
    }
    else if ((turnX % 360 == 0 && (turnZ % 360 == 90 || turnZ % 360 == -270)) ||
        (Math.abs(turnX) % 360 == 180 && (turnZ % 360 == -90 || turnZ % 360 == 270)) ){
            indicDown.className = "indicDown colorBlue";
            indicUp.className = "indicUp colorGreen";
        if(topPos <= 3){
        cubeInGrid[topPos + 1][leftPos] = 5;}
        if(topPos >= 1){
        cubeInGrid[topPos - 1][leftPos] = 4;}
    }
    else if ((turnX % 360 == 0 && (turnZ % 360 == -90 || turnZ % 360 == 270)) ||
        (Math.abs(turnX) % 360 == 180 && (turnZ % 360 == 90 || turnZ % 360 == -270)) ){
            indicDown.className = "indicDown colorGreen";
            indicUp.className = "indicUp colorBlue";
        if(topPos <= 3){
        cubeInGrid[topPos + 1][leftPos] = 4;}
        if(topPos >= 1){
        cubeInGrid[topPos - 1][leftPos] = 5;}
    }
    else if (
        ( ((turnY % 360 == 270) || (turnY % 360 == -90)) && (turnZ % 360 == 180 || turnZ % 360 == -180)) 
        ||
        (((turnY % 360 == -270) || (turnY % 360 == 90)) && turnZ % 360 == 0) 
        ||
        (turnY % 360 == 0 && (turnX % 360 == -270 || turnX % 360 == 90) && (turnZ % 360 == 270 || turnZ % 360 == -90)) 
        ||
        (turnY % 360 == 0 && (turnX % 360 == 270 || turnX % 360 == -90) && (turnZ % 360 == -270 || turnZ % 360 == 90))
        ||
        (Math.abs(turnY % 360) == 180 && (turnX % 360 == -270 || turnX % 360 == 90) && (turnZ % 360 == 270 || turnZ % 360 == -90))
        ||
        (Math.abs(turnY % 360) == 180 && (turnX % 360 == 270 || turnX % 360 == -90) && (turnZ % 360 == -270 || turnZ % 360 == 90))
        ){
            indicRoof.className = "indicRoof colorGreen";
            indicFloor.className = "indicFloor colorBlue";
        cubeInGrid[topPos][leftPos] = 5;
    }
    else if (
        ( ((turnY % 360 == 270) || (turnY % 360 == -90)) && turnZ % 360 == 0)
        ||
        (((turnY % 360 == -270) || (turnY % 360 == 90)) && (turnZ % 360 == 180 || turnZ % 360 == -180)) 
        ||
        (turnY % 360 == 0 && (turnX % 360 == -270 || turnX % 360 == 90) && (turnZ % 360 == -270 || turnZ % 360 == 90)) 
        ||
        (turnY % 360 == 0 && (turnX % 360 == 270 || turnX % 360 == -90) && (turnZ % 360 == 270 || turnZ % 360 == -90))
        ||
        (Math.abs(turnY % 360) == 180 && (turnX % 360 == -270 || turnX % 360 == 90) && (turnZ % 360 == -270 || turnZ % 360 == 90))
        ||
        (Math.abs(turnY % 360) == 180 && (turnX % 360 == 270 || turnX % 360 == -90) && (turnZ % 360 == 270 || turnZ % 360 == -90))
        ){
            indicRoof.className = "indicRoof colorBlue";
            indicFloor.className = "indicFloor colorGreen";
        cubeInGrid[topPos][leftPos] = 4;
    };

////////////////////////////////////////////////////////
//Red & Yellow
    if ((turnX % 360 == 0 && turnY % 360 == 0)||
    (Math.abs(turnX) % 360 == 180 && Math.abs(turnY) % 360 == 180)){
        indicRoof.className = "indicRoof colorRed";
        indicFloor.className = "indicFloor colorYellow";
        cubeInGrid[topPos][leftPos] = 3;
    }
    if ((turnX % 360 == 0 && Math.abs(turnY) % 360 == 180)||
    (Math.abs(turnX) % 360 == 180 && turnY % 360 == 0)){
        indicRoof.className = "indicRoof colorYellow";
        indicFloor.className = "indicFloor colorRed";
        cubeInGrid[topPos][leftPos] = 1;
    }
    else if ((turnY-90 % 180 == 0 && Math.abs(turnX) % 180 == 0) || 
    (((turnY)%360 == -270 || (turnY)%360 == 90) && Math.abs(turnX) % 180 == 0)
    ){
        indicRight.className = "indicRight colorRed";
        indicLeft.className = "indicLeft colorYellow";
        if(leftPos <= 3){
        cubeInGrid[topPos][leftPos + 1] = 1;}
        if(leftPos >= 1){
        cubeInGrid[topPos][leftPos - 1] = 3;}
    }
    else if ((turnY+90 % 180 == 0 && Math.abs(turnX) % 180 == 0) || 
    (((turnY)%360 == 270 || (turnY)%360 == -90) && Math.abs(turnX) % 180 == 0)
    ){
        indicRight.className = "indicRight colorYellow";
        indicLeft.className = "indicLeft colorRed";
        if(leftPos <= 3){
        cubeInGrid[topPos][leftPos + 1] = 3;}
        if(leftPos >= 1){
        cubeInGrid[topPos][leftPos - 1] = 1;}
    }
    else if (
        ((turnX%360 == -90 || turnX%360 == 270) && Math.abs(turnY) % 360 == 180) 
        || 
    ((turnX%360 == 90 || turnX%360 == -270) && turnY % 360 == 0)
    ){
        indicDown.className = "indicDown colorYellow";
        indicUp.className = "indicUp colorRed";
        if(topPos <= 3){
        cubeInGrid[topPos + 1][leftPos] = 3;}
        if(topPos >= 1){
        cubeInGrid[topPos - 1][leftPos] = 1;}
    }
    else if (
        ((turnX%360 == 90 || turnX%360 == -270) && Math.abs(turnY) % 360 == 180) 
        || 
    ((turnX%360 == -90 || turnX%360 == 270) && turnY % 360 == 0)
    ){
        indicDown.className = "indicDown colorRed";
        indicUp.className = "indicUp colorYellow";
        if(topPos <= 3){
        cubeInGrid[topPos + 1][leftPos] = 1;}
        if(topPos >= 1){
        cubeInGrid[topPos - 1][leftPos] = 3;}
    };

////////////////////////////////////////////////////////
//Orange & Uv
    if ((turnX % 360 == 0 && turnZ % 360 == 0) ||
    (Math.abs(turnX) % 360 == 180 && Math.abs(turnZ) % 360 == 180)){
        indicDown.className = "indicDown colorUv";
        indicUp.className = "indicUp colorOrange";
        if(topPos <= 3){
        cubeInGrid[topPos + 1][leftPos] = 6;}
        if(topPos >= 1){
        cubeInGrid[topPos - 1][leftPos] = 2;}
    }
    else if ((Math.abs(turnX % 180) == 0 && turnZ % 360 == 0) ||
    (Math.abs(turnX) % 360 == 0 && Math.abs(turnZ) % 360 == 180)){
        indicDown.className = "indicDown colorOrange";
        indicUp.className = "indicUp colorUv";
        if(topPos <= 3){
        cubeInGrid[topPos + 1][leftPos] = 2;}
        if(topPos >= 1){
        cubeInGrid[topPos - 1][leftPos] = 6;}
    }
    else if (
        (Math.abs(turnY % 360) == 180 && (turnZ % 360 == 270 || turnZ % 360 == -90))
        ||
        (turnY % 360 == 0 && (turnZ % 360 == -270 || turnZ % 360 == 90))
        ){
        indicLeft.className = "indicLeft colorUv";
        indicRight.className = "indicRight colorOrange";
        if(leftPos <= 3){
        cubeInGrid[topPos][leftPos + 1] = 2;}
        if(leftPos >= 1){
        cubeInGrid[topPos][leftPos - 1] = 6;}
    }
    else if (
        (Math.abs(turnY % 360) == 180 && (turnZ % 360 == -270 || turnZ % 360 == 90))
        ||
        (turnY % 360 == 0 && (turnZ % 360 == 270 || turnZ % 360 == -90))
        ){
        indicRight.className = "indicRight colorUv";
        indicLeft.className = "indicLeft colorOrange";
        if(leftPos <= 3){
        cubeInGrid[topPos][leftPos + 1] = 6};
        if(leftPos >= 1){
        cubeInGrid[topPos][leftPos - 1] = 2;}
    }
    else if (
        ( ((turnX % 360 == 270) || (turnX % 360 == -90)) && (turnZ % 360 == 180 || turnZ % 360 == -180)) 
        ||
        (((turnX % 360 == -270) || (turnX % 360 == 90)) && turnZ % 360 == 0) 
        ||            
        (turnX % 360 == 0 && (turnY % 360 == -270 || turnY % 360 == 90) && (turnZ % 360 == -270 || turnZ % 360 == 90)) 
        ||
        (turnX % 360 == 0 && (turnY % 360 == 270 || turnY % 360 == -90) && (turnZ % 360 == 270 || turnZ % 360 == -90))
        ||
        (Math.abs(turnX % 360) == 180 && (turnY % 360 == -270 || turnY % 360 == 90) && (turnZ % 360 == 270 || turnZ % 360 == -90))
        ||
        (Math.abs(turnX % 360) == 180 && (turnY % 360 == 270 || turnY % 360 == -90) && (turnZ % 360 == -270 || turnZ % 360 == 90))
        ){
        indicRoof.className = "indicRoof colorUv";
        indicFloor.className = "indicFloor colorOrange";
        cubeInGrid[topPos][leftPos] = 2;
    }
    else if (
        ( ((turnX % 360 == 270) || (turnX % 360 == -90)) && turnZ % 360 == 0)
        ||
        (((turnX % 360 == -270) || (turnX % 360 == 90)) && (turnZ % 360 == 180 || turnZ % 360 == -180)) 
        ||

        (turnX % 360 == 0 && (turnY % 360 == -270 || turnY % 360 == 90) && (turnZ % 360 == 270 || turnZ % 360 == -90)) 
        ||
        (turnX % 360 == 0 && (turnY % 360 == 270 || turnY % 360 == -90) && (turnZ % 360 == -270 || turnZ % 360 == 90))
        ||
        (Math.abs(turnX % 360) == 180 && (turnY % 360 == -270 || turnY % 360 == 90) && (turnZ % 360 == -270 || turnZ % 360 == 90))
        ||
        (Math.abs(turnX % 360) == 180 && (turnY % 360 == 270 || turnY % 360 == -90) && (turnZ % 360 == 270 || turnZ % 360 == -90))
        ){
        indicRoof.className = "indicRoof colorOrange";
        indicFloor.className = "indicFloor colorUv";
        cubeInGrid[topPos][leftPos] = 6;
    }
}



////////////////////////////////////////////////////////
//3D NAVIGATOR
////////////////////////////////////////////////////////
(function() {
    var rotateZ = 0;
    var rotateX = 80;

    document.onkeydown = function (e) {
        if (e.keyCode === 83) {if(rotateZ >= -20){rotateZ -= 40}}
        else if (e.keyCode === 68) {if(rotateZ <= 20){rotateZ += 40}}
        else if (e.keyCode === 67) {if(rotateX <= 60){rotateX += 20}}
        else if (e.keyCode === 88) {if(rotateX >= 50){rotateX -= 20}}

        document.querySelector('.the_grid').style.transform =
        'rotateX(' + rotateX + 'deg) rotateZ(' + rotateZ + 'deg)';

    }
})();

window.addEventListener("keydown", padController.keyListener);

window.requestAnimationFrame(spidow);

