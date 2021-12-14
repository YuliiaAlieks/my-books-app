import { Link } from "react-router-dom";

const BookInListDisplay = ({book}) => {

    return (
        <li>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p className="img"><img src={book.imageUrl} alt=""/></p>
            <Link className="button" to={`/details/${book._id}`}>Details</Link>
        </li>
    );

}

export default BookInListDisplay;