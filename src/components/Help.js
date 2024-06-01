import { Link } from 'react-router-dom';
import '../specific-css/help.css';

export function Help(props) {
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
            <main class="main-space container">
                <h1 class="page-title">Help & Support</h1>
                <div class="help-section">
                    <div class="help-topic">
                        <i class="material-icons">security</i>
                        <h2>Security Tips</h2>
                        <p>When downloading images from external sources, make sure that there is no embedded malware by checking HTTPS protocol.</p>
                    </div>
                    <div class="help-topic">
                        <i class="material-icons">privacy_tip</i>
                        <h2>Privacy Tips</h2>
                        <p>When uploading personal pictures, make sure there is no personal identifiable information attached.</p>
                    </div>
                    <div class="help-topic">
                        <i class="material-icons">help</i>
                        <h2>Getting Started</h2>
                        <p>New to Infinity Arts? Click on Upload Images to upload pictures to your gallery. Each image can be given a description through the comment icon.</p>
                    </div>
                </div>
            </main>
            <nav className="navigation-space">
                <Link to="/" className="nav-link">
                    <i className="material-icons nav-icon">home</i>
                </Link>
                <Link to="/settings" className="nav-link">
                    <i className="material-icons nav-icon">settings</i>
                </Link>
            </nav>
            <footer>
                <div class="footer-container">
                    <p>&copy; 2024 Infinity. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}