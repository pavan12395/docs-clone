import { CHANGE_DOCS,CHANGE_USER_NAME } from "./actions";
const initialState = {
    username : null,
    docs : [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_DOCS:
        return { ...state, docs : action.payload};
      case CHANGE_USER_NAME:
        return { ...state, username : action.payload};
      default:
        return state;
    }
  };
  
  export default rootReducer;