import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classes from './MainNavigation.module.css';

import axios from 'axios';

function MainNavigation({  setSearchResults: setParentSearchResults })  {
  const location = useLocation();
  const isProductsPage = location.pathname === '/products';
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('https://api2.mymarket.ge/api/ka/products', {
        Keyword: searchInput,
        Limit: 12,
      });

      setSearchResults(response.data.data.Prs);
      console.log(response.data.data.Prs);
    } catch (error) {
      console.error('Request error:', error);
    }
  };

  return (
    <header className={classes.header}>
      <h1>Mymarket</h1>
      {isProductsPage && (
        <div className={classes.search}>
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      )}
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)}end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              Log In
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;



