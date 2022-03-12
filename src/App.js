import data from './data/data';
import { useState } from 'react';
import './styles/main.css';
import ReportSection from './components/ReportSection';
import DashboardElement from './components/DashboardElement';

function App() {

  const [timeframe, setTimeframe] = useState('weekly');

  let previousText = '';
  switch (timeframe) {
    case 'daily':
      previousText = 'Yesterday'
      break;
    case 'monthly':
      previousText = 'Last Month'
      break;
    default:
      previousText = 'Last Week'
      break;
  }

  const filteredData = data.map(d => {
    return ({
      title: d.title,
      previous_text: previousText,
      current: d.timeframes[timeframe].current,
      previous: d.timeframes[timeframe].previous
    })
  });

  return (
    <div className='main-container'>
      <ReportSection timeframe={timeframe} setTimeframe={setTimeframe} />
      {filteredData.map((f, i) =>
        <DashboardElement key={i} elementData={f} />
      )}
    </div>
  );

}

export default App;
