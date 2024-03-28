const btn=document.querySelector(".btn");
const select=document.querySelector(".capture_value");
const put_value=document.querySelector(".put_value")
const icon=document.querySelector(".fa-copy");

select.addEventListener("change",()=>{

})
btn.addEventListener("click",()=>{
    generate_password(select.value);
})

function generate_password(number){
    fetch(`https://api.api-ninjas.com/v1/passwordgenerator?length=${number}`,{
        headers:{
            "X-Api-Key":"39Mh5g79Q53OeRpTATUHZg==MlmH7abmFZRbgpwd",
        }
    })
    .then(resp=>{
        if(!resp.ok) throw new Error("invalid api");
        return resp.json()
    })
    .then(dataobj=>{
        console.log(dataobj["random_password"]);
        put_value.value=dataobj["random_password"];
        
    })
    .catch(err=>{
        console.warn(err);
    })
}

icon.addEventListener("click",e=>{
    // put_value.select();
    navigator.clipboard.writeText(put_value.value);
    alert(`Kopyalanan veri = ${put_value.value}`);
})






