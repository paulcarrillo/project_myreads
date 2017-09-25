  import React, { Component } from 'react';
  import escapeRegExp from 'escape-string-regexp';
  import sortBy from 'sort-by';
  import { Link } from 'react-router-dom';



  class SearchPage extends Component {

    state = {
      query: ''
    }

    updateQuery = (query) => {
      this.setState({ query: query.trim() })
    }



    render() {
      console.log('Props', this.props.books)
      let showingBooks
      if (this.state.query) {
        const match = new RegExp(escapeRegExp(this.state.query), 'i')
        showingBooks = this.props.books.filter((book) => match.test(book.title))
      } else {
        showingBooks = this.props.books
      }

      showingBooks.sort(sortBy('title'))

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
              {showingBooks.map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 170, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="none" disabled>Move to...</option>
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

  export default SearchPage;
