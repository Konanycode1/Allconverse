$(document).ready(()=>{

  
    let  device = $("#device")
    


    let key = "ed47fe5be2a756b203c81aed64ed342d3a7b2c51db843fcc0416451ec6eacbb8";

var url =  "https://min-api.cryptocompare.com/data/price?fsym=XOF&tsyms=USD,BTC,EURO?api_key=" + key + "&format=json"

$("form").on("click", (e)=>{
    e.preventDefault();
})

$("#btn").on("click", ()=>{
    let montant = $("#montant").val();
    $.getJSON(url, function (data) {
        console.log(data)
        console.log(montant)
        $(".btc").text(`${data.BTC* parseInt(montant)}`)
        $(".euro").text(`${data.EURO* parseInt(montant)}`)
        $(".usd").text(`${data.USD* parseInt(montant)}`)
    });
})


})

