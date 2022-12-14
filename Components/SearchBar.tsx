import React, { FC } from 'react'

interface SearchProps {
    searchForStocks: any
}

const SearchBar: FC<SearchProps> = ({ searchForStocks, searchForm }) => {
  return (
    <form className="form" onSubmit={searchForStocks}>
    <input ref={searchForm} className='form__searchbox' type="text" placeholder="Company..." />
    <button className="form__button" type="submit">Go</button>
</form>
  )
}

export default SearchBar