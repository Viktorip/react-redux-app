import {ADD_ARTICLE} from '../constants/action-types';


export const addArticle = (payload) => {
    console.log("at add article");
    return {type: ADD_ARTICLE, payload};
};

export const getData = () => {
    return {type: "LOAD_DATA"};
};

export const changeText = (payload) => {
    console.log("change text action");
    return {type: "CHANGE_TEXT", payload};
}