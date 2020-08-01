import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    }catch(e){
        console.log(e)
    }
}

function loadToLocalStorage(){
    try{
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }catch(e){
        console.log(e)
        return undefined
    }
}

const persistedState = loadToLocalStorage()
let store = createStore(
    reducer, 
    persistedState,
    composeEnhancers(applyMiddleware(thunk)))
store.subscribe(() => saveToLocalStorage(store.getState()))
console.log(store.reducer)

export default store