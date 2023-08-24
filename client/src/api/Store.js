import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../api/UsersSlicer';
import loginReducer from '../api/LoginInfoSlice';
import questionsReducer from '../api/QuestionsSlicer';
import answersReducer from './AnswerSlicer';

export const Store = configureStore({
    reducer:{
        users: usersReducer,
        logininfo: loginReducer,
        questions: questionsReducer,
        answers: answersReducer,
    }
})