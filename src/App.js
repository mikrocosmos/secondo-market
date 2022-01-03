import React from 'react';
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Cart from './components/Content/Cart/Cart'

function App() {
  return (
		<div className="wrapper">
				<div className="overlay">
				<Cart />
				<Header />
				<Content />
			</div>
		</div>
  );
}

export default App;
