import '../specific-css/help.css';

export function Help(props) {
    return (
        <div>
            {/* <header class="header-space">
                <nav class="header-nav">
                    <a href="../setting.html" class="back-button" title="Go back">
                        <i class="material-icons">arrow_back</i>
                    </a>
                </nav>
            </header> */}
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
            <footer>
                <div class="footer-container">
                    <p>&copy; 2024 Infinity. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}