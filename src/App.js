  import React from 'react';
  import { Route } from 'react-router-dom';
  import * as BooksAPI from './BooksAPI';
  import './App.css';
  import BookList from './BookList';
  import SearchPage from './SearchPage';


  class App extends React.Component {
    state = {
      books: []
      /**
      * TODO: Instead of using this state variable to keep track of which page
      * we're on, use the URL in the browser's address bar. This will ensure that
      * users can use the browser's back and forward buttons to navigate between
      * pages, as well as provide a good URL they can bookmark and share.
      */
    }

    componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    }

    updateShelf = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(previousState => ({
        books: previousState.books
                     .filter(b => b.id !== book.id)
                     .concat([book])
                   }))
                 })
               }

     handleChange = (event, book) => {
        const { value } = event.target;
        this.state.update(book, value);
        }

      render() {
      return (
        <div className="app">
          <Route exact path="/" render={() => (
            <BookList
                books={this.state.books}
                update={this.updateShelf}
              />
          )}/>
          <Route path="/search" render={() => (
              <SearchPage
                books={this.state.books}
                update={this.updateShelf}

              />
          )}/>
        </div>
        )
      }
    }

    export default App;
