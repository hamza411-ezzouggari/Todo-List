import React from 'react';
import './App.css';
import { FcFullTrash }from "react-icons/fc";
import Modal from "react-animated-modal";
class List extends React.Component{
state={
  Title:'',
  Description:'',
  Notes:'',
  Data:'',
  showModal: false,
  books:[],
}
handelTitleChange = (e)=>{
  this.setState({Title:e.target.value})
}
handelDescriptionChange = (e)=>{
  this.setState({Description:e.target.value})
}
handelNotesChange = (e)=>{
  this.setState({Notes:e.target.value})
}
handelDataChange = (e)=>{
  this.setState({Data:e.target.value})
}
handleClick = (e) =>{
  e.preventDefault();
  var book={
      title:this.state.Title,
      isSelected:false,
      description:this.state.Description,
      notes:this.state.Notes,
      data:this.state.Data,
  }
  this.props.onAdd(book)
  this.clearState();
}
clearState=() => {
  this.setState({
      Title:'',
      Description:'',
      Notes:'',
      Data:'',
  });
}
  componentWillReceiveProps(nextProps){
  this.setState({books:nextProps.books})
}

onSelect= (book)=>{
  book.isSelected = !book.isSelected;
  const {books} = this.state;
  var newBooks = [...books];
  newBooks = newBooks.map((item)=>{
      if(item.title===book.title) {
          return book;
      }
      return item;
  })
  this.setState({books:newBooks})
}
    render(){
      const {books} = this.state;
      
        return(
        <div className="modelex">
            <Modal
                    visible={this.state.showModal}
                    closemodal={() => this.setState({ showModal: false })}
                    type="flipInX"
                >
                  <form className="puter">
                <label>
                <h1>Title</h1>
                <input id="title" type="text" autocomplet="off" value={this.state.Title} onChange={this.handelTitleChange} />
                </label>
                <label>
                <h1>Description</h1>
                <input id="description" type="text" value={this.state.Description} onChange={this.handelDescriptionChange} />
                </label>
                <label>
                <h1>Notes</h1>
                <input id="notes" type="text" value={this.state.Notes} onChange={this.handelNotesChange}  />
                </label>
                <label>
                <h1>Data</h1>
                <input id="date" type="date" onKeyDown="{e => e.preventDefault()}" value={this.state.Data} onChange={this.handelDataChange} />
                </label>
                <label >
                <div className="buttonex"><button className="bu"  onClick={this.handleClick} >Add project</button></div>
                </label>
            </form>
                </Modal>
                <div className="list">
                  <div className="ul">
            <ul>
                {
                    books.map((book)=>{
                        var  c= book.isSelected?'selected':'';
                        return (
                        <div className="listter"> 
                        <div className="set">
                         <h1 className="books">Books</h1>
                           
                           <label htmlFor="book" className="swether" >
                           <input type="checkbox"className="boxes"></input>
                             {book.title} <a  className="icons" onClick={()=>{
                                    this.props.c(book)}}>
                                    <FcFullTrash  className="dalete"/></a>
                                    </label>
                           <label htmlFor="book" className="swether">
                           <input type="checkbox" className="boxes" />
                           {book.description} 
                           </label>
                           
                           <label htmlFor="book" className="swether">
                           <input type="checkbox" className="boxes" />
                           {book.notes} 
                           </label>
                           <label htmlFor="book" className="swether">
                           <input type="checkbox" className="boxes" />{book.data}
                            </label>
                           </div>
                        </div>
                    )
                    })
                }
            </ul>
            </div>
            <div className="open">
                  <button className="button" onClick={() => this.setState({ showModal: true })}>
                    + New task
                </button>
                </div>
        </div>
        </div>
    );
  }
}
export default List