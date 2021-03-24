import React, { useEffect } from 'react';

const Header = (props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onLogoClick = (event) => {
    props.onCurrent(null);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    props.onSubmit(inputRef.current.value);
    formRef.current.reset();
  };
  return (
    <header className="searchBar">
      <button className="searchBar_logo" onClick={onLogoClick}>
        <i class="fab fa-youtube"></i>YouTube
      </button>
      <form ref={formRef} className="searchBar_form" onSubmit={onSubmit}>
        <input ref={inputRef} type="text" className="searchBar_text" />
        <button className="searchBar_submit">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </header>
  );
};

export default Header;
