const ReportSection = ({timeframe, setTimeframe, currentUserData}) => {
    return (
        <div className="report-section">
        <div className="container">
            <div className="report-info">
                <div className="report-image">
                    <img src={currentUserData.pp_url} alt="" />
                </div>
                <div className="report-details">
                    <p>Report for</p>
                    <h1>{currentUserData.user_name}</h1>
                </div>
            </div>
            <div className="report-filter">
                <button className={timeframe==='daily' ? 'selected' : null}
                        onClick={() => setTimeframe('daily')}>Daily</button>
                <button className={timeframe==='weekly' ? 'selected' : null}
                        onClick={() => setTimeframe('weekly')}>Weekly</button>
                <button className={timeframe==='monthly' ? 'selected' : null}
                        onClick={() => setTimeframe('monthly')}>Monthly</button>
            </div>
        </div>
    </div>
    );
}

export default ReportSection;