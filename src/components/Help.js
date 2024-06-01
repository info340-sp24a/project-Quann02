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
                        <i class="material-icons">person</i>
                        <h2>Account Settings</h2>
                        <p>Learn how to manage your account settings, including updating your profile, changing your password, and configuring privacy settings.</p>
                    </div>
                    <div class="help-topic">
                        <i class="material-icons">notifications</i>
                        <h2>Notifications</h2>
                        <p>Find out how to manage your notifications to stay updated with what's happening without getting overwhelmed.</p>
                    </div>
                    <div class="help-topic">
                        <i class="material-icons">security</i>
                        <h2>Security</h2>
                        <p>Get tips on how to keep your account secure, including setting up two-factor authentication and recognizing phishing attempts.</p>
                    </div>
                    <div class="help-topic">
                        <i class="material-icons">privacy_tip</i>
                        <h2>Privacy</h2>
                        <p>Understand our privacy policies and learn how to control who sees your information and posts.</p>
                    </div>
                    <div class="help-topic">
                        <i class="material-icons">help</i>
                        <h2>Getting Started</h2>
                        <p>New to Infinity Arts? Here’s a quick guide to help you get started with creating, sharing, and connecting with others.</p>
                    </div>
                    <div class="help-topic">
                        <i class="material-icons">contact_support</i>
                        <h2>Contact Support</h2>
                        <p>If you have any other questions or need further assistance, contact our support team for help.</p>
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