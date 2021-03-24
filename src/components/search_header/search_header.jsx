import React, { useEffect, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onLogoClick = (event) => {
    props.goHome();
    props.onCurrent(null);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    props.search(inputRef.current.value);
    formRef.current.reset();
  };
  return (
    <header className={styles.header}>
      <button className={styles.logo} onClick={onLogoClick}>
        <img src="/images/logo.png" alt="logo" />
        <h1>YouTube</h1>
      </button>
      <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          className={styles.text}
          placeholder="Search.."
        />
        <button className={styles.submit}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
