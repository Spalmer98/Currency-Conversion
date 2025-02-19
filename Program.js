const label = document.getElementById("conversion");

const button = document.getElementById('convertButton');
button.addEventListener('click', getInfo());


function getInfo()
{
    var currency1 = document.getElementById("currency1").value;
    var currency2 = document.getElementById("currency2").value;
    let amount = document.getElementById("amount").value;

    convert(currency1, currency2, amount);
}

function convert(currency1, currency2, amount)
{
    if(currency1 == "usd")
    {
        if(currency2 == "usd")
        {
            conversion = amount;
            label.textContent = amount;
        }
        else if(currency2 == "peso")
        {

        }
        else if(currency2 == "sterling")
        {

        }
        else if(currency2 == "yen")
        {

        }
        else
        {
            label.textContent = "Error in USD condistion statement";
        }
    }
    else
    {
        label.textContent = "Error in first condition statement"
    }
}
