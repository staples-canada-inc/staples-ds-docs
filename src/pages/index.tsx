import React from 'react'
import '../styles/design-system/staples-ds.min.css'
import '../styles/docs/styles.css'
import Header from '../components/Header'
import HeroBanner from './components/HeroBanner'
import Features from './components/Features'
import QuickAccess from './components/QuickAccess'

const IndexPage = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Features />
      <QuickAccess />
    </>
  )
}

export default IndexPage
