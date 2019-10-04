import {ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED} from '../constants/action-types';


const initialState = {
    articles: [],
    error: '',
    remoteArticles: [],
    justtest: "just test",
    secondtest: "just second test"
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ARTICLE:
            return {...state, articles: state.articles.concat(action.payload)};

        case FOUND_BAD_WORD:
            return {...state, error: "Found bad word!"}

        case DATA_LOADED:
            return {...state, remoteArticles: state.remoteArticles.concat(action.payload)};

        case "CHANGE_TEXT":
            console.log("payload:", action.payload);
            return {...state, justtest: action.payload.justtest, secondtest: action.payload.secondtest};

        default:
            return state;
    }
};

export default rootReducer;