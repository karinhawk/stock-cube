import { FunctionComponent } from 'react';
import styles from '../styles/Summary.module.scss'

interface SummaryProps {
    latestPrice: number,
    strCurrency: string,
    stockName: string
}
 
const Summary: FunctionComponent<SummaryProps> = ({latestPrice, strCurrency, stockName}) => {
    return ( 
    <div className={styles.summary}>
    <h2 className={styles.summary__title}>Summary</h2>
    <h3>{stockName}</h3>
    <h3 className={styles.summary__avgPrice}>Current Price: {latestPrice} {strCurrency}</h3>
    </div> 
    );
}
 
export default Summary;