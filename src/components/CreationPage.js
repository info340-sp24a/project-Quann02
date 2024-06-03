import React, { useState } from 'react';
import '../specific-css/creationpage.css';
import { Link } from 'react-router-dom';


function ImageUploader() {
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');
    const [imageTitle, setImageTitle] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClickImageArea = () => {
        document.getElementById('fileInput').click();
    };
    const handleTitleChange = (event) => {
        setImageTitle(event.target.value);
    };

    

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
            <div className = "container text-center">
                <main className="main-space container">
                    <h2 className="page-title">Upload Image</h2>
                    <div className="upload-icon-wrapper">
                        <div className="PreviewImage" onClick={handleClickImageArea}>
                            {imagePreviewUrl ? (
                                <img src={imagePreviewUrl} alt="Uploaded Preview" className="img-fluid" />
                            ) : (
                                <img src="./imgs/image.jpeg" alt="Upload Icon" className="img-fluid" />
                            )}
                        </div>
                    </div>
                    <textarea
                        className="form-control mb-3" placeholder="Image Title" onChange={handleTitleChange}>
                    </textarea>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        id="fileInput"
                    />
                    <button className="btn btn-primary py-3" disabled={!imageTitle}>Upload Image</button>
                </main>
            </div>
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

export default ImageUploader;