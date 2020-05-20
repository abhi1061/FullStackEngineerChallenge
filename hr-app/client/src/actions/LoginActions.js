import axios from 'axios';

export const login = async (email, password) => {
    const res = await axios.post(`/user/login`, { email, password });
    if (res.status === 200) {
        return res.data;
    }
};
