import logo from './logo.svg';
import './App.css';

import GridItem from './GridItem';
import { useState } from 'react';

function App() {

  const possibleQuestions = [["$100", "Who is biden?", "the president"]]

  return (
    <div className="App">
        <div className='jeopardyGridContainer'>
          <div className='jeopardyGridWrapper'>
            <div className='gridGroup'>
              <div className='groupTitle'>Title</div>
            <GridItem params={possibleQuestions[0]}></GridItem>
            <GridItem params={possibleQuestions[0]}></GridItem>
            <GridItem params={possibleQuestions[0]}></GridItem>
            </div>
            <div className='gridGroup'>
            <div className='groupTitle'>Title</div>
            <GridItem params={possibleQuestions[0]}></GridItem>
            <GridItem params={possibleQuestions[0]}></GridItem>
            <GridItem params={possibleQuestions[0]}></GridItem>
            </div>
            <div className='gridGroup'>
            <div className='groupTitle'>Title</div>
            <GridItem params={possibleQuestions[0]}></GridItem>
            <GridItem params={possibleQuestions[0]}></GridItem>
            <GridItem params={possibleQuestions[0]}></GridItem>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
