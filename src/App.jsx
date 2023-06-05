import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHeader from './components/AppHeader'
import AppBookitem from './components/AppBookItem'
import BookPost from './components/BookPost'
import books from './data/books'
import items from './data/attractions.json'
import AppSearch from './components/AppSearch'



function App() {

  const [selectedbook,setSelectedbook] =useState(null);
  const [searchText,setSearchText] = useState("");

  function onBookClick(bookId){
    setSelectedbook(items[bookId-1])
  }
  function closeBookClick(){
    setSelectedbook(null);
  }
  const filterBooks = items.filter((book)=>{
    return book.name.toUpperCase().includes(searchText.toUpperCase())
  })
  const bookElement = filterBooks.map((book,index)=>{
      return <AppBookitem book={book} key={index} onBookClick={onBookClick}/>
  })
  let bookPost = null;
  if(!selectedbook==""){
    bookPost = <BookPost book={selectedbook} closeBookClick={closeBookClick}/>
  }

  return (
  
   <div className='App'> 
    <AppHeader/>
    <AppSearch searchText={searchText} setSearchText={setSearchText}/>
    <div className='app-grid'>
           {bookElement}
    </div>
    {bookPost}
   </div>
  )
}

export default App
