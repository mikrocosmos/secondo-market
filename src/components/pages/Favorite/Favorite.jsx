import React from "react";
import { Link } from "react-router-dom";
import FavoriteCard from "./FavoriteCard.jsx";
import { AppContext } from "../../../App";

function Favorite({ onFavoriteRemove }) { 
  const { favoriteData } = React.useContext(AppContext);

  return (
    <main className="content">
      <div className="favorite__header">
        <Link to="/">
          <button className="favorite__return">
            <svg
              className="favorite__return__image"
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 11L1 6L6 1"
                stroke="#C8C8C8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
        <h1 className="favorite__title">My bookmarks</h1>
      </div>

      {favoriteData.length > 0 ? (
        <section className="items">
          {favoriteData.map((e) => (
            <FavoriteCard
              key={e.id}
              id={e.id}
              title={e.title}
              imgURL={e.imgURL}
              price={e.price}
              onFavoriteRemove={(obj) => onFavoriteRemove(obj)}
            />
          ))}
        </section>
      ) : (
        <div className="favorite__empty">
          <img
            className="favorite__empty__image"
            src="/img/very_sad.png"
            alt="Bookmarks are empty :("
            width={70}
            height={70}
          />
          <h3 className="favorite__empty__heading">Bookmarks are empty :(</h3>
          <span className="favorite__empty__text">
            You didn't added anything to the bookmarks yet.
          </span>
          <Link to="/">
            <button className="favorite__empty__button">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="favorite__empty__button__icon"
              >
                <path
                  d="M14.7144 7L1.00007 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 13L1 7L7 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Return to the main
            </button>
          </Link>
        </div>
      )}
    </main>
  );
}

export default Favorite;
