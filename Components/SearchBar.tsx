import styles from "../styles/Search.module.scss"
import React, { FC } from 'react'

interface SearchProps {
  searchForStocks: any
}

const SearchBar: FC<SearchProps> = ({ searchForStocks, searchForm }) => {
  return (
    <form className={styles.form} onSubmit={searchForStocks}>
      <input ref={searchForm} className={styles.form__text} type="text" placeholder="Company..." />
      <button className={styles.form__button} type="submit">Go</button>
    </form>
  )
}

export default SearchBar