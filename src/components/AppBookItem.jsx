export default function AppBookitem(props){
    const {book,onBookClick} = props;
    return(
        <div className='book-item' onClick={()=>{onBookClick(book.id)}}>
            <img src={book.imageUrl} alt="" />
            <h4>{book.title}</h4>
        </div>
    );
}