let $=document
const addBookBtn=$.querySelector('.btn')
const titleInputElem=$.querySelector('#title')
const authorInputElem=$.querySelector('#author')
const yearInputElem=$.querySelector('#year')
let bookListContainer=$.querySelector('#book-list')
let books=[]

addBookBtn.addEventListener('click',function(event){
    event.preventDefault()
    
    let titleInputValue=titleInputElem.value
    let authorInputValue=authorInputElem.value
    let yearInputValue=yearInputElem.value

    if(titleInputValue === '' || authorInputValue === '' || yearInputValue === ''){
        alert('please insert real value')
    }else{

let newObjectArray={
    id:books.length+1,
    title:titleInputValue,
    author:authorInputValue,
    year:yearInputValue
}
    }
books.push(newObjectArray)
setInToLocalStorage(books)

})
function setInToLocalStorage(allBooksArray){
    localStorage.setItem('books',JSON.stringify(allBooksArray))
    emptyInput()
    GenerateNewBookList(allBooksArray)

}
function emptyInput(){
    titleInputElem.value=''
    authorInputElem.value=''
    yearInputElem.value=''
}
function GenerateNewBookList(allBooksArray){
    bookListContainer.innerHTML=''
    allBooksArray.forEach(function(book){
    let newBookTrElem=$.createElement('tr')
    let newBooktTitleElem=$.createElement('th')
    newBooktTitleElem.innerHTML=book.title
    // console.log(newBooktTitleElem);
    let newBookAuthorElem=$.createElement('th')
    newBookAuthorElem.innerHTML=book.author
    // console.log(newBookAuthorElem);
    let newBookYearElem=$.createElement('th')
    newBookYearElem.innerHTML=book.year
    // console.log(newBookYearElem);
    newBookTrElem.append(newBooktTitleElem,newBookAuthorElem,newBookYearElem)

    console.log(newBookTrElem);

    bookListContainer.append(newBookTrElem)
    })
}
function getBooksFromLocalStorage(){
    let localStorageBooks=localStorage.getItem('books')
    if(localStorageBooks){
        books=JSON.parse(localStorageBooks)
        GenerateNewBookList(books)
    }
}
window.addEventListener('load',getBooksFromLocalStorage)