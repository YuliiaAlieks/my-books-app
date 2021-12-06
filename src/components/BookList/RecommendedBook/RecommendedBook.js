const RecommendedBook = ({book}) => {

    return (
        <li>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p className="img"><img src={book.imageUrl} /></p>
            <a className="button" href="#">Details</a>
        </li>
    );

}

export default RecommendedBook;