import React, { useState, useEffect, useRef } from 'react'
import moment from 'moment'
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import BarCart from '../components/Chart/Chart';
import DateRangeFilter from '../components/DateRangeFilter/DateRangeFilter';
import { IoIosArrowDown, IoIosArrowUp, IoMdMore } from 'react-icons/io';

import Calendar from '../assets/images/calendar.png';
import Help from '../assets/images/help.png';
import Cart from '../assets/images/cart.png';
import './style.scss';

const Dashboard = () => {
  const [getNumber, setNumber] = useState([]);
  const [getDate, setDate] = useState({});
  const toggleFilter = useRef(null);

  const onChange = ranges => {
    setDate({
      start: moment(ranges.startDate).format('D MMMM YYYY'),
      end: moment(ranges.endDate).format('D MMMM YYYY')
    });
    randomNumber();
  };

  const onFilterClick = () => {
    toggleFilter.current.classList.toggle("show");
  };

  const randomNumber = () => {
    setNumber(Array.from({length: 7}, () => Math.floor(Math.random() * 7)));
  }

  useEffect(() => {
    setDate({
      start: moment().format('D MMMM YYYY'),
      end: moment().add(7,'days').format('D MMMM YYYY')
    })
    randomNumber();
  }, []);

  return (
    <>
    <Sidebar />
    <Header />
    <main>
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="dashboard-filter">
          <div className="filter-toggle" onClick={onFilterClick}>
            <span><img src={Calendar} alt="Period" /> Period</span>
            <span>{getDate.start} - {getDate.end}</span>
            <IoIosArrowDown size={'1.3rem'} />
          </div>
          <div className="filter-content" ref={toggleFilter}>
            <DateRangeFilter onChange={onChange} />
            <button className="apply-button" onClick={onFilterClick}>Apply</button>
          </div>
        </div>
      </div>

      <div className="panel-header">
        <h1>
          Market Insights 
          <span>
            <img src={Help} alt="Help" />
            <small>Click Here for Help</small>
            <IoIosArrowUp />
          </span>
        </h1>
      </div>

      <div className="panel-content">
        <div className="card content-summary">
          <div className="panel-title">
            <h3>Sales Turnover</h3>
            <IoMdMore size={'1.5rem'} />
          </div>
          <div className="panel-summary">
            <div>
              <h2>Rp 3.600.000</h2>
              <p><span>13.8%</span> last period in products sold</p>
            </div>
            <img src={Cart} alt="Cart" />
          </div>
        </div>

        <div className="card-info">
          <div className="card content-cart">
            <div className="panel-title">
              <h3>AVERAGE PURCHASE VALUE</h3>
              <IoMdMore size={'1.5rem'} />
            </div>
            <BarCart data={getNumber} />
          </div>

          <div className="card content-products">
            <div className="panel-title">
              <h3>BEST SELLING SKU</h3>
              <IoMdMore size={'1.5rem'} />
            </div>
          </div>

          <div className="card content-products">
            <div className="panel-title">
              <h3>TOP COMPETITOR SKU</h3>
              <IoMdMore size={'1.5rem'} />
            </div>
          </div>

        </div>
      </div>
    </main>
    </>
  )
}

export default Dashboard;