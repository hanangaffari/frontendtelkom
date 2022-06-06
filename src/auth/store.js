import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReduce from './reducers/rootReducer' ;

import { sessionService } from 'redux-react-session';

const initialState = {};
const middlewares = [thunk];

const store = createStore(rootReduce, initialState,compose(applyMiddleware(...middlewares)));

sessionService.initSessionService(store);

export default store;