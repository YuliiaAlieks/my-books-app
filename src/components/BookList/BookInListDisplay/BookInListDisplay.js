import { Link } from "react-router-dom";
import './BookInListDisplay.css';

const BookInListDisplay = ({ book }) => {
    return (
        <li className="book-li">
            <div className="book-header">
                <span className="title-header5">
                    <h5>{book.title}</h5>
                </span>
                <p>{book.author}</p>
                <p>{book.genre}</p>
            </div>

            <div className="book-img">
                <img src={book.imageUrl} alt={book.title} />
            </div>
            <div className="btn-div">
                <Link className="button" to={`/details/${book._id}`}>Details</Link>
            </div>
        </li>
    );
}

export default BookInListDisplay;