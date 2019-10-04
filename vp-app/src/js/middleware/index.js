import {ADD_ARTICLE, FOUND_BAD_WORD} from '../constants/action-types';

const forbiddenWords = ["spam", "money"];

const forbiddenWordsMiddleware = ({dispatch}) => {
    console.log("at middleware");
    return next => {
        return action => {
            //do your stuff
            if (action.type === ADD_ARTICLE) {
                const foundWord = forbiddenWords.filter(word => action.payload.title.includes(word));
                if (foundWord.length) {
                    return dispatch({type: FOUND_BAD_WORD});
                }
            }

            if (action.type === "LOAD_DATA") {
                console.log("Loading data at middleware");
                fetch("https://jsonplaceholder.typicode.com/posts")
                    .then(response => { 
                        if (!response.ok) {
                            throw Error(response.statusText);
                        }
                        return response.json();
                    })
                    .then(json => {
                        dispatch({type: "DATA_LOADED", payload: json});
                    })
                    .catch(err => {
                        console.log("Error fething data", err.message);
                    });
            }
            console.log("passing to next");
            return next(action);
        }
    }
}

export default forbiddenWordsMiddleware;