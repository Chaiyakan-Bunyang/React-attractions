import "../Css/AppSearch.css"
export default function AppSearch(props){
    const {searchText,setSearchText} = props
    return(
        <div className='app-search'>
        <input type="text" 
          className='app-search-input'
          placeholder='Search a Book'
          value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
        />
      </div>
    );
}