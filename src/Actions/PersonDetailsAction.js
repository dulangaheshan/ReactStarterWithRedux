import axios from "axios";
import { FETCHING_PERSON_DETAILS } from "../common/types";

export function FetchPersonDetails(){
    return dispatch => {
        dispatch({ type: FETCHING_PERSON_DETAILS });

axios.get("https://jsonplaceholder.typicode.com/photos").then(response => {
    fetchsucess(dispatch, response);
  });
}
}
const fetchsucess = (dispatch, data) => {
    // console.log(data.data);
    dispatch({
      type: FETCHED_TOP_HITS,
      payload: data
    });
  };