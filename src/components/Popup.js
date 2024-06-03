import React from 'react';
import '../specific-css/popup.css';
import { useState } from 'react';
// import { getDatabase, ref,  set as firebaseSet, push as firebasePush  } from 'firebase/database';

/*Citations
https://www.youtube.com/watch?v=i8fAO_zyFAM
https://www.geeksforgeeks.org/react-onchange-event/
*/

/*Don't need this anymore */


export function Popup(props) {
    const [comment, setComment] = useState("");    

    // {image: 
    //     img:
    //     title:
    //     comment:
    //         [i like instanceof, i don't, etc]
    // }
    // function submitCommentDB() {
    //     const db = getDatabase();
    //     const imgRef = ref(db,/*reference place for image*/); /*Gets reference to image which should contain image */

    //     firebasePush(imgRef, /*reference to comment? */) /*Push comment or firebaseSet to rewrite description */
    //     .then(() =>{
    //         setComment('');
    //         props.setTrigger(false);

    //     })
    //     .catch(err => console.log(err))
    // }


    if (props.trigger) {
        return (
            <div className="popup-container">
                <div className="popup-content">
                    <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
                    <form>
                        <label>Comment</label>
                        <textarea type="text"
                         className="commentBox"
                         name="comment"
                         onChange={(comment) => setComment(comment.target.value)}
                        />
                    </form>
                    <button className='submit' name="submitComment"onClick={() => props.setTrigger(false)} disabled={comment.length === 0}>Submit</button> 
                    {/*for button, onClick={submitCommentDB} */}
                </div>
            </div>
        );
    } else {
        return "";
    }
}


