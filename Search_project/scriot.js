const form_container=document.querySelector(".form_container");
const form=document.querySelector("#form");
const search_input=document.querySelector("#search_input");
const btn_container=document.querySelector(".btn_container");
const search_btn=document.querySelector("#search_btn");
const clear_btn=document.querySelector("#clear_btn");
const images_container=document.querySelector(".images_container");
const api_image=document.querySelector(".api_img");



run_event_listener();


clear_btn.addEventListener("click",()=>{
    images_container.innerHTML="";
    search_input.value="";
})

function run_event_listener(){
    // formum submit olduğunda bana unsplahdan imageleri getir

    form.addEventListener("submit",e=>{
        images_container.innerHTML="";
        e.preventDefault();
        // sayfanın yenilenmesini engelledim
        const value=search_input.value.trim();
        console.log(value);

        fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
            method:"GET",
            headers:{
                Authorization: "Client-ID S184mu0oEUoik1tBCEevjmOrjQ_y38X39B9mGdojGlY"
            }
            // api keyimi headerse içine  veririm 
        })
        .then(respn=>{
            if(!respn.ok) throw new Error("invalid api try again");
            return respn.json()
            // burada json stringini javascript objesine dönüştürme işlemi yaptık 
        })
        .then(dataobj=>{
            console.log(dataobj.results);
            const data_array=dataobj.results;
            data_array.forEach(data=>{
                // const image_veri=data.urls.raw
                const image=document.createElement("img");
                image.loading="lazy";
                image.src=data.urls.raw;
                image.width = "300";
                image.height = "300";
                images_container.appendChild(image);
            })
        })
        .catch(err=>{
            alert(err);
        })
    })
    
}

