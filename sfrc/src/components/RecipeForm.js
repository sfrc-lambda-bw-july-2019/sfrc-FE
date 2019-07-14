import React from "react";
import { connect } from "react-redux";
// import moment from 'moment';
// import { addNote } from '../actions';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
      newNote: {
        message: '',
        delete_at: 1,
        user_id: parseInt(localStorage.getItem("user_id"))
      }
    };
  }

 
1
  render() {
    return (
      <div className="note-form">
        
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
      notes: state.notes
  }
}

export default connect(
  mapStateToProps,
  // { addNote }
)(NoteForm);
