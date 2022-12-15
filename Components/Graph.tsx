import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, })
import { PlotParams } from 'react-plotly.js';


interface Props {
    stocksXValue: string[],
    stocksYValue: string[],
    stocksArr: string[],
    conversion: number
}
 
const Graph: FunctionComponent<Props> = ({stocks, conversion, strCurrency}) => {

  const stocksArr = Object.values(stocks);
  console.log(stocksArr);

    const stocksXValue = [];
  const stocksYValue = [];

  for (let key in stocksArr[1]) {
    stocksXValue.push(key);
    stocksYValue.push(stocksArr[1][key]["1. open"])
  }
  const yValArr = Object.values(stocksYValue);
  console.log(yValArr);
  
  const convertedYVals = yValArr.map((val) => { 
    console.log(conversion);
       
   return parseFloat(val) * conversion
  })


    return ( 
        <>
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
              title: 'Stocks for ' + stocksArr[0]["2. Symbol"],
              xaxis: {
                title: "Date"
              },
              yaxis: {
                title: `Price per Unit ${strCurrency}`
              }
            }
          }
        />
        </>
     );
}
 
export default Graph;