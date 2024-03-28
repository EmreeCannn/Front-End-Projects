const h1_title=document.querySelector("h1");
const buttons=document.querySelectorAll("button");
const reset_button=document.querySelector("#reset_button");




function addDecimal(){
    if(!h1_title.textContent.includes(".")){
        // eğer benim h1 im . yı içermiyosa . yı ekle dedim
        // içeriyosa ekleme
        h1_title.textContent+=".";
    }
}
let inital_value=null;
let operator_value="";
let iswaiting=false;
//  ikinci sayımı bekliyosa true beklemiyosa false diyicem 

function use_operator(operator){
    const current_value=Number(h1_title.textContent);
    console.log(current_value);
    if(operator_value&&iswaiting){
        // operator valuem varsa ve iswaiting true ise 
        // bu kısım çalışır 
        operator_value=operator;
    }
    if(!inital_value){
        // initial value değerim yoksa 
        inital_value=current_value;
        console.log(inital_value);
    }
    else{
        const calculation=calc[operator_value](inital_value,current_value);
        h1_title.textContent=calculation;
        inital_value=calculation;
    }
    iswaiting=true;
    operator_value=operator;
}

const calc={
    "/":(first_number,second_number)=>first_number/second_number,
    "+":(first_number,second_number)=>first_number+second_number,
    "*":(first_number,second_number)=>first_number*second_number,
    "-":(first_number,second_number)=>first_number-second_number,
    "=":(first_number,second_number)=>second_number
}


buttons.forEach(btn=>{
    if(btn.classList.length===0){
        // yani herhangi bir clası yoksa
        btn.addEventListener("click",()=>{
            sendNumberValue(btn.value);
        });
    }
    else if(btn.classList.contains("operator")){
        btn.addEventListener("click",()=>{
            use_operator(btn.value);
        });
    }
    else if(btn.classList.contains("decimal")){
        btn.addEventListener("click",()=>{
            addDecimal();
        });
    }
})

function sendNumberValue(number){
    if(iswaiting){
        h1_title.textContent=number;
        iswaiting=false;
    }
    else{
        // console.log(h1_title.textContent);
        const display_value=h1_title.textContent; 
        h1_title.textContent=display_value==="0"? number: display_value+number;
    }
}

reset_button.addEventListener("click",()=>{
    h1_title.textContent="0";
    inital_value=0;
    operator_value="";
    iswaiting=false;
})