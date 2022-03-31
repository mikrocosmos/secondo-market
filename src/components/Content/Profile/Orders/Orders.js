import React from 'react';
import { Link } from 'react-router-dom'

function Orders() {
  return (
		<main className="content">
			<div className="favorite__empty">
          <img
            className="favorite__empty__image"
            src="/img/sad.png"
            alt="Orders are empty :("
            width={70}
            height={70}
          />
          <h3 className="favorite__empty__heading">Orders are empty :(</h3>
          <span className="favorite__empty__text">
            You didn't ordered anything yet.
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
		</main>
	)
}

export default Orders;