import styles from "../styles/Graph.module.scss"
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, })
import { PlotParams } from 'react-plotly.js';
import Summary from "../Components/Summary";


interface Props {
    stocksXValue: string[],
    stocksYValue: string[],
    stocksArr: string[],
    conversion: number
}
 
const Graph: FunctionComponent<Props> = ({stocks, conversion, strCurrency}) => {

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
              marker: { color: 'red' },
            },
          ]}
          layout={
            {
              width: 900,
              height: 500,
              title: 'Stocks for ' + stockName,
              xaxis: {
                title: "Date"
              },
              yaxis: {
                title: `Price per Unit ${strCurrency}`
              }
            }
          }
        />
        {stocks && <Summary strCurrency={strCurrency} latestPrice={latestPrice} stockName={stockName} />}
        </div>
     );
}
 
export default Graph;