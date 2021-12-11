import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as bookService from '..//../services/bookService';
import { AuthContext } from "../../contexts/AuthContext";

const Details = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [book, setBook] = useState({});
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
        // throw alert("Are you sure you want to delete the book?");
        bookService.deleteBook(bookId, user.accessToken)
            .then(() => {
                navigate('/my-books');
            });
    }

    const editHandler = () => {

    }

    const ownerButtons = (
        <>
            <Link className="button" to="edit">Edit</Link>
            <a className="button" href="#" onClick={deleteHandler}>Delete</a>
        </>
    );

    const guestButtons = (<a className="button" href="#">Like</a>);

    return (
        <section id="details-page">
            <div>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.genre}</p>
                <p>{book.year}</p>
                <p className="img"><img src={book.imageUrl} /></p>
                <div className="actions">
                    {user._id && (user._id === book._ownerId
                        ? ownerButtons
                        : guestButtons
                    )}


                    <div className="likes">
                        <img className="hearts" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/red-heart_2764-fe0f.png" />
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
    );
}

export default Details;