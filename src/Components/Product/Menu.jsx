import React, { useContext, useEffect, useState } from 'react';
import styles from "@/styles/Product/menu.module.css";
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { ProductContext } from '@/Context';
import { OurProductData } from '../content';
import { AiFillCloseCircle } from 'react-icons/ai';
import logo from '../../../public/Assets/images/logo.png';
import Image from 'next/image';

function Menu() {

  const { product, setProduct } = useContext(ProductContext);

  const [searched, setSearched] = useState('')
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const interiors = ['i', 'in', 'int', 'inte', 'inter', 'interi', 'interio', 'interior', 'interiors'];
  const blinds = ['b', 'bl', 'bli', 'blin', 'blind', 'blinds'];
  const curtains = ['c', 'cu', 'cur', 'curt', 'curta', 'curtai', 'curtain', 'curtains'];
  const wallpaper = ['w', 'wa', 'wal', 'wall', 'wallp', 'wallpa', 'wallpap', 'wallpape', 'wallpaper'];
  const rods = ['r','ro','rod','rods','t','tr','tra','trac','track', 'tracks','rods & tracks','rods & tracks','rods and tracks'];
  const flooring = ['f','fl','flo','floo','floor','floori','floorin','flooring'];
  const furniture = ['f','fu','fur','furn','furni','furnit','furnitu','furnitur','furniture']
  const upholstery = ['u','up','uph','upho','uphol','uphols','uphols','upholst','upholste','upholster','upholstery','cus','cush','cushi','cushio','cushion','cushions'];
  const rugs = ['r','ru','rug','rugs']

  const handleInputChange = (event) => {
    setSearched(event.target.value);

    if (product !== 'Interiors' && interiors.includes(searched.toLowerCase())) {
      setProduct('Interiors')
    }

    else if (product !== 'Blinds' && blinds.includes(searched.toLowerCase())) {
      setProduct('Blinds')
    }

    else if (product !== 'Curtains' && curtains.includes(searched.toLowerCase())) {
      setProduct('Curtains')
    }

    else if (product !== 'Wallpaper' && wallpaper.includes(searched.toLowerCase())) {
      setProduct('Wallpaper')
    }

    else if (product !== 'Rods and Tracks' && rods.includes(searched.toLowerCase())) {
      setProduct('Rods and Tracks')
    }

    else if (product !== 'Flooring' && flooring.includes(searched.toLowerCase())) {
      setProduct('Flooring')
    }

    else if (product !== 'Furniture' && furniture.includes(searched.toLowerCase())) {
      setProduct('Furniture')
    }

    else if (product !== 'Upholstery' && upholstery.includes(searched.toLowerCase())) {
      setProduct('Upholstery')
    }

    else if (product !== 'Rugs' && rugs.includes(searched.toLowerCase())) {
      setProduct('Rugs')
    }
  };

  const handleClick = (e,title) => {
    e.preventDefault();
    setMenuOpen(false);
    setProduct(title);
  }


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
      <div className={styles.MenuIcon} onClick={() => setMenuOpen(true)}>
        <span><AiOutlineMenu /></span>
        <span>Menu</span>
      </div>
      <div className={styles.inputContainer}>
        <span><AiOutlineSearch /></span>
        <input type="text" placeholder='What are you looking for?' value={searched.toString()} onChange={handleInputChange} />
      </div>
      <div className={styles.MenuOptions} style={{ left: !menuOpen ? '-100%' : '2%' }}>
        <Image src={logo} alt="log" width={1000} height={1000} className={styles.menuLogo}/>
        {OurProductData.map((item) => (
          <span onClick={(e) => handleClick(e,item.title)}>{item.title}</span>
        ))}
        <p onClick={() => setMenuOpen(false)}><AiFillCloseCircle /></p>
      </div>
    </div>
  );
}

export default Menu;
