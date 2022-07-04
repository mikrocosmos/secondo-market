import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../App";

function Profile() {
  const { orders } = React.useContext(AppContext);

  return (
    <main className="content">
      <h1 className="profile__title">My profile</h1>
      <section className="profile">
        <a
          href="https://github.com/mikrocosmos"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="profile__image"
            src="/img/mikrocosmos.jpg"
            alt="mikrocosmos"
            width={120}
            height={120}
          />
          <img
            className="profile__image profile__image--github"
            src="/img/github.png"
            alt="github"
            width={120}
            height={120}
          />
        </a>
        <div className="profile__text">
          <h2 className="profile__name">@mikrocosmos</h2>
          <textarea
            className="profile__description"
            placeholder="Description of your profile."
            defaultValue={
              "This project created by mikrocosmos. Special thanks to Dennis Archakov!"
            }
          />
          <div className="profile__orders">
            <Link to="/profile/orders">
              Orders: <b>{orders.length}</b>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
