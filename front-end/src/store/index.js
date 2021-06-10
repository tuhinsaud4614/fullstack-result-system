import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import adminUsersReducer from "./admin/users/reducer";
import adminUtilitySubjectOptionsReducer from "./admin/utility/add-subject/reducer";

const rootReducer = combineReducers({
  adminUsers: adminUsersReducer,
  adminUtilitySubjectOptions: adminUtilitySubjectOptionsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
