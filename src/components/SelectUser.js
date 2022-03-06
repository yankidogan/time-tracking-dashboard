const SelectUser = ({userData, currentReportId, setCurrentReportId}) => {

    const userChange = (event) => {
        const newUserId = event.target.value;
        console.log({newUserId});
        setCurrentReportId(newUserId);
    }

    return(
        <div className="select-user">
            <select className="select-user-dropdown" value={currentReportId} onChange={userChange}>
                {userData.map(u => 
                    <option key={u.id} value={u.id}>{u.name}</option>
                )}
            </select>
        </div>
    );

}

export default SelectUser;