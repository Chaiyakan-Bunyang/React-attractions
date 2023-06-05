import "../Css/BookPost.css"
export default function BookPost(props){
    const {book,closeBookClick} = props
    return(
        <div className="book-post">
            <div className="book-post-bg" onClick={closeBookClick}></div>
            <div className="book-post-content">
                <img src={book.coverimage} alt="" />
                <h2>{book.name}</h2>
                <h4>{book.detail}</h4>
            </div>
        </div>
    );
}