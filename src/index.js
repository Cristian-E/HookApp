import React from 'react';
import ReactDOM from 'react-dom/client';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import "./index.css"
// import { Testeos } from './Testeos';
// import { MultplesCustomHooks } from './components/03-exaples/MultplesCustomHooks';
// import { FocusScreem } from './components/04-useRef/FocusScreem';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
import { UseLayout } from './components/05-useLayoutEffect/UseLayout';
import { Memorize } from './components/06-memos/Memorize';

// import { CounterApp } from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
// import { HookApp } from './HookApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Memorize />
);
