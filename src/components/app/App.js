import MainName from '../mainName/MainName';
import InputActivity from '../inputActivity/InputActivity';
import ResultSection from '../resultSection/ResultSection';

import '../style/index.css';

function App() {
  return (
    <div className="App">
      <>
        <MainName/>
        <InputActivity/>
        <ResultSection/>
      </>  
    </div>
  );
}

export default App;
