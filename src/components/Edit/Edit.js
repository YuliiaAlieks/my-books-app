import { useState, useEffect } from 'react';

import * as bookService from '../../services/bookService';


const Edit = () => {
    const [book, setBook] = useState({});
    useEffect(() => {

    }, []);

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
                    <input className="button" type="submit" value="Edit Book" />
                </fieldset>
            </form>
        </section>
    );

}

export default Edit;