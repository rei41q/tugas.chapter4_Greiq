// const boxKlik = document.querySelectorAll(".box");

// const mouse1 = document.querySelector(".box:first-child");


// for(let i = 0 ; i<boxKlik.length ; i++){
//         boxKlik[i].style.backgroundColor = "red";
        
      
// }

// boxKlik.forEach((box) => {
//     box.addEventListener("click");
// });

class DataAwal{
  static boxElements = document.querySelectorAll(".box");
  static resetbutton = document.getElementById("reset");
  static pemenang = document.getElementById("pemenangnya");
  static titikAwalCross= -1;
  static nilaicros = true;
  static turn = "cross";
}

class player{
  constructor(indexPlayer,status,turnAktifPlayer){{
      this.indexPlayer = indexPlayer;
      this.status = status;
      this.turnAktifPlayer = turnAktifPlayer;
    }
  }
  cekpemenang(objektarget){
    let langkahcros = 0;
        for(let i = 0 ; i< 9 ; i++){
          if(DataAwal.boxElements[i].className == objektarget){
              if(i == 1 || i == 4 || i==7){
                  if(DataAwal.boxElements[i-1].className == objektarget
                  && DataAwal.boxElements[i+1].className == objektarget){
                      langkahcros = 3;
                  }
              }
              else if(i == 3 || i == 4 || i==5){
                if(DataAwal.boxElements[i-3].className == objektarget
                && DataAwal.boxElements[i+3].className == objektarget){
                    langkahcros = 3;
                }
            }
            if(i == 4 && langkahcros!=3){
              if(DataAwal.boxElements[i-4].className == objektarget
              && DataAwal.boxElements[i+4].className == objektarget
              || DataAwal.boxElements[i-2].className == objektarget
              && DataAwal.boxElements[i+2].className == objektarget
              || DataAwal.boxElements[i-3].className == objektarget
              && DataAwal.boxElements[i+3].className == objektarget){
                  langkahcros = 3;
                  
              }
            }
        }
      }
      if(langkahcros == 3){
        langkahcros = 0;
        if(objektarget=="box cross"){
        DataAwal.pemenang.innerHTML = "cross menang";
        }
        else{
          DataAwal.pemenang.innerHTML = "circle menang";
        }
      }
  }
}
let objekCircle = new player(0,"circle",true);
let objekCross = new player(0,"cross",true);


DataAwal.pemenang.innerHTML = "";
// Button.onclick = startGame;

function placeMark(box, currentClass) {
  box.classList.add(currentClass);
}
function handleClick(e) { 
  const boxTarget = e.target;
  let tidakperludicek = false;
  if(DataAwal.pemenang.innerHTML == ""){
      if(boxTarget.className == "box cross"
|| boxTarget.className == "box circle"){
        objekCross.turnAktifPlayer = false;
        objekCircle.turnAktifPlayer = false;
      }
    if(DataAwal.turn == objekCross.status && objekCross.turnAktifPlayer == true){
      DataAwal.pemenang.innerHTML = "";
      objekCross.indexPlayer++;;
      DataAwal.pemenang.innerHTML = "";
  placeMark(boxTarget, DataAwal.turn);
      if(DataAwal.titikAwalCross == -1 || objekCross.indexPlayer++>3){
  }
        DataAwal.turn = objekCircle.status;
        nilaicros = true;
     
    }
     else if(DataAwal.turn == objekCircle.status && objekCircle.turnAktifPlayer == true){
    
        placeMark(boxTarget, DataAwal.turn);
        DataAwal.turn = objekCross.status;

    }
    objekCross.turnAktifPlayer = true;
    objekCircle.turnAktifPlayer = true;
objekCircle.cekpemenang("box cross");
objekCircle.cekpemenang("box circle");
  }
}
function startGame() {
  DataAwal.boxElements.forEach((box) => {
    box.addEventListener("click", handleClick);
  });
}
DataAwal.resetbutton.onclick = function(){
resetall();
}
function resetall(){
  for(let i = 0; i < DataAwal.boxElements.length; i++){
  DataAwal.boxElements[i].className = "box";
}
DataAwal.turn = objekCross.status;
objekCross.indexPlayer = 0;
objekCircle.indexPlayer = 0;
DataAwal.titikAwalCross = -1;
objekCross.indexPlayer = 0;
DataAwal.pemenang.innerHTML = "";
}
startGame();
