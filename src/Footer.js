import styles from './Footer.module.css'
import Link from './Link';

function Footer(){
    return(
        <footer classname={styles.AppLogo} id='foot'>
            <a href='http://www.google.com/'>google.com</a>
            <Link url="https://www.bing.com" linkLabel="uhh the other one"/>
        </footer>
    )
}
export default Footer;