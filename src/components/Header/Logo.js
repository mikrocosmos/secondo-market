import React from "react";

function Logo() {
  const documentTitle = document.querySelector("title").innerHTML;

  return (
    <a href="/index.html" className="logo" title={documentTitle}>
      <img
        width={40}
        height={40}
        src="/img/logo.png"
        alt={documentTitle}
      />
      <div className="logo__text">
        <h2 className="logo__title">Secondo Market</h2>
        <span className="logo__description">Best sneakers shop</span>
      </div>
    </a>
  );
}

export default Logo;
