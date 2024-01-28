const getTheTitles = function(books) {
    let bookTitles = []
    books.forEach((eachBook) => {
        bookTitles.push(eachBook.title)
    })
    return bookTitles
};

// Do not edit below this line
module.exports = getTheTitles;
