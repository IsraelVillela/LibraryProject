function findAuthorById(authors, id) {
  //has two params an array of account objects and a string id account obj
  //return string id that has matching id
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
}
  

function partitionBooksByBorrowedStatus(books) {
  let returned = books.filter((book) => book.borrows.every((borrow)=> borrow.returned===true))
  let notReturned= books.filter((book) => book.borrows.some((borrow)=> borrow.returned === false))
  let final=[[...notReturned], [...returned]]
  return final
}



function getBorrowersForBook(book, accounts) {
 return book.borrows.map((borrow) => {let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
