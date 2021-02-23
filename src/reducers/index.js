import {combineReducers} from 'redux';
import mainDatabase from './database'
import dmDatabase from './database_dm'
import daDatabase from './database_da'
import sidebar from './sidebar'

export default combineReducers({
    mainDatabase,
    dmDatabase,
    daDatabase,
    sidebar
})