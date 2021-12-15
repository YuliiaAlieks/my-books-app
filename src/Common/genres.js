let genresList = [
    {value: 'science-fiction', text: 'Science fiction'},
    {value: 'historical-fiction', text: 'Historical fiction'},
    {value: 'fantasy', text: 'Fantasy'},
    {value: 'mystery', text: 'Mystery'},
    {value: 'thriller', text: 'Thriller'},
    {value: 'romance', text: 'Romance'},
    {value: 'dystopian', text: 'Dystopian'},
    {value: 'adventure', text: 'Adventure'},
    {value: 'horror', text: 'Horror'},
    {value: 'childrens', text: 'Childrens'},
    {value: 'memoir', text: 'Memoir'},
    {value: 'cooking', text: 'Cooking'},
    {value: 'motivational', text: 'Motivational'},
    {value: 'development', text: 'Development'},
    {value: 'health', text: 'Health'},
    {value: 'travel', text: 'Travel'},
    {value: 'philosophy', text: 'Philosophy'},
    {value: 'psycology', text: 'Psycology'},
    {value: 'self-help', text: 'Self-help'},
    {value: 'other', text: 'Other'},
];

export const genres = genresList.sort((a,b) => (a.value).localeCompare(b.value));
// console.log(sorted);
