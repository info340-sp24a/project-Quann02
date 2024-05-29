import React, { useState } from 'react';
import '../specific-css/creationpage.css';

function ImageUploader() {
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');

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

    return (
        <div className="container text-center">
            <header className="header-space">
                <img className="app-logo" src="./imgs/logo.png" alt="logo-image"></img>
                <h1 className="webpage-title">Infinity</h1>
                <nav className="header-nav">
                    <a href="./index.html">Home</a>
                    <a href="./setting/setting.html">Settings</a>
                </nav>
            </header>
            <main className="main-space container">
                <h2 className="page-title">Upload Image</h2>
                <div className="upload-icon-wrapper">
                    <div className="PreviewImage" onClick={handleClickImageArea}>
                        {imagePreviewUrl ? (
                            <img src={imagePreviewUrl} alt="Uploaded Preview" className="img-fluid" />
                        ) : (
                            <img src="./imgs/profile-1.jpg" alt="Upload Icon" className="img-fluid" />
                        )}
                    </div>
                </div>
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                    id="fileInput"
                />
                <button className="btn btn-primary py-3">Upload Your Artwork</button>
            </main>
            <footer>
                <div className="footer-container">
                    <p>&copy; 2024 Infinity. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default ImageUploader;
