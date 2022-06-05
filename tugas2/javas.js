// const boxKlik = document.querySelectorAll(".box");

// const mouse1 = document.querySelector(".box:first-child");


// for(let i = 0 ; i<boxKlik.length ; i++){
//         boxKlik[i].style.backgroundColor = "red";
        
      
// }

// boxKlik.forEach((box) => {
//     box.addEventListener("click");
// });


let cross = "cross";
let circle = "circle";
let boxElements = document.querySelectorAll(".box");
let resetButton = document.getElementById("reset");
let alldiv = document.getElementById("board");
let pemenang = document.getElementById("pemenangnya");
pemenang.innerHTML = "";
let turn = cross;
let turncross = true;
let turncircle = true
let sekalilagi = true;
let cekwin = 0;
let datamenang = [];
let crossindex=0,circleindex=0;
resetButton.onclick = startGame;
let titikawalcros= -1;
let nilaicros = true;
function placeMark(box, currentClass, cekwin) {
  box.classList.add(currentClass);
}

function handleClick(e) {
  
  const boxTarget = e.target;
  let tidakperludicek = false;
  if(pemenang.innerHTML == ""){
      if(boxTarget.className == "box cross"
|| boxTarget.className == "box circle"){
        turncross = false;
        turncircle = false;
      }
    if(turn == cross && turncross == true){
      pemenang.innerHTML = "";
      console.log("masuk");
      crossindex++;
      pemenang.innerHTML = "";
  placeMark(boxTarget, turn, cekwin++);
      if(titikawalcros == -1 || crossindex>3){

  }
  console.log("jumlah cross : ", crossindex);
        turn = circle;
        nilaicros = true;
     
    }
     else if(turn == circle && turncircle == true){
    
        placeMark(boxTarget, turn, cekwin++);
        turn = cross;

    }
    turncross = true;
    turncircle = true;
cekpemenangcross2();
cekpemenangcircle2();
  }
}
function cekpemenangcross2(){
  let langkahcros = 0;
      for(let i = 0 ; i< 9 ; i++){
        if(boxElements[i].className == "box cross"){
            if(i == 1 || i == 4 || i==7){
                if(boxElements[i-1].className == "box cross"
                && boxElements[i+1].className == "box cross"){
                    langkahcros = 3;
                }
            }
            else if(i == 3 || i == 4 || i==5){
              if(boxElements[i-3].className == "box cross"
              && boxElements[i+3].className == "box cross"){
                  langkahcros = 3;
              }
          }
          if(i == 4 && langkahcros!=3){
            if(boxElements[i-4].className == "box cross"
            && boxElements[i+4].className == "box cross"
            || boxElements[i-2].className == "box cross"
            && boxElements[i+6].className == "box cross"){
                langkahcros = 3;
            }
          }
      }
    }
    if(langkahcros == 3){
      langkahcros = 0;
      pemenang.innerHTML = "Cross Menang";
      console.log("cross menang");
    }
}
function cekpemenangcircle2(){
  let langkacircle = 0;
  for(let i = 0 ; i< 9 ; i++){
    if(boxElements[i].className == "box circle"){
        if(i == 1 || i == 4 || i==7){
            if(boxElements[i-1].className == "box circle"
            && boxElements[i+1].className == "box circle"){
                langkacircle = 3;
            }
        }
        else if(i == 3 || i == 4 || i==5){
          if(boxElements[i-3].className == "box circle"
          && boxElements[i+3].className == "box circle"){
              langkacircle = 3;
          }
      }
      if(i == 4 && langkacircle!=3){
        if(boxElements[i-4].className == "box circle"
        && boxElements[i+4].className == "box circle"
        || boxElements[i-2].className == "box circle"
        && boxElements[i+2].className == "box circle"){
            langkacircle = 3;
        }
      }
  }
}
if(langkacircle == 3){
  langkacircle = 0;
  pemenang.innerHTML = "Circle Menang";
  console.log("Circle menang");
}
}

function startGame() {
  boxElements.forEach((box) => {
    box.addEventListener("click", handleClick);
   
  });
  
 
}


resetButton.onclick = function(){
resetall();
}

function resetall(){
  for(let i = 0; i < boxElements.length; i++){
  boxElements[i].className = "box";
  datamenang[i] = null;

}
turn = cross;
cekwin = 0;
crossindex = 0;
circleindex = 0;
titikawalcros = -1;
crossindex = 0;
pemenang.innerHTML = "";

}


startGame();
