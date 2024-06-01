import React from 'react';
import '../specific-css/popup.css';
import { useState } from 'react';
/*Citations
https://www.youtube.com/watch?v=i8fAO_zyFAM
https://www.geeksforgeeks.org/react-onchange-event/
*/


export function Popup(props) {
    const [comment, setComment] = useState("");    

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
                </div>
            </div>
        );
    } else {
        return "";
    }
}


