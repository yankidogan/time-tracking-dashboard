import jeremyImage from '../images/image-jeremy.png';
const ReportSection = ({setTimeframe}) => {
    return (
        <div className="report-section">
        <div className="container">
            <div className="report-info">
                <div className="report-image">
                    <img src={jeremyImage} alt="" />
                </div>
                <div className="report-details">
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className="report-filter">
                <button onClick={() => setTimeframe('daily')}>Daily</button>
                <button onClick={() => setTimeframe('weekly')}>Weekly</button>
                <button onClick={() => setTimeframe('monthly')}>Monthly</button>
            </div>
        </div>
    </div>
    );
}

export default ReportSection;