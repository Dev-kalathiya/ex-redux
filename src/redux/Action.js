// actions.js
import axios from 'axios';
import { GET_USER, UPDATE_USER, DELETE_USER, ADD_USER, GET_SINGLE_USER } from './ActionType';

export const addUser = (student) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3000/students", student);
    dispatch({
      type: ADD_USER,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

export const updateUser = (student) => async (dispatch) => {
  try {
    const response = await axios.patch(`http://localhost:3000/students/${student.id}`,student );
    dispatch({
      type: UPDATE_USER,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export const deleteUser = (studentId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/students/${studentId}`);
    dispatch({
      type: DELETE_USER,
      payload: studentId,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3000/students");
    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
