import BookInListDisplay from "./BookInListDisplay";

const BookList = ({ books }) => {

    return (
        <>
            {books.length > 0
                ? (
                    <ul className="books-list">
                        {books.map(b => <BookInListDisplay key={b._id} book={b} />)}

                    </ul>
                )
                : <p className="message">Opps! No books are found :(</p>
            }
        </>
    );
}

export default BookList;