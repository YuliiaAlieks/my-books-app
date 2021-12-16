

// const fetch = require('node-fetch');

const mockData = [
    {
        "title": "Gone with the Wind",
        "author": "Margaret Mitchell",
        "year": "1936",
        "description": "Gone with the Wind is a novel by American writer Margaret Mitchell, first published in 1936. The story is set in Clayton County and Atlanta, both in Georgia, during the American Civil War and Reconstruction Era. It depicts the struggles of young Scarlett O'Hara, the spoiled daughter of a well-to-do plantation owner, who must use every means at her disposal to claw her way out of poverty following Sherman's destructive 'March to the Sea'. This historical novel features a coming-of-age story, with the title taken from the poem “Non Sum Qualis eram Bonae Sub Regno Cynarae”, written by Ernest Dowson",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51pZagJtHdL._SX308_BO1,204,203,200_.jpg",
        "genre": "historical fiction",
        "recommendedUrl": "https://www.amazon.com/Gone-Wind-Margaret-Mitchell/dp/1416548947",
        "likes": []
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "year": "1932",
        "description": "Though Brave New World is less famous than George Orwell’s 1984, it arguably presents a world that more closely resembles our own: a world of easy sex, readily available and mood-altering pharmaceuticals, information overload, and mass production.  Juxtaposing Orwell’s and Huxley’s dystopias, the critic Neil Postman commented: “What Orwell feared were those who would ban books. What Huxley feared was that there would be no reason to ban a book, for there would be no one who wanted to read one. . . . Orwell feared that the truth would be concealed from us. Huxley feared the truth would be drowned in a sea of irrelevance.",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/81zE42gT3xL.jpg",
        "genre": "science fiction",
        "recommendedUrl": "https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523",
        "likes": []
    },
    {
        "title": "Jane Eyre",
        "author": "Charlotte Bronte",
        "year": "1847",
        "description": "Jane Eyre is a Bildungsroman which follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall.\r\n\r\nThe novel revolutionized prose fiction by being the first to focus on its protagonist's moral and spiritual development through an intimate first-person narrative, where actions and events are coloured by a psychological intensity. Charlotte Brontë has been called the \"first historian of the private consciousness\", and the literary ancestor of writers like Proust and Joyce.\r\n\r\nThe book contains elements of social criticism with a strong sense of Christian morality at its core, and it is considered by many to be ahead of its time because of Jane's individualistic character and how the novel approaches the topics of class, sexuality, religion, and feminism. It, along with Jane Austen's Pride and Prejudice, is one of the most famous romance novels of all time.",
        "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1403/9780140366785.jpg",
        "recommendedUrl": "https://www.publicbookshelf.com/romance/jane-eyre/",
        "genre": "romance",
        "likes": []
    },
    {
        "title": "Rule #1: The Simple Strategy for Successful Investing in Only 15 Minutes a Week!",
        "author": "Phil Town",
        "year": "2005",
        "description": "In this updated edition to the #1 national bestseller, you’ll learn more of Phil’s fresh, think-outside-the-box rules, including:\r\n• Don’t diversify \r\n• Only buy a stock when it’s on sale \r\n• Think long term—but act short term to maximize your return \r\n• And most of all, beat the big investors at their own game by using the tools designed for them! \r\n \r\nAs Phil demonstrates in these pages, giant mutual funds can’t help but regress to the mean—and as we’ve all learned in recent years, that mean could be very disappointing indeed. Fortunately, Rule #1 takes readers step-by-step through a do-it-yourself process, equipping even the biggest investing-phobes with the tools they need to make quantum leaps toward financial security—regardless of where the market is headed.",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/519zNmQTDqL._SX334_BO1,204,203,200_.jpg",
        "recommendedUrl": "https://www.amazon.com/Rule-Strategy-Successful-Investing-Minutes/dp/0307336840",
        "genre": "other",
        "likes": []
    }
]

// const baseUrl = 'http://localhost:3030/data';

// const postBook = async (bookData) => {

//     const response = await fetch(`${baseUrl}/books`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify(bookData)
//     });

//     const result = await response.json();
//     return result;
// }

// mockData.forEach(data => {
//     postBook(data);
// });