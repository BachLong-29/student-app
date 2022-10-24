import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import modalReducers from "../reducer/modal.reducers";
import studentReducers from "../reducer/student.reducers";

const configureStore = () => {
  return createStore(
    combineReducers({
      student: studentReducers,
      modal: modalReducers,
    }),
    composeWithDevTools()
  );
};

export default configureStore;
