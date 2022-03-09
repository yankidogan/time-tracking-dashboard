import axios from 'axios';
import config from '../config';

const getReportData = async (id) => {
    try{
        const response = await axios.get(config.api.getReports+`/${id}`);
        return response.data.Item;
    }
    catch(err){
        throw err
    }
}

export default getReportData;