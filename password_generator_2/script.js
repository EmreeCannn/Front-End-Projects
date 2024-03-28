const Password_btn=document.querySelector(".Password_btn");
const input=document.querySelector(".input");
const copy_icon=document.querySelector(".fa-copy");
const alert_container=document.querySelector(".alert_container");

Password_btn.addEventListener("click",createpassword)

function createpassword(){
    const password_legnht=14;
    const characters="0123456789abcçdefgğhijklmnoüprsştuüvyz!@()<>/{}[]%$#£_+?ABCÇDEFGĞHIİJKLMNOÜPRŞSTUVYZ";
    let password="";
    // 14 karakterli bir şifre istediğim için
    for(let i=0;i<password_legnht;i++){
        const random_num=Math.floor((Math.random()*characters.length));
        // math. floor ile yuvarlama işlemi yaparım
        // math.Random sayesinde 0 ile 1 arasında rasgele sayı üretiri
        password+=characters[random_num];
    }
    input.value=password; 
    alert_container.textContent=password + " Kopyalandı !"
}

copy_icon.addEventListener("click",()=>{
    // input içinde ne varsa bunu seçmek istiyorum bunu select() yardımıyla yapıcaz
    if(input.value){
        console.log(input.select());
        navigator.clipboard.writeText(input.value);
        alert_container.classList.remove("active");
        // alert_container.style.right="100px"
        setTimeout(() => {
        //    alert_container.style.right="-300px"
           alert_container.classList.add("active");
        },2000);
    }
    
})