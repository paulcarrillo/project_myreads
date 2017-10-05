  import React, { Component } from 'react';
  import { Route } from 'react-router-dom';
  import * as BooksAPI from './BooksAPI';
  import './App.css';
  import BookList from './BookList';
  import SearchPage from './SearchPage';


  class App extends Component {
    state = {
      books: []
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
