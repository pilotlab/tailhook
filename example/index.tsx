import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useLocalStorage } from '../.';

const App = () => {
  const [potatoes] = useLocalStorage('potatoes')('5');
  return <div>{potatoes}</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
