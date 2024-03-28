//  koydola tıkladığımda formumun submit eventini tetiklemem gerek 

const form=document.getElementById("form");
const password=document.getElementById("password");
const repassword=document.getElementById("re-password");
const alert_message=document.querySelector(".alert_message");
const alert_title=document.querySelector(".alert_title");
const alert_box=document.querySelector(".alertbox");

let isValid=false;
let passwordMatch=false;

function validateForm(){
    isValid=form.checkValidity();
    console.log(isValid);
    // eğer benim formumun içindeki inputlar validse eğer bana true döndürür
    if(!isValid){
        alert_message.classList.add("unvalid")
        alert_title.classList.add("unvalid_title");
        alert_title.textContent="Lütfen Tüm alanları doğru formatta doldurun"
        return;
    }
    if(password.value===repassword.value){
        passwordMatch=true;
        password.style.borderColor="green"
        repassword.style.borderColor="green"
        alert_title.style.color="green";
        alert_message.style.borderColor="green";
    }
    else{
        alert_message.classList.add("unvalid")
        alert_title.classList.add("unvalid_title");
        passwordMatch=false
        password.style.borderColor="red"
        repassword.style.borderColor="red"
        alert_title.textContent="Şifreleriniz eşleşmemekte";
        alert_title.style.color="red";
        alert_message.style.borderColor="red";
        return;
    }
    if(isValid && passwordMatch){
        alert_message.classList.replace("unvalid","valid");
        alert_title.classList.replace("unvalid_title","valid_title");
        alert_title.textContent="Form Gönderme İşlemi Başarılı";
        alert_box.classList.add("transform");
        alert_box.style.transform=`translate(${400}px)`
        setTimeout(() => {
            alert_box.style.transform=`translate(${900}px)`
        },2000);
    }
}


function takeFormInformation(){
    const user={
        name:form.name.value,
        // name i name olanın value değerini al ve name keyine bu değeri ata diyorum 
        surname:form.surname.value,
        //  name i surname olanın valuesini al ve surname keyine ata diyorum
        email:form.email.value,
        phone:form.phone.value,
        password:form.password.value,
        address:form.adressed.value,
    }
    console.log(user);
}


function submitForm(e){
    e.preventDefault();
    validateForm();
    if(isValid && passwordMatch){
        //  bu kısımda formdan aldığım verileri backend  tarında göndermek gerekmekte
        takeFormInformation();
    }
}

form.addEventListener("submit",submitForm);