let klik1 = document.getElementById("buttonwarna");
let klik2 = document.getElementById("buttondelete");
let klik3 = document.getElementById("buttonnambah");
let klik4 = document.getElementById("buttondeleteall");
let post11 = document.getElementById("post1");
let parent = document.getElementById("all post");
let klik5 = document.getElementById("buttonwarnaall");
let tagpos = 1;
let warnasemua=false;
let clonenya;
klik1.onclick = function(){
    if( document.getElementById("post" + tagpos).style.backgroundColor === "white"){
    document.getElementById("post" + tagpos).setAttribute
    ("style"
    ,"background-color: blue;color:white");
}
    else{
        document.getElementById("post" + tagpos).setAttribute("style","background-color: white");
    }
    }
    klik2.onclick = function(){
        // parent.innerHTML = null;
        document.getElementById("post" + tagpos).remove();
        tagpos--;
    }

    klik3.onclick = function(){
        warnasemua = false;
       if(tagpos==0){
        clonenya = post11.cloneNode(true);
       }else{
        clonenya = document.getElementById("post" + tagpos).cloneNode(true);
       }
        tagpos++;
        clonenya.setAttribute("id", "post" + tagpos)
        clonenya.innerHTML = "Text data " + tagpos;
        clonenya.setAttribute('class', "cpost"+tagpos);
        clonenya.setAttribute("style","background-color: white");
        parent.append(clonenya);
    }
    klik4.onclick = function(){
        parent.innerHTML = null;
        tagpos = 0;
    }
    klik5.onclick = function(){
       if(warnasemua == false){
           warnasemua = true;
        for(let i=1 ; i<=tagpos ; i++){
            document.getElementById("post" + i).setAttribute
            ("style"
            ,"background-color: blue;color:white");
        }
    }
    else{
        for(let i=1 ; i<=tagpos ; i++){
            document.getElementById("post" + i).setAttribute
            ("style"
            ,"background-color: white;color:black");
        }
        warnasemua = false;
    }
    }
    function game(angka1){
        let cekfizz = false;
        let cekbuzz = false;
        for(let i = 1 ; i<=angka1 ; i++){
            if(i%5 == 0 && i%3 == 0){
                 console.log("fizz buzz");
             }
            else if(i%3 == 0 ){
                console.log("fizz");
                cekfizz = true;
            }
            else if(i%5 == 0){
                console.log("buzz");
                cekbuzz = true;
            }
            else{
                console.log(i);
            }
        }
    }
    game(100);