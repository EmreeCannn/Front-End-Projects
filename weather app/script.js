const api_key="d09d87b41a45ae95c251ef3b05428ddf";
const form=document.getElementById("form");
const input=document.getElementById("city_name");
const weather=document.getElementById("weather");
const icondiv=document.getElementById("icon");
const temperaturediv=document.getElementById("temparature");
const detailsdiv=document.getElementById("details");
const error_descripton=document.getElementsByClassName("error_descripton");
console.log(error_descripton);

form.addEventListener("submit",e=>{
    e.preventDefault();
    const value=input.value;
    get_current_weather(value);
})
const get_current_weather=(value)=>{

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=${api_key}`)
    .then(respn=>{
        if(!respn.ok) throw new Error("invalid api key")
        return respn.json()
    })
    .then(dataobj=>{
        if(dataobj.length==0){
            error_descripton[0].textContent="please enter a valid city name"
            icondiv.innerHTML="";
            temperaturediv.innerHTML="";
            detailsdiv.innerHTML="";
        }
        else{
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${dataobj[0].lat}&lon=${dataobj[0].lon}&appid=${api_key}`)
         .then(respn=>{
            if(!respn.ok) throw new Error("invalid api key")
            return respn.json()
         })
         .then(dataobj=>{
            error_descripton[0].textContent="";
            console.log(dataobj);
            const temperature=Math.floor(dataobj.main.temp-273.15);
            const icon=dataobj.weather[0].icon;
            const details=[
                `feels_like:${Math.round(dataobj.main.feels_like-273.15)}`,
                `Humidity:${dataobj.main.humidity}%`,
                `Wind:${dataobj.wind.speed}m/s`
            ]
            icondiv.innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png"></img>`
            temperaturediv.textContent=`${temperature}°C`;
            detailsdiv.innerHTML=
            `<p>${(details[0])}°C</p>
             <p>${details[1]}</p>
             <p>${details[2]}</p>`
         })
         .catch(err=>{
            error_descripton.textContent="Please enter a valid city name"
         })

        }
         
    })
}
// get_current_weather();