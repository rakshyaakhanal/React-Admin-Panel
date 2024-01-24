import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Widget from '../../Components/Widget/Widget';
import Featured from '../../Components/Featured/Featured';
import Chart from '../../Components/Chart/Chart';
import List from '../../Components/Table/Table';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>

        <div className='charts'>
          <Featured />
          <Chart title='Last 8 Months (Revenue)' aspect={2 / 1} />
        </div>

        <div className='listContainer'>
          <div className='listTitle'>Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Home;