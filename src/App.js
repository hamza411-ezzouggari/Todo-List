import React from 'react';
import './App.css';
import Navbar from './Navbar';
import List from './List';

class App extends React.Component{
  state={
    books:[],
  }
  onAdd = (book)=>{
    var {books }= this.state;
    var newBooks = books.map((x)=>{return x});
    newBooks.push(book);
    this.setState({books:newBooks})
  }
  clear = (b)=>{
    var {books} = this.state;
    var newBooks = [...books];
    newBooks=newBooks.filter((X)=>{
      console.log(X);
      console.log(b);
      return X.title!==b.title;
    })
    console.log(newBooks);
    this.setState({books:newBooks})
  }
  render(){
    return(
      <div className="tout">
        <div className="context">
              <Navbar />
              <List  onAdd={this.onAdd}  books={this.state.books} c={this.clear}/>
          
        </div>
      </div> 
    );
  }
}
export default App;
