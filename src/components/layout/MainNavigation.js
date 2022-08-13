import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

const MainNavigation = (props) => {
  const favoritesContext = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <ul>
        <li>
          <Link to='/'>All Meetups</Link>
        </li>
        <li>
          <Link to='/new-meetups'>New Meetups</Link>
        </li>
        <li>
          <Link to='/favorites'>
            Favorites
            <span className={classes.badge}>
              {favoritesContext.totalFavorites}
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;