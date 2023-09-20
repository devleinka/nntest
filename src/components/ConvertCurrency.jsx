import { useState } from 'react'

const Convert = () => {
    const headers = new Headers()
    headers.append("apikey", "******")
    const reqOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: headers
    }

    const [startCurrency, setStartCurrency] = useState("")
    const [targetCurrency, setTargetCurrency] = useState("")
    const [amount, setAmount] = useState("")


    const [conversion, setConversion] = useState("")

    const onStartChange = (e) => {
        setStartCurrency(e.target.value.toLocaleUpperCase())
    }
    const onTargetChange = (e) => {
        setTargetCurrency(e.target.value.toLocaleUpperCase())
    }
    const onAmountChange = (e) => {
        setAmount(e.target.value)
    }
    
    const getConversion = async () => {
        const reqAmount = Number(amount)
        try {
            const conversionResponse = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${targetCurrency}&from=${startCurrency}&amount=${reqAmount}`, reqOptions)
            const conversionData = await conversionResponse.json()
            setConversion(conversionData.result)
        } catch(e) {
            console.log(e.message)
        }

    }
    const onConversion = () => {
        getConversion()
    }
    

    return (
        <div>
            <input 
                type='text' 
                placeholder='Start Currency' 
                onChange={onStartChange}
            />
            <input 
                type='text' 
                placeholder='Target Currency'
                onChange={onTargetChange}    
            />
            <input 
                type='text'
                placeholder='Amount to Convert'
                onChange={onAmountChange}
            />
            <button type='button' onClick={onConversion}>Convert</button>
            <div>
                <h2>Currency Exchange</h2>
            </div>
            {
                conversion !== "" && <p>{`${amount} ${startCurrency} is ${conversion} ${targetCurrency}`}</p>            }
        </div>
    )
}

export default Convert