import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as bookService from '..//../services/bookService';
import { useAuthContext } from '../../contexts/AuthContext';
import { genres } from '../../Common/genres';
import { useNotificationContext, notificationTypes } from '../../contexts/NotificationContext';
import { Button, Form } from 'react-bootstrap';

const CreateBook = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const { addNotification } = useNotificationContext();

    const [titleErrors, setTitleErrors] = useState({title: false});
    const [authorErrors, setAuthorErrors] = useState({title: false});
    const [yearErrors, setYearErrors] = useState({title: false});
    const [descriptionErrors, setDescriptionErrors] = useState({title: false});
    const [imageUrlErrors, setImageUrlErrors] = useState({title: false});

    const onBookCreate = (e) => {
        e.preventDefault();
        const { title, author, year, description, imageUrl, recommendedUrl, genre } = Object.fromEntries(new FormData(e.currentTarget));

        if (!title || !author || !year || !description || !imageUrl) {
            addNotification('The book must have title, author, year, description and image. Please check your details and try again.', notificationTypes.error);
            return;
        }

        if (isNaN(Number(year))) {
            console.log("🧚 ~ year", year)
            addNotification('Year should be a number', notificationTypes.error);
            return;
        }

        if (!imageUrl.startsWith('https://')) {
            console.log("🧚 ~ imageUrl", imageUrl)
            addNotification('Image link should be a valid URL', notificationTypes.error);
            return;
        }

        bookService.create({
            title,
            author,
            year,
            description,
            imageUrl,
            recommendedUrl,
            genre
        }, user.accessToken)
            .then(() => {
                navigate('/dashboard');
            });

    }

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
            return;
        } else if (!Number(currInput)) {
            setYearErrors(state => ({ ...state, title: 'Year should be a number' }));
            return;
        } else {
            setYearErrors(state => ({ ...state, title: false }));
        }
    };

    const descriptionChangeHandler = (e) => {
        let currInput = e.target.value;
        if (currInput.length === 0) {
            setDescriptionErrors(state => ({ ...state, title: 'You have to fill in this field' }));
            return;
        } else {
            setDescriptionErrors(state => ({ ...state, title: false }));
        }
    };

    const imageUrlChangeHandler = (e) => {
        let currInput = e.target.value;
        if (currInput.length === 0) {
            setImageUrlErrors(state => ({ ...state, title: 'You have to fill in this field' }));
            return;
        } else if (!currInput.startsWith('https://')) {
            setImageUrlErrors(state => ({ ...state, title: 'Image link should be a valid URL' }));
            return;
        } else {
            setImageUrlErrors(state => ({ ...state, title: false }));
        }
    };

    return (
        <Form className='form-wrapper' onSubmit={onBookCreate} method="POST">
            <h2>Create new Book</h2>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="Title" onBlur={titleChangeHandler}/>
                <Form.Text style={{ borderColor: titleErrors.title ? 'red' : 'inherit' }}>
                    {titleErrors.title}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" name="author" placeholder="Author" onBlur={authorChangeHandler}/>
                <Form.Text style={{ borderColor: authorErrors.title ? 'red' : 'inherit' }}>
                    {authorErrors.title}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="year">
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" name="year" placeholder="Year" onBlur={yearChangeHandler}/>
                <Form.Text style={{ borderColor: yearErrors.title ? 'red' : 'inherit' }}>
                    {yearErrors.title}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" name="description" placeholder="Description" onBlur={descriptionChangeHandler}/>
                <Form.Text style={{ borderColor: descriptionErrors.title ? 'red' : 'inherit' }}>
                    {descriptionErrors.title}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" name="imageUrl" placeholder="Image" onBlur={imageUrlChangeHandler}/>
                <Form.Text style={{ borderColor: imageUrlErrors.title ? 'red' : 'inherit' }}>
                    {imageUrlErrors.title}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="recommendedUrl">
                <Form.Label>Where to find</Form.Label>
                <Form.Control type="text" name="recommendedUrl" placeholder="Website link" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="genre">
                <Form.Label>Genre</Form.Label>
                <Form.Select name="genre">
                        {genres.map(g => <option key={g.value} value={g.value}>{g.text}</option>)}
                </Form.Select>

            </Form.Group>

            <Button variant="primary" type="submit">
                Create Book
            </Button>
        </Form>
    );
}

export default CreateBook;