import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as bookService from '..//../services/bookService';
import { AuthContext } from '../../contexts/AuthContext';


const CreateBook = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onBookCreate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get('title');
        const author = formData.get('author');
        const year = formData.get('year');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const recommendedUrl = formData.get('recommendedUrl');
        const genre = formData.get('genre');

        bookService.create({
            title,
            author,
            year,
            description,
            imageUrl,
            recommendedUrl,
            genre
        }, user.accessToken)
            .then(result => {
                navigate('/dashboard');
            });

    }

    return (
        <section id="create-book">
            <form id="create-form" onSubmit={onBookCreate} method="POST">
                <fieldset>
                    <legend>Create new Book</legend>
                    <p>
                        <label htmlFor="title">Title</label>
                        <span>
                            <input type="text" name="title" id="title" placeholder="Title" />
                        </span>
                    </p>
                    <p>
                        <label htmlFor="author">Author</label>
                        <span>
                            <input type="text" name="author" id="author" placeholder="Author" />
                        </span>
                    </p>
                    <p>
                        <label htmlFor="year">Year</label>
                        <span>
                            <input type="text" name="year" id="year" placeholder="Year" />
                        </span>
                    </p>
                    <p>
                        <label htmlFor="description">Description</label>
                        <span>
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p>
                        <label htmlFor="image">Image</label>
                        <span>
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <p>
                        <label htmlFor="recommendedUrl">Where to find</label>
                        <span>
                            <input type="text" name="recommendedUrl" id="recommendedUrl" placeholder="Website link" />
                        </span>
                    </p>
                    <p>
                        <label htmlFor="genre">Genre</label>
                        <span>
                            <select id="genre" name="genre">
                                <option value="science-fiction">science fiction</option>
                                <option value="historical-fiction">historical fiction</option>
                                <option value="romance">romance</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button" type="submit" value="Create Book" />
                </fieldset>
            </form>
        </section>
    );
}

export default CreateBook;