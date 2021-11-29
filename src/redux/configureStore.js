import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';

export default function configureStore(intialState)
{
    return createStore(rootReducer, intialState);
}
