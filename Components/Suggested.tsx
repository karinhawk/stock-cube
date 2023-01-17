import { FunctionComponent } from "react";
import styles from "../styles/Suggested.module.scss"

interface SuggestedProps {
    chooseSuggestedStocks: (e: any) => void
}
 
const Suggested: FunctionComponent<SuggestedProps> = ({chooseSuggestedStocks}) => {
    return ( 
        <div className={styles.suggested}>
            <h2 className={styles.suggested__title}>Suggested stocks</h2>
            <h3 className={styles.suggested__stock} id="META" onClick={chooseSuggestedStocks}>Meta</h3>
            <h3 className={styles.suggested__stock} id="MSFT" onClick={chooseSuggestedStocks}>Microsoft</h3>
            <h3 className={styles.suggested__stock} id="GOOG" onClick={chooseSuggestedStocks}>Alphabet</h3>
            <h3 className={styles.suggested__stock} id="AMZN" onClick={chooseSuggestedStocks}>Amazon</h3>
            <h3 className={styles.suggested__stock} id="AAPL" onClick={chooseSuggestedStocks}>Apple</h3>
        </div>
     );
}
 
export default Suggested;