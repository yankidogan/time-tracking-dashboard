import getUsers from './services/user';
import getReportData from './services/report';
import { useState, useEffect } from 'react';
import './styles/main.css';
import SelectUser from './components/SelectUser';
import ReportSection from './components/ReportSection';
import DashboardElement from './components/DashboardElement';
import Loading from './components/Loading';
import ErrorPrompt from './components/ErrorPrompt';

function App() {

  const [currentUserId, setCurrentUserId] = useState('1');
  const [timeframe, setTimeframe] = useState('weekly');
  const [userData, setUserData] = useState([]);
  const [reportData, setReportData] = useState([]); //I use this as a cache to keep the fetched data, to prevent re-fetching them everytime
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchInitialData = async () => {
      try{
        const fetchedUsers = await getUsers();
        const fetchedReportData = await getReportData(currentUserId);
        setUserData(fetchedUsers);
        setReportData(reportData.concat(fetchedReportData));
      }
      catch(err) {
        setErrorMessage(err.message);
      }
    }
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchReportData = async (userId) => {
      try{
        const fetchedReportData = await getReportData(userId);
        setReportData(reportData.concat(fetchedReportData));
      }
      catch (err) {
        setErrorMessage(err.message);
      }
    }
    const cachedIds = reportData.map(r => r.id);
    if(!cachedIds.includes(currentUserId)){
      fetchReportData(currentUserId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUserId])

    const currentUserData = userData.find(u => u.id === currentUserId);

    const currentReportData = reportData.find(r => r.id === currentUserId);

    if(errorMessage) {
      return (
        <div className="dashboard-main">
          <ErrorPrompt message={errorMessage} />
        </div>
      )
    }

    else if(currentUserData && currentReportData){
  
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
