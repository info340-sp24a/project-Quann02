export function Homepage(props) {
    return (
        <body>
            <header class="header-space">
                <img class="app-logo" src="./imgs/logo.png" alt="logo-image" />
                <h1 class="webpage-title">Infinity</h1>
                <nav class="header-nav">
                    <a href="./index.html">Home</a>
                    <a href="./setting/setting.html">Settings</a>
                </nav>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Button for dropdown"></button>
                    <div class="content">
                        <a href="./index.html">Home</a>
                        <a href="./setting/setting.html">Settings</a>
                    </div>
                </div>
            </header>
            <main>
                <h2 class="main-title">Personal Gallery</h2>
                <div class="search-bar">
                    <input type="text" class="form-control" placeholder="Search for artworks..." />
                </div>
                <div class="art-gallery">
                    <div class="art-card">
                        <img src="./imgs/Firefly Create me a pokemon character art 50375.jpg" alt="Artwork 1" />
                        <div class="art-card-title">Artwork 1</div>
                        <div class="art-card-actions">
                            <i class="material-icons">favorite_border</i>
                            <i class="material-icons">chat_bubble_outline</i>
                            <i class="material-icons">share</i>
                        </div>
                    </div>
                    <div class="art-card">
                        <img src="./imgs/Firefly Create me a pokemon character art 82874.jpg" alt="Artwork 2" />
                        <div class="art-card-title">Artwork 2</div>
                        <div class="art-card-actions">
                            <i class="material-icons">favorite_border</i>
                            <i class="material-icons">chat_bubble_outline</i>
                            <i class="material-icons">share</i>
                        </div>
                    </div>
                    <div class="art-card">
                        <img src="./imgs/Firefly Create me a pokemon character art 83189.jpg" alt="Artwork 3" />
                        <div class="art-card-title">Artwork 3</div>
                        <div class="art-card-actions">
                            <i class="material-icons">favorite_border</i>
                            <i class="material-icons">chat_bubble_outline</i>
                            <i class="material-icons">share</i>
                        </div>
                    </div>
                    <div class="art-card">
                        <img src="./imgs/Firefly Create me a pokemon character art 9152.jpg" alt="Artwork 4" />
                        <div class="art-card-title">Artwork 4</div>
                        <div class="art-card-actions">
                            <i class="material-icons">favorite_border</i>
                            <i class="material-icons">chat_bubble_outline</i>
                            <i class="material-icons">share</i>
                        </div>
                    </div>
                </div>
            </main>
            <nav class="navigation-space">
                <a href="./index.html" class="nav-link">
                    <i class="material-icons nav-icon">home</i>
                </a>
                <a href="./setting/setting.html" class="nav-link">
                    <i class="material-icons nav-icon">settings</i>
                </a>
            </nav>
            <footer>
                <div class="footer-container">
                    <p>&copy; 2024 Infinity. All rights reserved.</p>
                </div>
            </footer>
        </body>
    );
}