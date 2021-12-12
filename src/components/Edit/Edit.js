import { useParams } from 'react-router';

import * as bookService from '../../services/bookService';
import useBookState from '../../hooks/useBookState';

const genres = [
    {value: 'science-fiction', text: 'science fiction'},
    {value: 'historical-fiction', text: 'historical fiction'},
    {value: 'romance', text: 'romance'},
    {value: 'other', text: 'Other'},

];

const Edit = () => {
    const { bookId } = useParams();
    const [book, setBook] = useBookState(bookId);


    const bookEditsubmitHandler = (e) => {
        e.preventDefault();
        console.log('Edited');
    }


    return (
        <section id="edit-book">
            <form id="edit-form" method="POST" onSubmit={bookEditsubmitHandler}>
                <fieldset>
                    <legend>Edit</legend>
                    <p>
                        <label htmlFor="title">Title</label>
                        <span>
                            <input type="text" name="title" id="title" defaultValue={book.title} />
                        </span>
                    </p>
                    <p>
                        <label htmlFor="author">Author</label>
                        <span>
                            <input type="text" name="author" id="author" defaultValue={book.author} />
                        </span>
                    </p>
                    <p>
                        <label htmlFor="year">Year</label>
                        <span>
                            <input type="text" name="year" id="year" defaultValue={book.year} />
                        </span>
                    </p>
                    <p>
                        <label htmlFor="description">Description</label>
                        <span>
                            <textarea name="description" id="description" defaultValue={book.description}></textarea>
                        </span>
                    </p>
                    <p>
                        <label htmlFor="image">Image</label>
                        <span>
                            <input type="text" name="imageUrl" id="image" defaultValue={book.imageUrl} />
                        </span>
                    </p>
                    <p>
                        <label htmlFor="recommendedUrl">Where to find</label>
                        <span>
                            <input type="text" name="recommendedUrl" id="recommendedUrl" defaultValue={book.recommendedUrl} />
                        </span>
                    </p>
                    <p>
                        <label htmlFor="genre">Genre</label>
                        <span>
                            <select id="genre" name="genre" value={book.genre}>
                                {genres.map(g => <option key={g.value} value={g.value}>{g.text}</option>)}
                            </select>
                        </span>
                    </p>
                    <input className="button" type="submit" value="Edit Book" />
                </fieldset>
            </form>
        </section>
    );

}

export default Edit;