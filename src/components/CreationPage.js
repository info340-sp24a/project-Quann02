import React, { useState } from 'react';
import '../specific-css/creationpage.css';
import { Link, useNavigate } from 'react-router-dom';
import {getStorage, ref as storageRef, uploadBytes, getDownloadURL} from 'firebase/storage';
import { getDatabase, ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid'; //https://www.npmjs.com/package/uuid


function ImageUploader(props) {
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');
    const [imageTitle, setImageTitle] = useState('');
    const [imageFile, setImageFile] = useState(undefined);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const File = event.target.files[0];
        setImageFile(File);
        setImagePreviewUrl(URL.createObjectURL(File));
    };
    

    const handleClickImageArea = () => {
        document.getElementById('fileInput').click();
    };

    const handleTitleChange = (event) => {
        setImageTitle(event.target.value);
    }
    
    const handleImageUpload = async(event) => {
        console.log("uploading", imageFile);
        const storage = getStorage();
        const uniqueImageId = uuidv4(); //give it a unqiue identifier, don't remove this
        const imageRef = storageRef(storage, 'images/' + uniqueImageId);
        // const imageRef = storageRef(storage, 'images/' + imageFile.getDownloadURL);
        await uploadBytes(imageRef, imageFile)
        const imageUrl = await getDownloadURL(imageRef); //don't change
        console.log(imageUrl);

        const db = getDatabase();
        const dbRef = ref(db, 'images/' + uniqueImageId) //remove image.File to uniqueImage, don't change
        // const dbRef = ref(db, 'images/' + imageFile.getDownloadURL)
        await set (dbRef,{
            title:imageTitle, url: imageUrl
        });
        navigate('/');
    }

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
            <div className="container text-center">
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
                        type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} id="fileInput"
                    />
                    <button className="btn btn-primary py-3" onClick={handleImageUpload} disabled={!imageTitle}>Upload Image</button>
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
