const bars=document.querySelector(".fa-bars");

const sidebar=document.querySelector(".Sidebar")

const closing_btn=document.querySelector(".fa-xmark")


bars.addEventListener("click",e=>{
// toggle methodu varsa kaldırır yoksa ekler 
sidebar.classList.toggle("showSideBar");
//  yani ben bars a tıkladığımda sidebarın clasında showSideBar varsa kaldırır  yoksa ekler toggle buna yarar
});

closing_btn.addEventListener("click",e=>{
    sidebar.classList.remove("showSideBar");
});
