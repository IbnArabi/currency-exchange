fetch('https://api.exchangerate.host/latest')
.then(response => {return response.json()})
.then(data =>{
    console.log(data)

    document.getElementById("exchange-rates").innerHTML = `
        <div>
            <span class="subheading">Last Updated: ${data['date']}</span>
            <div class="country-information">
                <h2 class="g20"><img src="arg.png" alt="Argentina"> Argentina: ${data.rates.ARS}</h2>
                <h2 class="g20"><img src="aus.png" alt="aus"> Australia: ${data.rates.AUD}</h2>
                <h2 class="g20"><img src="brazil.png" alt="brz"> Brazil: ${data.rates.BRL}</h2>
                <h2 class="g20"><img src="can.png" alt="can"> Canada: ${data.rates.CAD}</h2>
                <h2 class="g20"><img src="chi.png" alt="chi"> China: ${data.rates.CNY}</h2>
                <h2 class="g20"><img src="fra.png" alt="fra"> France: ${data.rates.EUR}</h2>
                <h2 class="g20"><img src="ger.png" alt="ger"> Germany: ${data.rates.EUR}</h2>
                <h2 class="g20"><img src="india.png" alt="ind"> India: ${data.rates.INR}</h2>
                <h2 class="g20"><img src="indo.png" alt="indo"> Indonesia: ${data.rates.IDR}</h2>
                <h2 class="g20"><img src="ksa.png" alt="ksa"> Saudi Arabia: ${data.rates.SAR}</h2>
                <h2 class="g20"><img src="italy.png" alt="italia"> Italy: ${data.rates.EUR}</h2>
                <h2 class="g20"><img src="japan.png" alt="jap"> Japan: ${data.rates.JPY}</h2>
                <h2 class="g20"><img src="rok.png" alt="rok"> Republic of Korea: ${data.rates.KRW}</h2>
                <h2 class="g20"><img src="mexico.png" alt="mex"> Mexico: ${data.rates.MXN}</h2>
                <h2 class="g20"><img src="russia.png" alt="ruf"> Russian Federation: ${data.rates.RUB}</h2>
                <h2 class="g20"><img src="rsa.png" alt="soa"> South Africa: ${data.rates.ZAR}</h2>
                <h2 class="g20"><img src="turkey.png" alt="try"> Turkey: ${data.rates.TRY}</h2>
                <h2 class="g20"><img src="uk.png" alt="brz"> United Kingdom: ${data.rates.GBP}</h2>
                <h2 class="g20"><img src="usa.png" alt="usa"> United States: ${data.rates.USD}</h2>
                <h2 class="g20"><img src="euu.png" alt="euu"> European Union: ${data.rates.EUR}</h2>
            </div>
        </div>
    `
})