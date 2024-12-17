import React from 'react'
import Cover from '../Components/Cover'
import Standout from '../Components/Standout'
import Snapshots from '../Components/Snapshots'
import Portfolio from '../Components/Portfolio'
import Network from '../Components/Network'

const Home = () => {
  return (
    <div>
        <Cover/>
        <Standout/>
        <Snapshots/>
        <Portfolio/>
        <Network/>
    </div>
  )
}

export default Home