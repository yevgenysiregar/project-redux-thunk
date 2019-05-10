import axios from "axios";

export const fetchData = () => dispatch => {
  axios.get("https://haekal-todo-list-api.herokuapp.com/todos").then(res =>
    dispatch({
      type: "FETCH_DATA",
      payload: res.data
    }).catch(error => console.log(error))
  );
};

// export function fetchData2() {
//   return function (dispatch) {
//     axios.get("https://haekal-todo-list-api.herokuapp.com/todos").then(res =>
//       dispatch({
//         type: "FETCH_DATA",
//         payload: res.data
//       }).catch(err => console.log(err))
//     );
//   };
// }
