function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
 let total=0;
  let final= books.forEach(book => book.borrows.forEach(borrow => {
    if(borrow.returned === false){
      total++
    }
  })
 )
  return total
}

function getMostCommonGenres(books) {
let count = {}
books.forEach(book =>{
if(count[book.genre] != null) {
  count[book.genre]++
}else{
  count[book.genre] = 1
  }
});
let countArray = []
for (let [key, value] of Object.entries(count)) {
  countArray.push({
  'name' : key,
   'count' : value
  })
}
countArray.sort((a,b) => b.count - a.count)
return countArray.slice(0, 5)
}

function getMostPopularBooks(books) {
let result =[]
let borrowedBooks = books.reduce((acc, book)=>{ 
result.push({name: book.title, count: book.borrows.length 
    })}
,[])
return result.sort((a,b) => b.count - a.count).slice(0, 5)
}

function getMostPopularAuthors(books, authors) {   
  let allAuthors = books.reduce((acc, book) => { 
    let {authorId, borrows} = book
    let authorObj = authors.find(author => author.id === authorId)
    let name = `${authorObj.name.first} ${authorObj.name.last}`
    let count = borrows.length
    let authExists = acc.find(auth => auth.name === name)
   if(authExists) {
      authExists.count += count
  } else {
  const newAuthEntry = {
     name,
     count
 }
    acc.push(newAuthEntry)
  }
 return acc
},[])
  let sortedAuthorList = allAuthors.sort((a, b) => b.count - a.count)
  let zeroToFive = sortedAuthorList.slice(0, 5)
return zeroToFive
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
