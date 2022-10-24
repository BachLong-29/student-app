import { Student } from "./../utils/constanst";
import { cloneDeep } from "lodash";
import { data } from "./../data";

const reducer = (state: any = data, action: any) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.payload);
    case "REMOVE":
      return state.filter((item: any) => item.key !== action.payload.key);
    case "EDIT":
      const cloneData = cloneDeep(state);
      const index = cloneData.findIndex(
        (item: Student) => item.key === action.payload.data.key
      );
      cloneData[index] = { ...action.payload.data };
      return cloneData;
    default:
      return state;
  }
};

export default reducer;
