export function Settings(props) {
    return (
        <body>
            <header className="header-space">
                <img className="app-logo" src="../imgs/logo.png" alt="logo" />
                <h1 className="webpage-title">Infinity</h1>
                <nav className="header-nav">
                    <a href="../index.html">Home</a>
                    <a href="./setting.html">Settings</a>
                </nav>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Button for dropdown"></button>
                    <div className="content">
                        <a href="../index.html">Home</a>
                        <a href="./setting.html">Settings</a>
                    </div>
                </div>
            </header>
            <main className="main-space container">
                <h2 className="page-title">Account Settings</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div className="col">
                        <a href="./creationpage/creationpage.html" style="text-decoration: none; color: inherit;">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <i className="material-icons" title="Upload and manage your images">image</i>
                                    <h5 className="card-title">Upload Image</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="./privacy/privacy.html" style="text-decoration: none; color: inherit;">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <i className="material-icons" title="Customize your privacy settings">privacy_tip</i>
                                    <h5 className="card-title">Privacy Settings</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="./help/help.html" style="text-decoration: none; color: inherit;">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <i className="material-icons" title="Get help now">help</i>
                                    <h5 className="card-title">Get Help</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </main>
            <nav className="navigation-space">
                <a href="../index.html" className="nav-link">
                    <i className="material-icons nav-icon">home</i>
                </a>
                <a href="./setting.html" className="nav-link">
                    <i className="material-icons nav-icon">settings</i>
                </a>
            </nav>
            <footer>
                <div className="footer-container">
                    <p>&copy; 2024 Infinity. All rights reserved.</p>
                </div>
            </footer>
        </body>
    );
}