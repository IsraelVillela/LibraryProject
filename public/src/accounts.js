function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => a.name.last>b.name.last ?1:-1)
}

function getTotalNumberOfBorrows(account, books) {
  //reduce and foreach work great w nums jsyk
  //assign a total var
  let total=0;
  let final= books.forEach(book => book.borrows.forEach(borrow => {
    if(borrow.id===account.id){
      total++
    }
  })
 )
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  let accountsBooks=[]
  books.forEach(book => {
    let array = book.borrows
    if (array.find(borrow => borrow.id === account.id && borrow.returned === false)) {
      accountsBooks.push(book)
  }
})
  accountsBooks.forEach(book=>{
    let author = authors.find(person => person.id === book.authorId)
    book['author'] = author
  })
  return accountsBooks 
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
