const icon_left=document.querySelector(".prev");
const right_icon=document.querySelector(".next");
const image_container=document.querySelector(".images_container");
const imgs=document.querySelectorAll("img");

let currentimg=0;
let timeout;

right_icon.addEventListener("click",()=>{
    clearTimeout(timeout);
    // yani 4 saniye başa sardık
    // console.log(currentimg);
    currentimg++;
    updateimage();
    // her tıkladığımda currentimg yi 1 arttırdım 
   
});

const updateimage=()=>{
    if(currentimg>imgs.length-1){
        currentimg=0;
        //  toplam imglerimden büyükse current img yi 0 a eşitle ve en baştaki img yi al 
    }
    else if(currentimg<0){
        currentimg=imgs.length-1;
        // 0 dan küçükse en sondaki imageyi getir
    }
    image_container.style.transform=`translateX(-${currentimg*600}px)`

    timeout=setTimeout(() => {
        currentimg++;
        updateimage();
        //  her 3 saniyede currentimg yi 1 arttırcak ve updateimgyi cağircak ki transform translate çalışsın 
        //  eğer ben click eventine de basarsam timeout çalışırken ortalık karışır bu yüzden 
        //  timeout u boşaltmam gerek 
    }, 3000);
};
updateimage();

icon_left.addEventListener("click",()=>{
    currentimg--;
    clearTimeout(timeout);
    // console.log(currentimg);
    updateimage();    
});



