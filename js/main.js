
let initialBalance;
let currentBalance = 10000;

let precioSelvaNegra = 2000;
let precioLemonPie= 1500;
let precioTiramisu = 3000;

let purchases = [];

let purchaseSelvaNegra = document.getElementById("selva-negra");
let purchaseLemonPie = document.getElementById("lemon-pie");
let purchaseTiramisu = document.getElementById("tiramisu");

let encouragingText = document.querySelector(".encouraging-text");

let currentBalanceDisplay = document.querySelector("#current-balance");
currentBalanceDisplay.innerHTML = currentBalance;

purchaseSelvaNegra.addEventListener("click", () => {
    if(currentBalance >= precioSelvaNegra){
        currentBalance -= 2000;
        currentBalanceDisplay.innerHTML = currentBalance;
        purchases.push(2000);
        sumPurchases();
    }else if(currentBalance < precioSelvaNegra){
        alert("Usted no tiene suficiente saldo para adquirir este producto!");
    }
});
purchaseLemonPie.addEventListener("click", () => {
    if(currentBalance >= precioLemonPie){
        currentBalance -= 1500;
        currentBalanceDisplay.innerHTML = currentBalance;
        purchases.push(1500);
        sumPurchases();
    }else if(currentBalance < precioLemonPie){
        alert("Usted no tiene suficiente saldo para adquirir este producto!");
    }
});
purchaseTiramisu.addEventListener("click", () => {
    if(currentBalance >= precioTiramisu){
        currentBalance -= 3000;
        currentBalanceDisplay.innerHTML = currentBalance;
        purchases.push(3000);
        sumPurchases();
    }else if(currentBalance < precioTiramisu){
        alert("Usted no tiene suficiente saldo para adquirir este producto!");
    }
});
let sumOutside;
function sumPurchases(){
    let sum = 0;
    for (let i = 0; i < purchases.length; i += 1) {
        sum += purchases[i];
    }
    console.log(purchases);
    console.log(sum);
    sumOutside = sum;
    console.log("sumOutside es igual a: " + sumOutside);
    encouragingText.innerHTML = "Usted ha gastado un total de: $" + sumOutside;
    return sum;
}