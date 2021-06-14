import axios from 'axios';

export default axios.create({
    baseURL: `https://api.pexels.com`,
    headers: {
        Authorization: '563492ad6f9170000100000128b07f5c554d4db187d82cec30ba79cf'
    }

    //563492ad6f91700001000001927c79f1b1dd445aa14fee7b9150cc15
});