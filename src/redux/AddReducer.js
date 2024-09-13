// userReducer.js
import { ADD_USER, UPDATE_USER, DELETE_USER, GET_USER, GET_SINGLE_USER } from './ActionType';

const initialState = {
  students: [],
  student: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        students: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case UPDATE_USER:
      return {
        ...state,
        students: state.students.map(student =>
          student.id === action.payload.id ? action.payload : student
        ),
        student: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        students: state.students.filter(student => student.id !== action.payload),
       
      };
    default:
      return state;
  }
};

export default userReducer;
