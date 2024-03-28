//  apiden resimleri çektiğimde hepsinin birden yüklenmesini istemiyorun 
// performans açısından büyük problem oluşturur peki bunu nasıl engellerim 

const count=30;
const api_key="S184mu0oEUoik1tBCEevjmOrjQ_y38X39B9mGdojGlY";
const api_url=`https://api.unsplash.com/photos/random/?client_id=${api_key}&count=${count}`;
//  kaç tane resim verisi gelsin bunu count sayesinde belirttim 

const image_div=document.getElementById("image_div");
const loading=document.getElementById("loading");

let isdownloaded=false;
let images_loaded=0;
let total_images=0;
const get_response=()=>{
    images_loaded=0;
    fetch(api_url)
    .then(respn=>{
        if(!respn.ok) throw new Error("invalid api try again :)");
        return respn.json()
        // json stringini javascript objesine çevirdim
    })
    .then(dataobj=>{
        dataobj.forEach(image => {
            const item=document.createElement("a");
            setAttributes(item,{href:image.urls.regular});
            const img=document.createElement("img");
            img.classList.add("border_radius")
            img.src=image.urls.regular;
            img.alt=image.alt_description;
            item.target="_blank";
            item.appendChild(img);
            image_div.appendChild(item);
            img.addEventListener("load",imageloaded)
            total_images=dataobj.length;
        });
    })
    .catch(err=>{
        console.warn(err);
    })
}
get_response();
function imageloaded(){
    images_loaded++;
    console.log(images_loaded);
    // console.log(images_loaded);
    if(images_loaded===total_images){
        loading.hidden=true;
        isdownloaded=true;
    }
}
function setAttributes(element,attributes){
    for(const key in attributes){
        console.log(attributes);
       element.setAttribute(key,attributes[key]);
    }
}
window.addEventListener("scroll",()=>{
    // console.log(window.innerHeight);
    // console.log(window.scrollY);
    // console.log(document.body.offsetHeight); 
    // document.body.offsetHeight  body içindeki toplam yükseklik 
    // window.scrollY yukarıdan aşşağıya ne kadar scroll alıyosam 
    // window.innerheight browserimin yüksekliği yani görebildiğim kadar olan alan
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight &&isdownloaded){
        get_response();
    }
})





// const obje={
//     key:"value",
//     key2:"value",
//     key3:"value",
// }

// for(key in obje){
//     console.log(key);
// }