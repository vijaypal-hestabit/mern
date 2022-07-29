import { createContext } from 'react';
import './App.css';
import UseCallbackExample from './components/UseCallback';
import UseEffectExample from './components/UseEffect';
import UseMemoExample from './components/UseMemo';
import UseReducerExample from './components/UseReducer';
import UseRefExample from './components/UseRef';
import UseStateExample from './components/UseState';
import ChildContext from './UseContext/ChildContext';
import ParentContext from './UseContext/ParentContext';

let fname = createContext()

function App() {
    return (
        <div className='App'>
            {/* <UseStateExample/> */}
            {/* <UseEffectExample /> */}
            {/* <UseRefExample/> */}
            {/* <UseMemoExample/> */}
            {/* <UseCallbackExample /> */}
            <UseReducerExample/>
            {/* <fname.Provider value={'vijay'}>
                <ParentContext />
            </fname.Provider> */}
        </div>
    );
}

export default App;
export {fname};
