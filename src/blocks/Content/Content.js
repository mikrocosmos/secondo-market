import React from "react";
import Card from "./ItemCard";

function Main() {
  return (
    <main className="content">
      <h1 className="content__title">All sneakers</h1>
      <section className="items">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</section>
    </main>
  );
}

export default Main;
