import { useParams } from 'react-router';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

import * as bookService from '../../services/bookService';
import useBookState from '../../hooks/useBookState';
import { genres } from '../../Common/genres';
import { useNotificationContext, notificationTypes } from '../../contexts/NotificationContext';



const Edit = () => {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [book, setBook] = useBookState(bookId);
    const { addNotification } = useNotificationContext();
    
    const [titleErrors, setTitleErrors] = useState({title: false});
    const [authorErrors, setAuthorErrors] = useState({title: false});
    const [yearErrors, setYearErrors] = useState({title: false});
    const [descriptionErrors, setDescriptionErrors] = useState({title: false});
    const [imageUrlErrors, setImageUrlErrors] = useState({title: false});


    const bookEditsubmitHandler = (e) => {
        e.preventDefault();
        const bookData = Object.fromEntries(new FormData(e.currentTarget));

        if (!bookData.title || !bookData.author || !bookData.year || !bookData.description || !bookData.imageUrl) {
            addNotification('The book must have title, author, year, description and image. Please check your details and try again.', notificationTypes.error);
            return;
        }

        if (isNaN(Number(bookData.year))) {
            console.log("🧚 ~ year", bookData.year)
            addNotification('Year should be a number', notificationTypes.error);
            return;
        }

        if (!bookData.imageUrl.startsWith('https://')) {
            console.log("🧚 ~ imageUrl", bookData.imageUrl)
            addNotification('Image link should be a valid URL', notificationTypes.error);
            return;
        }

        bookService.update(bookId, bookData)
            .then(() => {
                addNotification('Your book has been updated', notificationTypes.success);
                navigate(`/details/${bookId}`);
            })
            .catch(err => {
                console.log("🧚 ~ Editerr", err);
                addNotification('Unfortunately, we could not edit your book. Please check your details and try again.', notificationTypes.error);
            });


    }

    //can create separate js file (EditHelpers) to move validation and other functions there
    //example of validation 
    //need to fix delay in changing border color
    const titleChangeHandler = (e) => {
        let currInput = e.target.value;
        if (currInput.length === 0) {
            setTitleErrors(state => ({ ...state, title: 'You have to fill in this field' }));
        } else {
            setTitleErrors(state => ({ ...state, title: false }));
        }
    };

    const authorChangeHandler = (e) => {
        let currInput = e.target.value;
        if (currInput.length === 0) {
            setAuthorErrors(state => ({ ...state, title: 'You have to fill in this field' }));
        } else {
            setAuthorErrors(state => ({ ...state, title: false }));
        }
    };

    const yearChangeHandler = (e) => {
        let currInput = e.target.value;
        if (currInput.length === 0) {
            setYearErrors(state => ({ ...state, title: 'You have to fill in this field' }));
        } else if (!Number(currInput)) {
            setYearErrors(state => ({ ...state, title: 'Year should be a number' }));
        } else {
            setYearErrors(state => ({ ...state, title: false }));
        }
    };

    const descriptionChangeHandler = (e) => {
        let currInput = e.target.value;
        if (currInput.length === 0) {
            setDescriptionErrors(state => ({ ...state, title: 'You have to fill in this field' }));
        } else {
            setDescriptionErrors(state => ({ ...state, title: false }));
        }
    };

    const imageUrlChangeHandler = (e) => {
        let currInput = e.target.value;
        if (currInput.length === 0) {
            setImageUrlErrors(state => ({ ...state, title: 'You have to fill in this field' }));
        } else if (!currInput.startsWith('https://')) {
            setImageUrlErrors(state => ({ ...state, title: 'Image link should be a valid URL' }));
        } else {
            setImageUrlErrors(state => ({ ...state, title: false }));
        }
    };


    return (
        <Form className='form-wrapper' method="POST" onSubmit={bookEditsubmitHandler}>
            <h2>Edit Book</h2>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" defaultValue={book.title} onBlur={titleChangeHandler} />
                <Form.Text style={{ borderColor: titleErrors.title ? 'red' : 'inherit' }}>
                    {titleErrors.title}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" name="author" defaultValue={book.author} onBlur={authorChangeHandler} />
                <Form.Text style={{ borderColor: authorErrors.title ? 'red' : 'inherit' }}>
                    {authorErrors.title}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="year">
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" name="year" defaultValue={book.year} onBlur={yearChangeHandler} />
                <Form.Text style={{ borderColor: yearErrors.title ? 'red' : 'inherit' }}>
                    {yearErrors.title}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" name="description" defaultValue={book.description} onBlur={descriptionChangeHandler} />
                <Form.Text style={{ borderColor: descriptionErrors.title ? 'red' : 'inherit' }}>
                    {descriptionErrors.title}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" name="imageUrl" defaultValue={book.imageUrl} onBlur={imageUrlChangeHandler} />
                <Form.Text style={{ borderColor: imageUrlErrors.title ? 'red' : 'inherit' }}>
                    {imageUrlErrors.title}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="recommendedUrl">
                <Form.Label>Where to find</Form.Label>
                <Form.Control type="text" name="recommendedUrl" defaultValue={book.recommendedUrl} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="genre">
                <Form.Label>Genre</Form.Label>
                <Form.Select name="genre" value={book.genre} onChange={(e) => setBook(state => ({ ...state, genre: e.target.value }))}>
                    {genres.map(g => <option key={g.value} value={g.value}>{g.text}</option>)}
                </Form.Select>

            </Form.Group>

            <Button variant="primary" type="submit">
                Submit changes
            </Button>
        </Form>
    );

}

export default Edit;