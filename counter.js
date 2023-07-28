let updatevalue1 =document.getElementById("updatevalue")
function inn(){
    let a = updatevalue1.textContent;
    let countervalue = parseInt(a) + 1;
    if (countervalue>0){
        updatevalue1.style.color ="green";
    }
    else if(countervalue<0){
        updatevalue1.style.color ="red";
    }
    else{
        updatevalue1.style.color= "black";
    }
    updatevalue1.textContent= countervalue;
}
function res(){
   updatevalue1.textContent= 0;
   updatevalue1.style.color = "black";
}
function dec(){
    let a = updatevalue1.textContent;
    let countervalue = parseInt(a) - 1;
    if (countervalue>0){
        updatevalue1.style.color ="green";
    }
    else if(countervalue<0){
        updatevalue1.style.color ="red";
    }
    else{
        updatevalue1.style.color= "black";
    }
    updatevalue1.textContent= countervalue;
}


