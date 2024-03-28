const icons=document.querySelectorAll(".icons");
const computer_choose=document.querySelector(".icons-2");
const spans=document.querySelectorAll("span");
const button=document.querySelector(".refresh");

let computer_score=0;
let user_score=0;


function get_computer_result(e){
    const result=Math.floor(Math.random()*computer_choose.children.length);
    icons.forEach(icon=>{
        for(let i=0;i<icon.children.length;i++){
            icon.children[i].classList.remove("clicked_icon");
            computer_choose.children[i].classList.remove("clicked_icon");
        }
        if(e.target.classList=="icons"){
        }
        else{
            e.target.classList.add("clicked_icon");
            let computer_result=computer_choose.children[result];
            computer_result.classList.add("clicked_icon");
            if(e.target.classList.contains("fa-hand-scissors") && computer_result.classList.contains("fa-hand-fist")){
                computer_score+=1;
                spans[1].textContent=computer_score;
            }
            if(e.target.classList.contains("fa-hand-scissors") && computer_result.classList.contains("fa-hand")){
                user_score+=1;
                spans[0].textContent=user_score;
            }
            if(e.target.classList.contains("fa-hand-fist") && computer_result.classList.contains("fa-hand")){
                computer_score+=1
                spans[1].textContent=computer_score;
            }
            if(e.target.classList.contains("fa-hand-fist") && computer_result.classList.contains("fa-hand-scissors")){
                user_score+=1
                spans[0].textContent=user_score;
            }
            if(e.target.classList.contains("fa-hand") && computer_result.classList.contains("fa-hand-scissors")){
                computer_score+=1
                spans[1].textContent=computer_score;
            }
            if(e.target.classList.contains("fa-hand") && computer_result.classList.contains("fa-hand-fist")){
                user_score+=1
                spans[0].textContent=user_score;
            }
        }
    });
}


icons.forEach(icon=>{
    icon.addEventListener("click",get_computer_result); 
})

button.addEventListener("click",()=>{
    user_score=0;
    computer_score=0;
    spans[0].textContent=user_score;
    spans[1].textContent=user_score;
})