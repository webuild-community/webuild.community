import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default App;

if (typeof document !== 'undefined') {
  const render = Comp => {
    ReactDOM.render(<Comp />, document.getElementById('root'));
  };
  render(App);
  if (module.hot) {
    module.hot.accept('./App', () => render(require('./App').default));
  }
}
