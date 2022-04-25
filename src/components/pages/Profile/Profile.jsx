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
        <div className="profile__text">
          <h2 className="profile__name">@mikrocosmos</h2>
          <textarea className="profile__description" placeholder="Description of your profile.">
            This project created by mikrocosmos.
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </textarea>
					<Link to="/profile/orders">
						<div className="profile__orders">Orders: <b>17</b></div> 
					</Link>
        </div>
      </section>
    </main>
  );
}

export default Profile;
