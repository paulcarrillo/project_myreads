  import React from 'react';
  import BookShelf from './BookShelf';
  import Proptypes from 'prop-types';
  import { Link } from 'react-router-dom';



  function BookList(props) {
    return (
        <div className="list-books">
            <div className="list-books">
              <div className="list-books-title">
                <h1>My Reads</h1>
              </div>
                <div className="book-list-content">
                <div>
                  <BookShelf
                    books={props.books.filter(book => book.shelf === "currentlyReading")}
                    shelf="Currently Reading"
                    update={props.update}
                   />
                  <BookShelf
                    books={props.books.filter(book => book.shelf === "wantToRead")}
                    shelf="Want to Read"
                    update={props.update}
                  />
                  <BookShelf
                    books={props.books.filter(book => book.shelf === "read")}
                    shelf="Read"
                    update={props.update}
                  />
                    <div className="open-search">
                      <Link
                        to="/search"
                        >Add a book
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }

        BookList.proptypes = {
        books: Proptypes.array.isRequired,
        update: Proptypes.func.isRequired
      }

      export default BookList;
