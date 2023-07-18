import React, { useContext, useEffect, useState } from 'react';
import styles from "@/styles/Product/menu.module.css";
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { ProductContext } from '@/Context';

function Menu() {

  const { product, setProduct } = useContext(ProductContext);

  const [searched, setSearched] = useState('')
  const [isFixed, setIsFixed] = useState(false);
  const interiors = ['i', 'in', 'int', 'inte', 'inter', 'interi', 'interio', 'interior', 'interiors']
  const blinds = ['b', 'bl', 'bli', 'blin', 'blind', 'blinds'];

  const handleInputChange = (event) => {
    setSearched(event.target.value);

    if(product !== 'Interiors' && interiors.includes(searched.toLowerCase())) {
      setProduct('Interiors')
    }

    if(product !== 'Blinds' && blinds.includes(searched.toLowerCase())) {
      setProduct('Blinds')
    }

  };


  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsFixed(scrollTop > 35);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.menuContainer} style={{ marginTop: isFixed ? '73.5px' : '0px' }}>
      <div className={styles.MenuIcon}>
        <span><AiOutlineMenu /></span>
        <span>Menu</span>
      </div>
      <div className={styles.inputContainer}>
        <span><AiOutlineSearch /></span>
        <input type="text" placeholder='What are you looking for?' value={searched.toString()} onChange={handleInputChange} />
      </div>
    </div>
  );
}

export default Menu;
