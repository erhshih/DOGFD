import React from 'react'
import Banner from '../Components/Banner/Banner'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter  from '../Components/NewsLetter/NewsLetter'
import StoreMain  from '../Components/StoreMain/StoreMain'
import StoreButton  from '../Components/StoreButton/StoreButton'

const Shop = () => {
  return (
    <div>
      <StoreMain></StoreMain>
      <Popular></Popular>
      {/* <Offers></Offers> */}
      <NewCollections></NewCollections>
      <StoreButton></StoreButton>
      {/* <Banner></Banner> */}
      <NewsLetter></NewsLetter>

    </div>
  )
}

export default Shop
