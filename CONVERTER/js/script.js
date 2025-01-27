function convertCurrency() {
    const amount = document.getElementById("amount").value;

    const pesoToUsd = 0.017;
    const pesoToYuan = 0.12;
    const pesoToEuro = 0.016;
    const pesoToYen = 2.67;


    const usd = amount * pesoToUsd;
    const yuan = amount * pesoToYuan;
    const euro = amount * pesoToEuro;
    const yen = amount * pesoToYen;


    document.getElementById("usd").textContent = usd.toFixed(2);
    document.getElementById("yuan").textContent = yuan.toFixed(2);
    document.getElementById("euro").textContent = euro.toFixed(2);
    document.getElementById("yen").textContent = yen.toFixed(2);
}