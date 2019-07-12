
import axios from 'axios';

//Please de-smurf this
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCCESSFUL = "FETCHING_SMURFS_SUCCESSFUL";
export const FETCHING_SMURFS_FAILED = "FETCHING_SMURFS_SUCCESSFUL";

export const ADDING_SMURF_START = "ADDING_SMURF";
export const ADDING_SMURF_SUCCESSFUL = "ADDING_SMURF_SUCCESSFUL";
export const ADDING_SMURF_FAILED = "ADDING_SMURF_SUCCESSFUL";

export const DELETING_SMURF_START = "DELETING_SMURF_START";
export const DELETING_SMURF_SUCCESSFUL = "DELETING_SMURF_SUCCESSFUL";
export const DELETING_SMURF_FAILED = "DELETING_SMURF_FAILED";


export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: FETCHING_SMURFS_SUCCESSFUL, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_SMURFS_FAILED, payload: err }));
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => dispatch({ type: ADDING_SMURF_SUCCESSFUL, payload: res.data }))
    .catch(err => dispatch({ type: ADDING_SMURF_FAILED, payload: err }));
};


export const deleteSmurf = id => dispatch => {
  dispatch({type: DELETING_SMURF_START});
  //NB: res.data should return new list with that one smurf removed
  axios
  .delete(`http://localhost:3333/smurfs/${id}`)
  .then(res => dispatch({type:DELETING_SMURF_SUCCESSFUL, payload:res.data}))
  .catch(err => dispatch({type: DELETING_SMURF_FAILED, payload: err}))
}