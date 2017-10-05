  import React from 'react';
  import BookShelf from './BookShelf';
  //import Proptypes from 'prop-types';
  import { Link } from 'react-router-dom';



  class BookList extends React.Component {

    //handleChange = (event, book) => {
    //  const { value } = event.target;
    //  this.props.update(book, value);
    //}

    render() {
      return (
          <div className="list-books">
              <div className="list-books">
                <div className="list-books-title">
                  <h1>My Reads</h1>
                </div>
                  <div className="book-list-content">
                  <div>
                    <BookShelf
                      books={this.props.books.filter(book => book.shelf === "currentlyReading")}
                      shelf="Currently Reading"
                      update={this.props.update}
                     />
                    <BookShelf
                      books={this.props.books.filter(book => book.shelf === "wantToRead")}
                      shelf="Want to Read"
                      update={this.props.update}
                    />
                    <BookShelf
                      books={this.props.books.filter(book => book.shelf === "read")}
                      shelf="Read"
                      update={this.props.update}
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
        }


    //  BookList.proptypes = {
    //    books: Proptypes.array.isRequired,
    //    update: Proptypes.func.isRequired
    //  }

      export default BookList;
