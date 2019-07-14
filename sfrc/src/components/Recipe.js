import React from "react";
import { connect } from "react-redux";
// import { deleteNotes, updateNotes } from '../actions';
// import moment from 'moment';
import EditForm from './EditForm';

class Notes extends React.Component{

  state = {
    animate: false,
    updatingNoteId: null
  }
  

   back = e => {
    e.preventDefault();
    this.props.history.push("/main-page");
  };


  updateNote = (e, note) => {
    e.preventDefault();
    this.props.updateNotes(note);
    // this.setState({
    //   updatingNoteId: null
    // });
    setTimeout(() =>   this.setState({
      updatingNoteId: null
    }), 300)
    setTimeout(() => {this.props.history.push('/main-page')}, 400)
  };
  





  handleAnimate = (id) => {
    this.setState(prevState => ({
      animate: !prevState.animate
    }));
   setTimeout(() => {this.props.deleteNotes(id);}, 3000)
   setTimeout(() => {this.props.history.push('/main-page')}, 3200)
  };
  




 render() {
     const note = this.props.notes.find(
    note => `${note.id}` === this.props.match.params.id);
    if(this.state.updatingNoteId === note.id) {
      return <EditForm note={note} updateNote={this.updateNote} updatingNotes={this.props.updatingNotes} handleAnimate={this.handleAnimate} />
    } 

   return (
     <div className='note-container'>
    <div className={this.state.animate ? 'gone' : 'single-note'}>
    <div className="single-text">
      <h3> {note.message}</h3>
      {/* <h5> Time Until Destruction: {moment().add(note.delete_at, 'day').fromNow(true)} </h5> */}
    </div>
    <div className="single-btn">
     <button onClick={() => this.setState({ updatingNoteId: note.id })}>Edit</button>
     <button onClick={() => this.handleAnimate(note.id)}>Blackhole</button>
     <button onClick={this.back}>Back</button>
   </div>
  </div>
  </div>
  
   
   )
 }

}

  

const mapStateToProps = state => ({
  notes: state.notes,
  // deletingNotes: state.deletingNotes,
  // updatingNotes: state.updatingNotes
});

export default connect(
  mapStateToProps,
  // { deleteNotes, updateNotes }
)(Notes);
