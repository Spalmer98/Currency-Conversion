import accounting from "accounting";

const label = document.getElementById("conversion");

const button = document.getElementById('convertButton');
button.onclick = getInfo;


function getInfo()
{
    //alert("getInfo ran");
    var currency1 = document.getElementById("currency1").value;
    var currency2 = document.getElementById("currency2").value;
    let amount = document.getElementById("amount").value;

    convertpt1(currency1, currency2, amount);
}

function convertpt1(currency1, currency2, amount)
{
    if(currency1 == "usd")
    {
        convertUS(currency2, amount)
    }
    else if(currency1 == "peso")
    {
        convertPeso(currency2, amount)
    }
    else if(currency1 == "sterling")
    {
        convertSterling(currency2, amount)
    }
    else if(currency1 == "yen")
    {
        convertYen(currency2, amount)
    }
}


function convertUS(currency2, amount)
{
    if(currency2 == "usd")
    {
        label.textContent = accounting.formatMoney(amount, "$");
    }
    else if(currency2 == "peso")
    {
        conversion = amount * 20.450174;
        label.textContent = accounting.formatMoney(conversion, "$");
    }
    else if(currency2 == "sterling")
    {
        conversion = amount * 0.79448874;
        label.textContent = accounting.formatMoney(conversion, "£");
    }
    else if(currency2 == "yen")
    {
        conversion = amount * 151.50253;
        label.textContent = accounting.formatMoney(conversion, "¥");
    }
    else
    {
        label.textContent = "Error in USD condistion statement";
    }
}

function convertPeso(currency2, amount)
{
    if(currency2 == "usd")
    {
        conversion = amount * 0.048893808;
        label.textContent = accounting.formatMoney(conversion, "$");
    }
    else if(currency2 == "peso")
    {
        label.textContent = accounting.formatMoney(amount, "$");
    }
    else if(currency2 == "sterling")
    {
        conversion = amount * 0.03884284;
        label.textContent = accounting.formatMoney(conversion, "£");
    }
    else if(currency2 == "yen")
    {
        conversion = amount * 7.4073315;
        label.textContent = accounting.formatMoney(conversion, "¥");
    }
    else
    {
        label.textContent = "Error in Peso condistion statement";
    }
}

function convertSterling(currency2, amount)
{
    if(currency2 == "usd")
    {
        conversion = amount * 1.2586072;
        label.textContent = accounting.formatMoney(conversion, "$");
    }
    else if(currency2 == "peso")
    {
        conversion = amount * 25.745335;
        label.textContent = accounting.formatMoney(conversion, "$");
    }
    else if(currency2 == "sterling")
    {
        label.textContent = accounting.formatMoney(amount, "£");
    }
    else if(currency2 == "yen")
    {
        conversion = amount * 190.68658;
        label.textContent = accounting.formatMoney(conversion, "¥");
    }
    else
    {
        label.textContent = "Error in Sterling condistion statement";
    }
}

function convertYen(currency2, amount)
{
    if(currency2 == "usd")
    {
        conversion = amount * 0.0066003972;
        label.textContent = accounting.formatMoney(conversion, "$");
    }
    else if(currency2 == "peso")
    {
        conversion = amount * 0.13501205;
        label.textContent = accounting.formatMoney(conversion, "$");
    }
    else if(currency2 == "sterling")
    {
        conversion = amount * 0.005244278;
        label.textContent = accounting.formatMoney(conversion, "£");
    }
    else if(currency2 == "yen")
    {
        label.textContent = accounting.formatMoney(amount, "¥");
    }
    else
    {
        label.textContent = "Error in Yen condistion statement";
    }
}
