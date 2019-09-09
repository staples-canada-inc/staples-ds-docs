import React from 'react'
import '../css/design-system/staples-ds.css'
import '../css/site/preview-overrides.css'
import Header from '../Header'
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
