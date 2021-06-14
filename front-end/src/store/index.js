import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import adminUsersReducer from "./admin/users/reducer";
import adminUtilitySubjectOptionsReducer from "./admin/utility/add-subject/reducer";
import teacherPupilOptionsReducer from "./teacher/utility/pupil-options/reducer";
import teacherAssignedSubjectsReducer from "./teacher/assigned-subjects/reducer";
import teacherAverageGradesReducer from "./teacher/average-grades/reducer";
import teacherTestsReducer from "./teacher/tests/reducer";
import teacherPupilTestGradeReducer from "./teacher/test-pupil-grade/reducer";

const rootReducer = combineReducers({
  adminUsers: adminUsersReducer,
  adminUtilitySubjectOptions: adminUtilitySubjectOptionsReducer,
  teacherAssignedSubjects: teacherAssignedSubjectsReducer,
  teacherAverageGrades: teacherAverageGradesReducer,
  teacherTests: teacherTestsReducer,
  teacherPupilOptions: teacherPupilOptionsReducer,
  teacherPupilTestGrade: teacherPupilTestGradeReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
