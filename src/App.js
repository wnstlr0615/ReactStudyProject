import React from 'react';
import Hello from './Hello';
import './App.css'
import Wrapper from './Wrapper';
import Test from './Test';

function App() {
  return (
  <>
    <Wrapper>
        <Hello name="react" color="red" isSpecial/> {/*isSpecial={true} 와 같음*/}
        <Hello  color="pink"/>
    </Wrapper>
    <Test/>
  </>
  );
}

export default App;
