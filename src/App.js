import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoMVC from './views/TodoMVC';
function App() {
  return (
    <RecoilRoot>
      <TodoMVC />
    </RecoilRoot>
  );
}

export default App;
