import React, { useEffect, useState } from 'react'
import styles from "./Header.module.css"
import { Link, useNavigate } from 'react-router-dom';


interface HeaderProps {
    title:string;
    imgLogo:string;
}


const Header: React.FC<HeaderProps> = ({title, imgLogo}) => {


    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        setLoggedIn(false);
    }, [])


    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={imgLogo} alt=""/>
                <h1>{title}</h1>
                
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/modelos">Modelos</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>

                </ul>
            </nav>

            <button onClick={() => setLoggedIn(false)}>SignOut</button>
            <p>{loggedIn.valueOf()}</p>
        </header>
    )
}

export default Header