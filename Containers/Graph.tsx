import styles from "../styles/Graph.module.scss"
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, })
import { PlotParams } from 'react-plotly.js';
import Summary from "../Components/Summary";
import Suggested from "../Components/Suggested";


interface Props {
    stocksXValue: string[],
    stocksYValue: string[],
    stocksArr: string[],
    conversion: number
}
 
const Graph: FunctionComponent<Props> = ({stocks, conversion, strCurrency, suggestedStocks}) => {

  const stocksArr = Object.values(stocks);

    const stocksXValue = [];
  const stocksYValue = [];

  for (let key in stocksArr[1]) {
    stocksXValue.push(key);
    stocksYValue.push(stocksArr[1][key]["1. open"])
  }
  const yValArr = Object.values(stocksYValue);
  
  const convertedYVals = yValArr.map((val) => {      
   return parseFloat(val) * conversion
  })

  const stockName = stocksArr[0]["2. Symbol"];
  const latestPrice = convertedYVals[0].toFixed(2)
  console.log(stocksArr);
  
 
  
  

    return ( 
        <div className={styles.stocks}>
        <Plot
          data={[
            {
              x: stocksXValue,
              y: convertedYVals,
              type: 'scatter',
              marker: { color: 'rgb(218, 186, 223)' },
            },
          ]}
          layout={
            {
              width: 900,
              height: 550,
              plot_bgcolor: "rgba(0,0,0,0)",
              paper_bgcolor: "rgba(0,0,0,0)",
              title: 'Stocks for ' + stockName,
              xaxis: {
                title: "Date"
              },
              yaxis: {
                title: `Price per Unit ${strCurrency}`
              },
              font: {
                color: "white"
              }
            }
          }
        />
        <div className={styles.extras}>
        {stocks && <Summary strCurrency={strCurrency} latestPrice={latestPrice} stockName={stockName} />}
        {stocks && <Suggested suggestedStocks={suggestedStocks}/>}
        </div>
        </div>
     );
}
 
export default Graph;