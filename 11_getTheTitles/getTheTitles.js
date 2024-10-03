const getTheTitles = function(bookObject) {
    const titles = [];
    bookObject.map((book) => {
        titles.push(book.title);
    })
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
