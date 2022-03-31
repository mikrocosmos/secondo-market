import React from "react";
import { Link } from 'react-router-dom'

function Profile() {
  const github = "https://github.com/mikrocosmos";

  return (
    <main className="content">
      <h1 className="profile__title">My profile</h1>
      <section className="profile">
        <a href={github} target="_blank" rel="noreferrer">
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
        <div class="profile__text">
          <h2 className="profile__name">@mikrocosmos</h2>
          <div className="profile__description">
            This project created by mikrocosmos.
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum neque a excepturi ab iure blanditiis aliquam libero qui ipsa reiciendis quaerat, aliquid officia dolor recusandae quae! Numquam minus inventore vitae distinctio officiis saepe explicabo, beatae quas. Velit, reprehenderit nam laudantium dolor iure esse, sed quas, possimus ipsum earum maxime culpa.</p>
          </div>
					<Link to="/profile/orders">
						<div className="profile__orders">Orders: <b>17</b></div> 
					</Link>
        </div>
      </section>
    </main>
  );
}

export default Profile;
