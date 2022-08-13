import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

const MainNavigation = (props) => {
  const favoritesContext = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <form action='https://www.lucasbecker.dev/'>
        <input type='submit' value='Go Back to LucasBecker.dev' />
      </form>
      <ul>
        <li>
          <Link to='/react-meetups-app/'>All Meetups</Link>
        </li>
        <li>
          <Link to='/react-meetups-app/new-meetups'>New Meetups</Link>
        </li>
        <li>
          <Link to='/react-meetups-app/favorites'>
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
