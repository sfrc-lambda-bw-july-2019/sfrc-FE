import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios.post("https://secret-family-recipe-backend.herokuapp.com/api/auth/login", creds)
  .then(res => {
    console.log(res.data)
    localStorage.setItem("token", res.data.authToken)
    localStorage.setItem("user_id", res.data.user_id )
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
  });
};


export const REG_START = 'REG_START';
export const REG_SUCCESS= 'REG_SUCCESS';


export const register = user => dispatch => {
  dispatch({ type: REG_START });
  axios.post("https://secret-family-recipe-backend.herokuapp.com/api/auth/register", user)
  .then(res => {
    dispatch({ type: REG_SUCCESS})
    // dispatch(getUsers());
    // if (res.data.token) {
    //   localStorage.setItem("token", res.data.token);
    //   history.push('/');
    // } else {
    //   user.history.push('/log-in');
    // }
    // return true;
  })
.catch(err => console.log(err));
};



// export const GET_USERS_START = "GET_USERS_START";
// export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
// export const GET_USERS_FAILURE = "GET_USERS_FAILURE";
 

// export const getUsers = () => dispatch => {
//   dispatch({ type: GET_USERS_START });
//   axios
//     .get("https://blackhole-backend.herokuapp.com/users", {
//       headers: { Authorization: localStorage.getItem("token") }
//     })
//     .then(res => {
//       dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
//     })
//     .catch(err => console.log(err));
// };


export const LOGOUT = 'LOGOUT';

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  localStorage.clear();
}





// Used to fetch data from server

// export const FETCH_DATA_START = "FETCH_DATA_START";
// export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
// export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
// export const USER_UNAUTHORIZED = "FETCH_DATA_FAILURE";

// export const getData = (user_id) => dispatch => {
//   dispatch({ type: FETCH_DATA_START });
//   axios
//     .get(`https://blackhole-backend.herokuapp.com/messages/users/${user_id}`, {
//       headers: { Authorization: localStorage.getItem("token") }
//     })
//     .then(res => {
//       dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       console.log(err.response);
//       if (err.response.status === 403) {
//         dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
//       } else {
//         dispatch({ type: DELETE_FAILURE, payload: err.response });
//       }
//     });
// };


// export const ADD_START = 'ADD_START';
// export const ADD_SUCCESS='ADD_SUCCESS';

// export const addNote = newNote => dispatch => {
//   dispatch({ type: ADD_START });

//   return axios
//     .post('https://blackhole-backend.herokuapp.com/postmessage', newNote)
//     .then(res => {
//       dispatch({ type: ADD_SUCCESS, payload: res.data })
//     })
//     .catch(err => console.log(err));
// }



// // used to delete a note by taking in it's id

// export const DELETE_START = "DELETE_START";
// export const DELETE_SUCCESS = "DELETE_SUCCESS";
// export const DELETE_FAILURE = "DELETE_FAILURE";

// export const deleteNotes = id => dispatch => {
//   dispatch({ type: DELETE_START });
//   axios
//     .delete(` https://blackhole-backend.herokuapp.com/delmessage/${id}`, {
//       headers: { Authorization: localStorage.getItem("token") }
//     })
//     .then(res => {
//       dispatch({ type: DELETE_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       console.log('This is an error', err);
//     });
// };


// // Edit notes 

// export const EDIT_START = 'EDIT_START';
// export const EDIT_SUCCESS='EDIT_SUCCESS';

// export const updateNotes = note => dispatch => {
//   dispatch({ type: EDIT_START });
//   axios
//     .put(`https://blackhole-backend.herokuapp.com/updatemessage/${note.id}`, note, {
//       headers: { Authorization: localStorage.getItem("token") }
//     })
//     .then(res => {
//       dispatch({ type: EDIT_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       console.log(err.response);
//     });
// };