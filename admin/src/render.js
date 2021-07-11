import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

const rerenderEntireTree = (state, f1, f2, f3, f4) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addUser={f1}
        deleteUser={f2}
        addProduct={f3}
        removeProduct={f4}
      />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

export { rerenderEntireTree };
