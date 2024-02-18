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

  const possibleHPQuestions = [
    ["$100", "Wakinda is doing a campaign that promotes Hepatitis A vaccine use. However, the vaccines they promote are very expensive, violating this ethical consideration", "Equity"],
    ["$200", "Aurora and her boyfriend Gregorio saw a poster promoting a healthy restaurant, called the Gigantic Organic Eating House, which features cancer-preventing organic food, or so the poster claimed. They then decided to go there for their first date. The first thing they noticed as they walked in was that the menu was missing nutritional content for each of the foods listed, violating this requirement:", "Menu labelling"],
    ["$300", "Millie, Geo, and Bot decided to create a Youtube channel called Luh Smokerz. They create YouTube videos about the dangers of tobacco consumption. Their initiatives most closely resemble this health promotion campaign", "TRUTH campaign"],
    ["$400", "Jimba, a popular character in a TV show called The Driving Sigmas, is known for his reckless driving. Over several episodes, he gradually adopts safer driving habits, exemplifying this health promotion method:", "Sabido Method"],
    ["$500", " Lechuckina, a poor obese man, just watched an advertisement from a company, called the O.B. City, promoting exercise. The video entailed an obese person working out using an exercise plan from the company. Lechuckina felt upset and called out after the ad, a result of the company violating this ethical consideration", "Stigmatization"],
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
            <GridItem params={possibleHPQuestions[0]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleHPQuestions[1]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleHPQuestions[2]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleHPQuestions[3]} onRecord={handleRecord}></GridItem>
            <GridItem params={possibleHPQuestions[4]} onRecord={handleRecord}></GridItem>
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
