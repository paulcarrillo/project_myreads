  import React, { Component } from 'react';
  import Proptypes from 'prop-types';
  import { Link } from 'react-router-dom';
  import * as BooksAPI from './BooksAPI';


  class SearchPage extends Component {

    state = {
      query: '',
      results: []
    }

    updateQuery = (query) => {
      this.setState({
        query: query.trim()
      })
      if(query) {
        BooksAPI.search(query.trim(), 20).then((results) => {
          if(!results || results.error){
            this.setState({results: []})
          } else {
            this.bookShelf(results)
            this.setState({results})
          }
        }
      )} else {
        this.setState({results: []})
      }
    }

    handleChange = (event, book) => {
      const { value } = event.target;
      this.props.update(book, value);
    }

    bookShelf = (results) => {
      for (let result of results){
        for (let book of this.props.books)
          if(results.id === book.id) {
            result.shelf = book.shelf
          } else {
            result.shelf = 'none'
          }
        }
     }




    render() {
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search"
              to={{
                pathname: "/"
              }}
              >close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.results.map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 170, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select value={book.shelf}
                          onChange={(event) => this.handleChange(event, book)}>
                          <option value="" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div  className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )
    }
  }

  SearchPage.proptypes = {
    books: Proptypes.array.isRequired,
    handleChange: Proptypes.func.isRequired
  }

  export default SearchPage;
