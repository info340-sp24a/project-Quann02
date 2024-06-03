import React, { useState, useEffect } from 'react';
import '../specific-css/base.css';
import { Popup } from './Popup';
import { Link } from 'react-router-dom';
import { getDatabase, ref, onValue, update } from "firebase/database";

export function Homepage() {
    const [popUp, setPopup] = useState(false);
    const [images, setImages] = useState([]);
    const [newComments, setNewComments] = useState({}); // To store comments for each image separately

    useEffect(() => {
        const database = getDatabase();
        const imagesRef = ref(database, 'images');
        onValue(imagesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loadedImages = [];
                for (let id in data) {
                    loadedImages.push({ id, ...data[id] });
                }
                setImages(loadedImages);
            } else {
                console.error("No data available");
            }
        }, (error) => {
            console.error("Error fetching data: ", error);
        });
    }, []);

    const handleCommentChange = (event, imageId) => {
        setNewComments({
            ...newComments,
            [imageId]: event.target.value
        });
    };

    const handleAddComment = async (imageId) => {
        const db = getDatabase();
        const imageRef = ref(db, 'images/' + imageId);

        // Update the comments field in the database
        //reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        const updatedComments = images.find(image => image.id === imageId).comments || [];
        updatedComments.push(newComments[imageId]);

        await update(imageRef, {
            comments: updatedComments
        });

        // Clear the comment input field
        setNewComments({
            ...newComments,
            [imageId]: ''
        });
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
            <main>
                <h2 className="main-title">Personal Gallery</h2>
                <div className="search-bar">
                    <input id="prune" type="text" className="form-control" placeholder="Search" />
                    <button className="btn btn-search">search</button>
                </div>
                <div className="art-gallery">
                    {images.length > 0 ? images.map(image => (
                        <div key={image.id} className="art-card">
                            <img src={image.url} alt={image.title} />
                            <div className="art-card-title">{image.title}</div>
                            <div className="art-card-comments">
                                {image.comments && image.comments.length > 0 ? (
                                    image.comments.map((comment, index) => (
                                        <p key={index}>{comment}</p> //reference https://www.geeksforgeeks.org/reactjs-keys/
                                    ))
                                ) : (
                                    <p>No comments yet</p>
                                )}
                            </div>
                            <div className="art-card-actions">
                                <div className="comment-input-container">
                                    <input
                                        type="text"
                                        placeholder="Add a comment"
                                        className="comment-input"
                                        value={newComments[image.id] || ''}
                                        onChange={(e) => handleCommentChange(e, image.id)}
                                    />
                                    <button className="comment-btn" onClick={() => handleAddComment(image.id)}>Add Comment</button>
                                </div>
                            </div>
                        </div>
                    )) : <p>No images available</p>}
                </div>
            </main>
            {/* <Popup trigger={popUp} setTrigger={setPopup} /> */}
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