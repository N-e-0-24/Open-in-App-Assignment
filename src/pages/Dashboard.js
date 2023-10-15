import React from 'react';
import PrimaryHeader from '../components/PrimaryHeader';
import SecondaryHeader from '../components/SecondaryHeader';
import BarGraph from '../components/BarGraph';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <PrimaryHeader/>
      <SecondaryHeader/>
      <BarGraph />
      <Footer/>
    </div>
  )
}

export default Dashboard;