const textarea=document.querySelector("textarea");

const total_counter=document.querySelector("#TotalCounter");

const remaining_counter=document.querySelector("#RemainingCounter");

textarea.addEventListener("keyup",updatecoutner)


function  updatecoutner(){
    total_counter.textContent=textarea.value.length;
    remaining_counter.textContent=textarea.getAttribute("maxlength")-textarea.value.length;
}

updatecoutner();