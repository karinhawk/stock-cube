import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Graph from '../Containers/Graph';
import { useEffect, useRef, useState } from 'react';
import SearchBar from '../Components/SearchBar';
import CurrencyToggle from '../Components/CurrencyToggle';
import cube from "../public/assets/images/cube.png"
import Image from 'next/image';

export default function Home() {

  const [stocks, setStocks] = useState(null)
  const [currencies, setCurrencies] = useState<any>()
  const [strCurrency, setStrCurrency] = useState("USD($)")
  const [conversion, setConversion] = useState(1)
  const searchForm = useRef<any>([]);

  const getStocksData = async (company: string) => {
    try {
      const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${company}&interval=60min&apikey=${process.env.NEXT_PUBLIC_STOCKAPI_ACCESS_KEY}`)
      const stocksData = await res.json();
      setStocks(stocksData)
      
    } catch (error) {
      console.log(error);
    }
  }

  const searchForStocks = (e: any) => {
    e.preventDefault()
    const company: string = searchForm.current.value.toUpperCase();
    getStocksData(company);
    searchForm.current.value = "";
  }

  const chooseSuggestedStocks = (e: MouseEvent) => {  
    const target = e.target as HTMLButtonElement;  
    const company: string = target.id;
    getStocksData(company)
  }

  const getCurrencyAPI = async () => {
    const res = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${process.env.NEXT_PUBLIC_CURRENCY_KEY}&currencies=EUR%2CUSD%2CCAD%2CGBP`)
    const currencyData = await res.json();
    setCurrencies(currencyData);
  }

  useEffect(() => {
    getCurrencyAPI()
  }, [])

  const calculateConversion = (currency: string) => {
    switch (currency) {
      case "CAD($)":
        setConversion(currencies.data.CAD.value)
        setStrCurrency("CAD($)")
        break;
      case "GBP(£)":
        setConversion(currencies.data.GBP.value)
        setStrCurrency("GBP(£)")
        break;
      case "EUR(€)":
        setConversion(currencies.data.EUR.value)
        setStrCurrency("EUR(€)")
        break;
      default:
        setConversion(currencies.data.USD.value)
        setStrCurrency("USD($)")
        break;
    }
  }



  return (
    <div className={styles.container}>
      <Head>
        <title>Stock Cube</title>
        <meta name="description" content="stocks trading ftse500" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {stocks && <header className={styles.header}>
        <Image src={cube} height={100} width={100} alt="cube logo with graphs on all sides"></Image>
        <h2 className={styles.title2}>STOCK-CUBE</h2>
      </header>}

      <main className={styles.main}>
        <div className={styles.content}>
          {!stocks && <h1 className={styles.title}>STOCK-CUBE</h1>}
          <SearchBar searchForStocks={searchForStocks} searchForm={searchForm} />
            {stocks && <CurrencyToggle calculateConversion={calculateConversion} />}
              {stocks && <Graph stocks={stocks} conversion={conversion} strCurrency={strCurrency} chooseSuggestedStocks={chooseSuggestedStocks}/>}
        </div>
      </main>

      {stocks && <footer className={styles.footer}>
        copyright Karin Hawksworth 2022
      </footer>}
    </div>
  )
}

