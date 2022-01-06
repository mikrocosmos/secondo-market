import React from "react";
import Card from "./ItemCard";

const sneakersData = [
  { title: "Nike Blazer Mid Suede", imgURL: "/img/shop/1.jpg", price: 200 },
  { title: "Nike Air Max 270", imgURL: "/img/shop/2.jpg", price: 200 },
  { title: "Nike Blazer Mid Suede", imgURL: "/img/shop/3.jpg", price: 100 },
  {
    title: "Puma X Aka Boku Future Rider",
    imgURL: "/img/shop/4.jpg",
    price: 120,
  },
  { title: "Under Armour Curry 8", imgURL: "/img/shop/5.jpg", price: 220 },
  { title: "Nike Kyrie 7", imgURL: "/img/shop/6.jpg", price: 150 },
  { title: "Jordan Air Jordan 11", imgURL: "/img/shop/7.jpg", price: 150 },
  { title: "Nike LeBron XVIII", imgURL: "/img/shop/8.jpg", price: 230 },
  { title: "Nike LeBron XVIII Low", imgURL: "/img/shop/9.jpg", price: 200 },
  { title: "Nike Blazer Mid Suede", imgURL: "/img/shop/1.jpg", price: 200 },
  {
    title: "Puma X Aka Boku Future Rider",
    imgURL: "/img/shop/4.jpg",
    price: 120,
  },
  { title: "Nike Kyrie Flytrap IV", imgURL: "/img/shop/10.jpg", price: 300 },
];

function Main() {
  return (
    <main className="content">
      <div class="content__header">
        <h1 className="content__title">All sneakers</h1>
        <div className="content__search">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="content__search__image"
          >
            <path
              d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
              stroke="#e4e4e4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <input
            className="content__search__input"
            placeholder="Search..."
          ></input>
        </div>
      </div>
      <section className="items">
        {sneakersData.map((item) => (
          <Card 
						title={item.title}
						imgURL={item.imgURL}
						price={item.price}
					/>
        ))}
      </section>
    </main>
  );
}

export default Main;
