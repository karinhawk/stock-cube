import { FunctionComponent } from "react";

interface Props {
    calculateConversion: (currency: string) => void
}
 
const CurrencyToggle: FunctionComponent<Props> = ({calculateConversion}) => {
    return ( 
        <div>
    <label htmlFor="gbp">GBP(£)</label>
    <input id="gbp" name="radiobtn" type="radio" onClick={() => calculateConversion("GBP(£)")} />
    <label htmlFor="usd">USD($)</label>
    <input id="usd" name="radiobtn" type="radio" onClick={() => calculateConversion("USD($)")} />
    <label htmlFor="eur">EUR(€)</label>
    <input id="eur" name="radiobtn" type="radio" onClick={() => calculateConversion("EUR(€)")} />
    <label htmlFor="cad">CAD($)</label>
    <input id="cad" name="radiobtn" type="radio" onClick={() => calculateConversion("CAD($)")} />
        </div>
     );
}
 
export default CurrencyToggle;