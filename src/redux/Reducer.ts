import { combineReducers } from 'redux';
import UserReducer from './reducers/UserReducer';
import PostReducer from './reducers/PostReducer';


const rootReducer = combineReducers({
    user: UserReducer,
    post: PostReducer,
});

export default rootReducer;