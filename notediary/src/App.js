import React, {useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const textState = atom({
  key : 'textState',
  default: 'Hello Celrati'
});

const textSize = selector({
  key: 'textStateSize',
  get : ({get}) => {
    return get(textState).length;
  },
});


const  App = () => {

  const [text, setText] = useRecoilState(textState);
  const sizeText = useRecoilValue(textSize);

  const changeText = useCallback(
    () => { setText(" hello Celrati Again")},
    []
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aloha : {text}</h1>
        <button onClick={changeText}>click here</button>
        <h1>Size: {sizeText}</h1>
      </header>
    </div>
  );
};

export default App;
