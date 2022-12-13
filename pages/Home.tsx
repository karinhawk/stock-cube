import { NextPage } from 'next'
import React from 'react'

const Home: NextPage = () => {
    const endpoint = `function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${process.env.NEXT_PUBLIC_STOCKAPI_ACCESS_KEY}`
    
    
  return (
    <div>Home</div>
  )
}

export default Home