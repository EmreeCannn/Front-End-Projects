const celsius=document.querySelector("#celsius");
const fahrenheit=document.querySelector("#fahrenheit");
const kelvin=document.querySelector("#kelvin");

function calculateTemp(event){
    console.log(event);
    // const result=event.target.value;
    // burdan gelen değer bana string olarak gelir bunu işlem yapacağım için number yapmam lazım 
    const current_value=Number(event.target.value);
    console.log(event.target.name);
    console.log(current_value);
    console.log(typeof(current_value));

    switch (event.target.name) {
        case "celsius":
            kelvin.value=(current_value+273.32).toFixed(2);
            fahrenheit.value=(current_value*1.8+32).toFixed(2);
            break;
        case "fahrenheit":
            celsius.value=((current_value-32)/1.8).toFixed(2);
            kelvin.value=((current_value-32)/1.8+273.32).toFixed(2);
            break;
    
        case "kelvin":
            celsius.value=current_value-273.32.toFixed(2);
            fahrenheit.value=((current_value-273.32)*1.8+32).toFixed(2);
            break;

        default:
          break;
        // eğer hiçibiri değilse default çalışır 
    }
}

