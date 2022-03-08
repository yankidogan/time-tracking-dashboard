import getUsers from './services/user';
import getReportData from './services/report';
import { useState, useEffect } from 'react';
import './styles/main.css';
import SelectUser from './components/SelectUser';
import ReportSection from './components/ReportSection';
import DashboardElement from './components/DashboardElement';
import Loading from './components/Loading';

function App() {

  const [currentUserId, setCurrentUserId] = useState('1');
  const [timeframe, setTimeframe] = useState('weekly');
  const [userData, setUserData] = useState([]);
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const fetchedUsers = await getUsers();
      const fetchedReportData = await getReportData(currentUserId);
      setUserData(fetchedUsers);
      setReportData(reportData.concat(fetchedReportData));
    }
    fetchInitialData();
  }, []);

  useEffect(() => {
    const fetchReportData = async (userId) => {
      const fetchedReportData = await getReportData(userId);
      setReportData(reportData.concat(fetchedReportData));
    }
    const cachedIds = reportData.map(r => r.id);
    if(!cachedIds.includes(currentUserId)){
      fetchReportData(currentUserId);
    }
  }, [currentUserId])

    const currentUserData = userData.find(u => u.id === currentUserId);

    const currentReportData = reportData.find(r => r.id === currentUserId);

    if(currentUserData && currentReportData){
  
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
  
    const filteredData = currentReportData.report_data.map(d => {
      return ({
        title: d.title,
        previous_text: previousText,
        current: d.timeframes[timeframe].current,
        previous: d.timeframes[timeframe].previous
      })
    });
    return (
      <div className="dashboard-main">
        <SelectUser userData={userData} currentReportId={currentUserId} setCurrentUserId={setCurrentUserId} />
      <div className='main-container'>
        <ReportSection timeframe={timeframe} setTimeframe={setTimeframe} currentUserData={currentUserData} />
        {filteredData.map((f, i) =>
          <DashboardElement key={i} elementData={f} />
        )}
      </div>
      </div>
    );
  }
    return (
      <div className="dashboard-main">
      <Loading />
      </div>
    )
  
}

export default App;
