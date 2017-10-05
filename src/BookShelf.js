  import React from 'react';
  import Proptypes from 'prop-types';

  class BookShelf extends React.Component {

    handleChange = (event, book) => {
      const { value } = event.target;
      this.props.update(book, value);
    }

    render() {
      return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelf}</h2>
            <ol className="books-grid">
              {this.props.books.map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 170, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select value={book.shelf}
                          onChange={(event) => this.handleChange(event, book)}>
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
        )
      }
    }

    BookShelf.proptypes = {
      books: Proptypes.array.isRequired,
      update: Proptypes.func.isRequired
    }



  export default BookShelf;
