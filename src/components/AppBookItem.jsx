export default function AppBookitem(props){
    const {book,onBookClick} = props;
    return(
        <div className='book-item' onClick={()=>{onBookClick(book.id)}}>
            <img src={book.coverimage} alt="" />
            <h3>{book.name}</h3>
        </div>
    );
}