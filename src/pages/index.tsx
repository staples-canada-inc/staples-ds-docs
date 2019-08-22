import React from 'react'
import { Link } from 'gatsby'

import {Container, Col, Row} from 'reactstrap'

import Header from '../Header'
import HeroBanner from './components/HeroBanner'
import Features from './components/Features'
import QuickAccess from './components/QuickAccess'

const IndexPage = () => {
  return (
    <>
    <Header/>
    <HeroBanner/>
    <Features/>
    <QuickAccess/>
    </>
  )
}

export default IndexPage
