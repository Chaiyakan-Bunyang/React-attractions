import "../Css/BookPost.css"
export default function BookPost(props){
    const {book,closeBookClick} = props
    return(
        <div className="book-post">
            <div className="book-post-bg" onClick={closeBookClick}></div>
            <div className="book-post-content">
                <img src={book.imageUrl} alt="" />
                <h4>{book.title}</h4>
            </div>
        </div>
    );
}