import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import adminUsersReducer from "./admin/users/reducer";
import adminUtilitySubjectOptionsReducer from "./admin/utility/add-subject/reducer";
import teacherAssignedSubjectsReducer from "./teacher/assigned-subjects/reducer";
import teacherAverageGradesReducer from "./teacher/average-grades/reducer";
import teacherTestsReducer from "./teacher/tests/reducer";

const rootReducer = combineReducers({
  adminUsers: adminUsersReducer,
  adminUtilitySubjectOptions: adminUtilitySubjectOptionsReducer,
  teacherAssignedSubjects: teacherAssignedSubjectsReducer,
  teacherAverageGrades: teacherAverageGradesReducer,
  teacherTests: teacherTestsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
