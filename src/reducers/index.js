import {combineReducers} from 'redux';
import mainDatabase from './database'
import dmDatabase from './database_dm'
import daDatabase from './database_da'
import uiState from './uiState'

export default combineReducers({
    mainDatabase,
    dmDatabase,
    daDatabase,
    uiState
})