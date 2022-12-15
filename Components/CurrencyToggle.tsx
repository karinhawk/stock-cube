import styles from '../styles/Currency.module.scss'
import { FunctionComponent } from "react";

interface Props {
    calculateConversion: (currency: string) => void
}

const CurrencyToggle: FunctionComponent<Props> = ({ calculateConversion }) => {
    return (
        <div className={styles.currencyBar}>
            <h3>Switch Currency:</h3>
            <div>
                <input id="gbp" name="radiobtn" type="radio" onClick={() => calculateConversion("GBP(£)")} />
                <label className={styles.label} htmlFor="gbp">GBP(£)</label>
            </div>
            <div>
                <input id="usd" name="radiobtn" type="radio" onClick={() => calculateConversion("USD($)")} />
                <label className={styles.label} htmlFor="usd">USD($)</label>
            </div>
            <div>
                <input id="eur" name="radiobtn" type="radio" onClick={() => calculateConversion("EUR(€)")} />
                <label className={styles.label} htmlFor="eur">EUR(€)</label>
            </div>
            <div>
                <input id="cad" name="radiobtn" type="radio" onClick={() => calculateConversion("CAD($)")} />
                <label className={styles.label} htmlFor="cad">CAD($)</label>
            </div>
        </div>
    );
}

export default CurrencyToggle;