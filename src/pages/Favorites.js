import React, { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

const FavoritesPage = (props) => {
  const favoritesContext = useContext(FavoritesContext);

  let content;
  if (favoritesContext.favorites.length === 0) {
    content = <p>You don't have any favorites yet. Go add some!</p>;
  } else {
    content = <MeetupList meetups={favoritesContext.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
