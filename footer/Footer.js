import React from "react"
import styles from './footer.css';

const date = new Date()
const year = date.getFullYear()

const Footer = () => {
    return <footer> 
        <div className={styles.footer}>
            &copy; {year} All right reserverd
     

        </div>
        </footer>
};

export default Footer;