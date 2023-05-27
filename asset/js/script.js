$(document).ready(()=>{

  
    let  device = $("#device")
    let montant = $("montant").val();


    let key = "ed47fe5be2a756b203c81aed64ed342d3a7b2c51db843fcc0416451ec6eacbb8";

var url =  "https://min-api.cryptocompare.com/data/price?fsym=XOF&tsyms=USD,BTC,EUR?api_key=" + key + "&format=json"

$("form").on("click", (e)=>{
    e.preventDefault();
})

$("#btn").on("click", ()=>{
    $.getJSON(url, function (data) {
  
    });
})


})

