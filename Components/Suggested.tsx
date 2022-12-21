import { FunctionComponent } from "react";
import styles from "../styles/Suggested.module.scss"

interface SuggestedProps {
    
}
 
const Suggested: FunctionComponent<SuggestedProps> = ({suggestedStocks}) => {
    return ( 
        <div className={styles.suggested}>
            <h2 className={styles.suggested__title}>Suggested stocks</h2>
            <h3 className={styles.suggested__stock} id="META" onClick={suggestedStocks}>Meta</h3>
            <h3 className={styles.suggested__stock} id="MSFT" onClick={suggestedStocks}>Microsoft</h3>
            <h3 className={styles.suggested__stock} id="GOOG" onClick={suggestedStocks}>Alphabet</h3>
            <h3 className={styles.suggested__stock} id="AMZN" onClick={suggestedStocks}>Amazon</h3>
            <h3 className={styles.suggested__stock} id="AAPL" onClick={suggestedStocks}>Apple</h3>
        </div>
     );
}
 
export default Suggested;