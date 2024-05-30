export function Homepage(props) {
    return (
        <div>
            <header className="header-space">
                <img className="app-logo" src="./imgs/logo.png" alt="logo" />
                <h1 className="webpage-title">Infinity</h1>
                <nav className="header-nav">
                    <a href="./index.html">Home</a>
                    <a href="./setting/setting.html">Settings</a>
                </nav>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Button for dropdown"></button>
                    <div className="content">
                        <a href="./index.html">Home</a>
                        <a href="./setting/setting.html">Settings</a>
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
                            <i className="material-icons">chat_bubble_outline</i>
                        </div>
                    </div>
                    <div className="art-card">
                        <img src="./imgs/Firefly Create me a pokemon character art 82874.jpg" alt="Artwork 2" />
                        <div className="art-card-title">Artwork 2</div>
                        <div className="art-card-actions">
                            <i className="material-icons">chat_bubble_outline</i>
                        </div>
                    </div>
                    <div className="art-card">
                        <img src="./imgs/Firefly Create me a pokemon character art 83189.jpg" alt="Artwork 3" />
                        <div className="art-card-title">Artwork 3</div>
                        <div className="art-card-actions">
                            <i className="material-icons">chat_bubble_outline</i>
                        </div>
                    </div>
                    <div className="art-card">
                        <img src="./imgs/Firefly Create me a pokemon character art 9152.jpg" alt="Artwork 4" />
                        <div className="art-card-title">Artwork 4</div>
                        <div className="art-card-actions">
                            <i className="material-icons">chat_bubble_outline</i>
                        </div>
                    </div>
                </div>
            </main>
            <nav className="navigation-space">
                <a href="./index.html" className="nav-link">
                    <i className="material-icons nav-icon">home</i>
                </a>
                <a href="./setting/setting.html" className="nav-link">
                    <i className="material-icons nav-icon">settings</i>
                </a>
            </nav>
            <footer>
                <div className="footer-container">
                    <p>&copy; 2024 Infinity. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}