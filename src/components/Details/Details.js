import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import * as bookService from '..//../services/bookService';
import * as likeService from '..//../services/likeService';
import { useAuthContext } from "../../contexts/AuthContext";
import { useNotificationContext, notificationTypes } from "../../contexts/NotificationContext";
import ConfirmDialog from "../../Common/ConfirmDialog/ConfirmDialog";
import useBookState from "../../hooks/useBookState";


const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const { bookId } = useParams();
    const [book, setBook] = useBookState(bookId);
    const [showDelDialog, setShowDelDialog] = useState(false);

    useEffect(() =>{
        likeService.getCount(bookId)
            .then(likeCount => {
                setBook(state => ({...state, likes: likeCount}))
            })
    }, []);

    const deleteHandler = (e) => {
        e.preventDefault();
        bookService.deleteBook(bookId, user.accessToken)
            .then(() => {
                navigate('/my-books');
            })
            .finally(() => {
                setShowDelDialog(false);
            });
    }

    const deleteClickHandler = (e) => {
        e.preventDefault();
        setShowDelDialog(true);

    }

    const likeBtnClick = () => {
        likeService.like(user._id, bookId)
            .then(() => {
                setBook(state => ({...state, likes: state.likes + 1}));
                addNotification('Successfully liked', notificationTypes.success);
            });
    }

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${bookId}`}>Edit</Link>
            <a className="button" href="#" onClick={deleteClickHandler}>Delete</a>
        </>
    );

    const guestButtons = (<button className="button" onClick={likeBtnClick}>Like</button>);

    return (
        <>
            <ConfirmDialog show={showDelDialog} onClose={() => setShowDelDialog(false)} onSave={deleteHandler} />
            <section id="details-page">
                <div>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <p>{book.genre}</p>
                    <p>{book.year}</p>
                    <p className="img"><img src={book.imageUrl} alt="" /></p>
                    <div className="actions">
                        {user._id && (user._id === book._ownerId
                            ? ownerButtons
                            : guestButtons
                        )}


                        <div className="likes">
                            <img className="hearts" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/red-heart_2764-fe0f.png" alt="heart" />
                            <span id="total-likes">Likes: {book.likes}</span>
                        </div>

                    </div>
                </div>
                <div className="pet-description">
                    <h3>Description:</h3>
                    <p>{book.description}</p>
                    <p>You can find this book here: {book.recommendedUrl}</p>

                </div>
            </section>
        </>

    );
}

export default Details;