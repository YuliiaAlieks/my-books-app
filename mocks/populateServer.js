const fetch = require('node-fetch');

const accessToken = '9f903271f714eb39f21d622f20aeff8196276cd83b9fe98ec4a5170de9a3effe';

const mockData = [
    {
        "title": "The Adventures of Tom Sawyer",
        "author": "Mark Twain",
        "year": "1876",
        "description": "The Adventures of Tom Sawyer revolves around the youthful adventures of the novel's schoolboy protagonist, Thomas Sawyer, whose reputation precedes him for causing mischief and strife. Tom lives with his Aunt Polly, half-brother Sid, and cousin Mary in the quaint town of St. Petersburg, just off the shore of the Mississippi River. St. Petersburg is described as a typical small-town atmosphere where the Christian faith is predominant, the social network is close-knit, and familiarity resides.",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51JGDWc-gBL._SX363_BO1,204,203,200_.jpg",
        "genre": "Childrens",
        "recommendedUrl": "https://www.goodreads.com/book/show/24583.The_Adventures_of_Tom_Sawyer",
        "likes": []
    },
    {
        "title": "Gone with the Wind",
        "author": "Margaret Mitchell",
        "year": "1936",
        "description": "Gone with the Wind is a novel by American writer Margaret Mitchell, first published in 1936. The story is set in Clayton County and Atlanta, both in Georgia, during the American Civil War and Reconstruction Era. It depicts the struggles of young Scarlett O'Hara, the spoiled daughter of a well-to-do plantation owner, who must use every means at her disposal to claw her way out of poverty following Sherman's destructive 'March to the Sea'. This historical novel features a coming-of-age story, with the title taken from the poem “Non Sum Qualis eram Bonae Sub Regno Cynarae”, written by Ernest Dowson",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51pZagJtHdL._SX308_BO1,204,203,200_.jpg",
        "genre": "Historical fiction",
        "recommendedUrl": "https://www.amazon.com/Gone-Wind-Margaret-Mitchell/dp/1416548947",
        "likes": []
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "year": "1932",
        "description": "Though Brave New World is less famous than George Orwell’s 1984, it arguably presents a world that more closely resembles our own: a world of easy sex, readily available and mood-altering pharmaceuticals, information overload, and mass production.  Juxtaposing Orwell’s and Huxley’s dystopias, the critic Neil Postman commented: “What Orwell feared were those who would ban books. What Huxley feared was that there would be no reason to ban a book, for there would be no one who wanted to read one. . . . Orwell feared that the truth would be concealed from us. Huxley feared the truth would be drowned in a sea of irrelevance.",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/81zE42gT3xL.jpg",
        "genre": "Science fiction",
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
        "genre": "Romance",
        "likes": []
    },
    {
        "title": "Rule #1: The Simple Strategy for Successful Investing in Only 15 Minutes a Week!",
        "author": "Phil Town",
        "year": "2005",
        "description": "In this updated edition to the #1 national bestseller, you’ll learn more of Phil’s fresh, think-outside-the-box rules, including:\r\n• Don’t diversify \r\n• Only buy a stock when it’s on sale \r\n• Think long term—but act short term to maximize your return \r\n• And most of all, beat the big investors at their own game by using the tools designed for them! \r\n \r\nAs Phil demonstrates in these pages, giant mutual funds can’t help but regress to the mean—and as we’ve all learned in recent years, that mean could be very disappointing indeed. Fortunately, Rule #1 takes readers step-by-step through a do-it-yourself process, equipping even the biggest investing-phobes with the tools they need to make quantum leaps toward financial security—regardless of where the market is headed.",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/519zNmQTDqL._SX334_BO1,204,203,200_.jpg",
        "recommendedUrl": "https://www.amazon.com/Rule-Strategy-Successful-Investing-Minutes/dp/0307336840",
        "genre": "Other",
        "likes": []
    },
    {
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "J. K. Rowling",
        "year": "1997",
        "description": "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
        "genre": "Fantasy",
        "recommendedUrl": "https://anylang.net/en/books/en/harry-potter-and-philosophers-stone",
        "likes": []
    },
    {
        "title": "The Lord of the Rings",
        "author": "J. R. R. Tolkien",
        "year": "1954",
        "description": "The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, intended to be Earth at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.",
        "imageUrl": "https://m.media-amazon.com/images/I/51waks01PAL.jpg",
        "genre": "Adventure",
        "recommendedUrl": "https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings",
        "likes": []
    }
]

const baseUrl = 'http://localhost:3030/data';


const postBook = async (bookData) => {

    const response = await fetch(`${baseUrl}/books`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(bookData)
    });

    const result = await response.json();
    return result;
}

mockData.forEach(data => {
    postBook(data);
});