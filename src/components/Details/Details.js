import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import * as bookService from '..//../services/bookService';
import { useAuthContext } from "../../contexts/AuthContext";
import ConfirmDialog from "../../Common/ConfirmDialog/ConfirmDialog";


const Details = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const [book, setBook] = useState({});
    const [showDelDialog, setShowDelDialog] = useState(false);
    const { bookId } = useParams();

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                console.log("🧚 ~ details result", result)
                setBook(result);
            });

    }, [bookId]);

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

    // const likeBtnClick = () => {
    //     console.log('clicked on Like');
    //     if(book.likes.includes(user._id)) {
    //         //add notification
    //         console.log('User already liked it');
    //         return;
    //     }

    //     const likes = [...book.likes, user._id];
    //     const likedBook = {...book, likes};

    //     bookService.like(bookId, likedBook, user.accessToken)
    //         .then(resLikes => {
    //         console.log("🧚 ~ resLikes", resLikes);
    //             setBook(state => ({
    //                 ...state,
    //                 likes
    //             }));
    //         })
    // }

    const ownerButtons = (
        <>
            <Link className="button" to="/edit">Edit</Link>
            <a className="button" href="#" onClick={deleteClickHandler}>Delete</a>
        </>
    );

    const guestButtons = (<button className="button" >Like</button>);

    return (
        <>
            <ConfirmDialog show={showDelDialog} onClose={() => setShowDelDialog(false)} onSave={deleteHandler}/>
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
                            <span id="total-likes">Likes: {book.likes?.length}</span>
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