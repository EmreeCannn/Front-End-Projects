const firts_select=document.querySelector("#CurrencyFirst");
const second_select=document.querySelector("#CurrencySecond");
const input=document.querySelector("#count");
const equal=document.querySelector("#equal");
const exchange_rate=document.querySelector("#exchange_rate");

get_currency();

function get_currency(){
    fetch(`https://v6.exchangerate-api.com/v6/0f24ceff6888c53668cd7bd5/latest/${firts_select.value}`)
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        const sum=data.conversion_rates[second_select.value];
        equal.textContent=`${(sum*input.value).toFixed(2)} ${second_select.value}`;
        exchange_rate.textContent=`1 ${firts_select.value} = ${sum.toFixed(2)} ${second_select.value}`
        // virgülden sonra kaç basamak olucak tofixed() ile anlarım 
    })
    if(input.value<0){
        input.value="";
    }

}
input.addEventListener('input',get_currency);
firts_select.addEventListener('change',get_currency)
second_select.addEventListener('change',get_currency);




