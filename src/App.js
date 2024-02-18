import logo from './logo.svg';
import './App.css';

import GridItem from './GridItem';
import { useState } from 'react';

function App() {

  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [teamCScore, setTeamCScore] = useState(0);
  const [teamDScore, setTeamDScore] = useState(0);

  const possibleTermQuestions = [
    ["$100", "Who is biden?", "the president"],
    ["$200", "Who is biden?", "the president"],
    ["$300", "This is the belief that you can perform adequately in a particular situation", "Self-efficacy"],
    ["$400", "Who is biden?", "the president"],
    ["$500", "Who is biden?", "the president"],
  ]

  const possibleQuestions = [
    ["$100", "Who is biden?", "the president"],
    ["$200", "Who is biden?", "the president"],
    ["$300", "This is the belief that you can perform adequately in a particular situation", "Self-efficacy"],
    ["$400", "Who is biden?", "the president"],
    ["$500", "Who is biden?", "the president"],
  ]

  const handleRecord = (team, amt) => {
    console.log(team + " " + amt)
    if (team == 'a') {
      setTeamAScore(teamAScore + amt);
    }  else if (team == 'b') {
      setTeamBScore(teamBScore + amt);
    } else if (team == 'c') {
      setTeamCScore(teamCScore + amt);
    } else if (team == 'd') {
      setTeamDScore(teamDScore + amt);
    }
  }

  return (
    <div className="App">
        <div className='jeopardyGridContainer'>
          <div className='jeopardyGridWrapper'>
            <div className='gridGroup'>
              <div className='groupTitle'>Key Terms</div>
            <GridItem params={possibleTermQuestions[0]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleTermQuestions[1]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleTermQuestions[2]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleTermQuestions[3]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleTermQuestions[4]} onRecord={handleRecord}></GridItem>
            </div>
            <div className='gridGroup'>
            <div className='groupTitle'>Studies</div>
            <GridItem params={possibleQuestions[0]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[1]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[2]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[3]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[4]} onRecord={handleRecord}></GridItem>
            </div>
            <div className='gridGroup'>
            <div className='groupTitle'>Health Promotion Campaigns</div>
            <GridItem params={possibleQuestions[0]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[1]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[2]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[3]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[4]} onRecord={handleRecord}></GridItem>
            </div>
            <div className='gridGroup'>
            <div className='groupTitle'>Determinants of Health</div>
            <GridItem params={possibleQuestions[0]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[1]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[2]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[3]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[4]} onRecord={handleRecord}></GridItem>
            </div>
            <div className='gridGroup'>
            <div className='groupTitle'>Health Problems</div>
            <GridItem params={possibleQuestions[0]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[1]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[2]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[3]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleQuestions[4]} onRecord={handleRecord}></GridItem>
            </div>

            <div className='scoreDisplay'>Team A: ${teamAScore}</div>
            <div className='scoreDisplay'>Team B: ${teamBScore}</div>
            <div className='scoreDisplay'>Team C: ${teamCScore}</div>
            <div className='scoreDisplay'>Team D: ${teamDScore}</div>

          </div>
        </div>
    </div>
  );
}

export default App;
