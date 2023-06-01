import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css"



// import { CounterApp } from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultplesCustomHooks } from './components/03-exaples/MultplesCustomHooks';
// import { FocusScreem } from './components/04-useRef/FocusScreem';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { UseLayout } from './components/05-useLayoutEffect/UseLayout';
// import { Memorize } from './components/06-memos/Memorize';
// import { HookApp } from './HookApp';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { Padre } from './components/07-memos-tarea/Padre';
import { TodoApp } from './components/08-usereducer/TodoApp';


// import { Testeos } from './Testeos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoApp />
);
