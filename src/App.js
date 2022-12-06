import './App.css';
import bodyguard from './assets/avatar-bodyguard.svg';
import athlete from './assets/avatar-athlete.svg';
import Card from './components/Card';
import { Trans } from '@lingui/macro';
import { locales } from './localeLoader';

function App({locale, handleLocaleChange}) {
  const players = [
    {
      name: 'PlayerDude01',
      image: athlete,
      levelsPlayed: 5,
      highScore: 10,
      lastPlayed: new Date()
    },
    {
      name: 'QuizMaster',
      image: bodyguard,
      levelsPlayed: 1,
      highScore: 0,
      lastPlayed: new Date()
    } 
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p><Trans>Quiz</Trans></p>
      </header>
      <div>
        <h2><Trans>Statistics</Trans></h2>
          <select value={locale} onChange={ (e) => handleLocaleChange(e.target.value)}>
            {
              Object.keys(locales).map(function(localeKey) {
                return (
                  <option value={localeKey} key={localeKey}>{locales[localeKey]}</option>
                );
              })
            }
          </select>
          {
            players.map(function(player) {
              return (
                <Card player={player} key={player.name}/>
              );
            }
          )}
      </div>
    </div>
  );
}

export default App;
