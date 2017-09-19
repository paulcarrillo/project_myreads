  import React from 'react';
  import { Route } from 'react-router-dom';
  import * as BooksAPI from './BooksAPI';
  import './App.css';
  import BookList from './BookList';
  import SearchPage from './SearchPage';


  class App extends React.Component {
    state = {
      books: [],
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

    updateShelf = (book, newShelf) => {
      console.log(book);
      console.log(newShelf);
      BooksAPI.update(book, newShelf)
        .then(b => {
          console.log(b)

      })
    }

  //updateShelf = (book, shelf) => {
  //    this.setState((state) => ({
  //    books: state.books.filter((b) => b.shelf !== book.shelf)
  //    }))

  //    BooksAPI.update()

//  changeShelf = (book, newShelf) => {
    // Here you will call BookAPI.update(book, newShelf) method
    // once you get back the response you ll need to find the book within the existing books you have in state and update that as well



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
              <SearchPage books={this.state.books} />
          )}/>
        </div>
        )
      }
    }

    export default App;
