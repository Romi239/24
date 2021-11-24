/*for (var i = 1; i < 11 ;i++){
    console.log(i)
}

let text = "";
for (let i = 1; i <= 10; i++){
    text += i +  "<br>";
}
*/

const vehiculos = ["BMW" , "Toyota" , " Volvo" , "nissan" ,"Fiat" , "Audi"] 
    let text ="";
for (let i = 5 ; i >= 0 ; i--){
    text += vehiculos[i] + "<br>"
}
document.getElementById("demo").innerHTML = text;