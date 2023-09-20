import { useState } from 'react'

const CurrenciesList = () => {

    const headers = new Headers()
    headers.append("apikey", "******")

    const [rates, setRates] = useState({})
    const [userInput, setUserInput] = useState("")
    // upgrade: datepicker
    const [date, setDate] = useState("")
    
    const base = userInput.toLocaleUpperCase()
    // upgrade: picker with all available currencies from the API
    const symbols = ["EUR", "GBP", "JPY", "USD"]
const onGetRates = () => {
    const getRates = async () => {
        try {
            const ratesResponse = await fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols}&base=${base}`, getRatesOptions)
            const ratesData = await ratesResponse.json()
            setRates(ratesData.rates)
        } catch (e) {
            console.log(e.messge)
        }
        
    }
    getRates()
}

  const onUserInputChange = (e) => {
    setUserInput(e.target.value)
  }

  const onDateChange = (e) => {
    setDate(e.target.value)
  }


const getRatesOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: headers
}
// upgrade: style pretty
    return(
        <div>
            <input type='text' placeholder='Type currency' onChange={onUserInputChange}></input>
            <input type='text' placeholder='Enter date YYYY-MM-DD'onChange={onDateChange}></input>
            <button type='button' onClick={onGetRates}>OK</button>
            <div>
                <h2>Exchange rates for {date}</h2>
                <ul>
                    {Object.entries(rates).map((rate, index) => {
                        return (
                            <li key={index}>{`${rate[0]}: ${rate[1]} `}</li>
                        )
                    })}

                </ul>
            </div>
            
        </div>
    )
}

export default CurrenciesList