const form=document.querySelector(".form");
const first_p=document.querySelector(".first_p");
const second_p=document.querySelector(".second_p");
const text_input=document.querySelector(".text_input");
const container=document.querySelector(".container");
const audio=document.getElementById("audio")
text_input.addEventListener("change",e=>{
    console.log(text_input.value);
})
form.addEventListener("submit",e=>{
    e.preventDefault();
    setTimeout(() => {
        get_dictionary();
    },200);  
})
function get_dictionary(){
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${text_input.value}`
    fetch(url)
    // fetch içinden bana bir promis objesi gelicek ben bu gelene kadar bekliyorum 
    .then(resp=>{
        if(resp.status===404){
            alert("this word does not exist");
            container.style.height="120px";
            first_p.textContent="";
            second_p.textContent="";
            audio.removeAttribute("controls");
        }
        else{
            container.style.height="400px";
            audio.setAttribute("controls","");
        }

        if (!resp.ok) throw new Error("was not a valid response");
        
        return resp.json();
        //  burada  javascript objesine dönüştürme işlemi yaptık
    })
    .then(dataobj=>{
       const definisions_of_the_word=dataobj[0].meanings[0].definitions
       console.log(dataobj[0].phonetics[0].audio);
       first_p.textContent=`Word:${text_input.value}`
       second_p.textContent=definisions_of_the_word[0].definition;
       const oudio_packagge=dataobj[0].phonetics[0].audio;
       audio.src=oudio_packagge;
       
       
    }).catch(err=>{
        console.warn(err);
    })
}



