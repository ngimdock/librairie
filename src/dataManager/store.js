import { createStore, applyMiddleware } from "redux";
import loaderReducer  from "./loader/loaderReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(loaderReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store