import '../specific-css/base.css'
import {Popup} from './Popup'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export function Homepage(props) {
    const [popUp, setPopup] = useState(false);

    return (
        <div>
            <header className="header-space">
                <img className="app-logo" src="../imgs/logo.png" alt="logo" />
                <h1 className="webpage-title">Infinity</h1>
                <nav className="header-nav">
                    <Link to="/">Home</Link>
                    <Link to="/settings">Settings</Link>
                </nav>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Button for dropdown"></button>
                    <div className="content">
                        <Link to="/">Home</Link>
                        <Link to="/settings">Settings</Link>
                    </div>
                </div>
            </header>
            <main>
                <h2 className="main-title">Personal Gallery</h2>
                <div className="search-bar">
                    <input id="prune" type="text" className="form-control" placeholder="Search for artworks..." />
                </div>
                <div className="art-gallery">
                    <div className="art-card">
                        <img src="./imgs/Firefly Create me a pokemon character art 50375.jpg" alt="Artwork 1" />
                        <div className="art-card-title">Artwork 1</div>
                        <div className="art-card-actions">
                            <i className="material-icons" onClick={() => setPopup(true)}>chat_bubble_outline</i>
                          
                        </div>
                    </div>
                    <div className="art-card">
                        <img src="./imgs/Firefly Create me a pokemon character art 82874.jpg" alt="Artwork 2" />
                        <div className="art-card-title">Artwork 2</div>
                        <div className="art-card-actions">
                            <i className="material-icons" onClick={() => setPopup(true)}>chat_bubble_outline</i>
                        </div>
                    </div>
                    <div className="art-card">
                        <img src="./imgs/Firefly Create me a pokemon character art 83189.jpg" alt="Artwork 3" />
                        <div className="art-card-title">Artwork 3</div>
                        <div className="art-card-actions">
                            <i className="material-icons" onClick={() => setPopup(true)}>chat_bubble_outline</i>
                        </div>
                    </div>
                    <div className="art-card">
                        <img src="./imgs/Firefly Create me a pokemon character art 9152.jpg" alt="Artwork 4" />
                        <div className="art-card-title">Artwork 4</div>
                        <div className="art-card-actions">
                            <i className="material-icons" onClick={() => setPopup(true)}>chat_bubble_outline</i>
                        </div>
                    </div>
                </div>
            </main>
            <Popup trigger={popUp} setTrigger={setPopup}/>
            <nav className="navigation-space">
                <Link to="/" className="nav-link">
                    <i className="material-icons nav-icon">home</i>
                </Link>
                <Link to="/settings" className="nav-link">
                    <i className="material-icons nav-icon">settings</i>
                </Link>
            </nav>
            <footer>
                <div className="footer-container">
                    <p>&copy; 2024 Infinity. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}