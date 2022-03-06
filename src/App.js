import data from './data/data';
import { useState } from 'react';
import './styles/main.css';
import SelectUser from './components/SelectUser';
import ReportSection from './components/ReportSection';
import DashboardElement from './components/DashboardElement';

function App() {

  const [currentReportId, setCurrentReportId] = useState('1');
  const [timeframe, setTimeframe] = useState('weekly');

  const userData = data.map(d => {
    return {
      id: d.id,
      name: d.name,
    }
  });

  const currentData = data.find(d => d.id === currentReportId);

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

  const filteredData = currentData.report_data.map(d => {
    return ({
      title: d.title,
      previous_text: previousText,
      current: d.timeframes[timeframe].current,
      previous: d.timeframes[timeframe].previous
    })
  });

  return (
    <div className="dashboard-main">
      <SelectUser userData={userData} currentReportId={currentReportId} setCurrentReportId={setCurrentReportId} />
    <div className='main-container'>
      <ReportSection timeframe={timeframe} setTimeframe={setTimeframe} currentData={currentData} />
      {filteredData.map((f, i) =>
        <DashboardElement key={i} elementData={f} />
      )}
    </div>
    </div>
  );

}

export default App;
