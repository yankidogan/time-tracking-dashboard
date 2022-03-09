import axios from 'axios';
import config from '../config';

const getUsers = async () => {
    try{
        const response = await axios.get(config.api.getUsers);
        return response.data.Items;
    }
    catch(err){
        throw err
    }
}

export default getUsers;