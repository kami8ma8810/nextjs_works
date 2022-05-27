import Link from 'next/link';
import * as style from '../styles/common.module.scss'


const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.insideContainer}>
        <a href='https://twitter.com/jookalubi24/'>
          <img src='/images/twitter.svg' alt='twitter' />
        </a>
        <a href='https://onedarling.site/'>
          <img src='/images/wordpress.svg' alt='wordpress' />
        </a>
        <hr />
        <div className={style.linkContainer}>
        	<Link href='/'>
	          <a>Top</a>
	        </Link>
	        <Link href='/blog'>
	          <a>Blog</a>
	        </Link>
	        <Link href='/contact'>
	          <a>Contact</a>
	        </Link>
        </div>
        <p className={style.copyright}>&copy;{new Date().getFullYear()} 上かるび</p>
      </div>
    </footer>
  );
};

export default Footer;
