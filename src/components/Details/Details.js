import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as bookService from '..//../services/bookService';
import * as likeService from '..//../services/likeService';
import { useAuthContext } from "../../contexts/AuthContext";
import { useNotificationContext, notificationTypes } from "../../contexts/NotificationContext";
import ConfirmDialog from "../../Common/ConfirmDialog/ConfirmDialog";
import useBookState from "../../hooks/useBookState";
import './Details.css';
import { Loader } from "../../Common/Loader/Loader";


const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const { bookId } = useParams();
    const [book, setBook] = useBookState(bookId);
    const [showDelDialog, setShowDelDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        likeService.getBookLikes(bookId)
            .then(likes => {
                console.log("🧚 ~ likes", likes)
                setBook(state => ({ ...state, likes }));
                setIsLoading(false);
            })
            .catch(err => {
                console.log("🧚 ~ likesResultErr", err);
                setIsLoading(false);
            })
    }, [bookId, setBook]);

    if (isLoading) {
        return <Loader />;
    }

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
        console.log("🧚 ~ user._id", user._id)
        if (user._id === book._ownerId) {

            return;
        }

        if (book.likes.includes(user._id)) {
            
            addNotification('You have already liked this book', notificationTypes.warn);
            return;
        }

        likeService.like(user._id, bookId)
            .then(() => {
                setBook(state => ({ ...state, likes: [...state.likes, user._id] }));
                addNotification('Successfully liked', notificationTypes.success);
            })
            .catch(err => {
                console.log("🧚 ~ err", err);
            });
    }

    const editBtnClickHandler = () => {
        navigate(`/edit/${bookId}`);
    }

    const ownerButtons = (
        <>
            <button className="button" onClick={editBtnClickHandler}>Edit</button>
            <button className="button" onClick={deleteClickHandler}>Delete</button>
        </>
    );

    const guestButtons = (<button className="button" onClick={likeBtnClick} style={{display: book.likes?.includes(user._id) ? 'none' : 'flex'}} disabled={book.likes?.includes(user._id)}>Like</button>);

    return (
        <>
            <ConfirmDialog show={showDelDialog} onClose={() => setShowDelDialog(false)} onSave={deleteHandler} />
            <section id="details-page" className="details">
                <div className="details-left">
                    <img className="details-img" src={book.imageUrl} alt="" />
                </div>
                <div className="details-right">
                    <h3>{book.title}</h3>
                    <h5>by {book.author}</h5>
                    <p>Genre: {book.genre}</p>
                    <p className="year">Year of publication: {book.year}</p>
                    <h3>Description:</h3>
                    <p className="oblique">{book.description}</p>
                    <p> 
                        <a href={book.recommendedUrl}>You can find this book here</a>
                    </p>
                    <div className="actions">
                        {user._id && (user._id === book._ownerId
                            ? ownerButtons
                            : guestButtons
                        )}

                        <div className="likes">
                            <img className="hearts" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/red-heart_2764-fe0f.png" alt="heart" />
                            <span id="total-likes">Likes: {book.likes.length}</span>
                            {book.likes?.includes(user._id)
                                ? <p>Thank you for liking the book!</p>
                                : <span></span>
                            }
                            
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Details;