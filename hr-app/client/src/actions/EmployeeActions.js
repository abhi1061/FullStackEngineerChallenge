import axios from 'axios';

export const listEmplyees = async () => {
    const res = await axios.get(`/employee`);
    if (res.status === 200) {
        return res.data;
    }
};

export const createEmployee = async (data) => {
    const res = await axios.post(`/employee`, data);
    if (res.status === 200) {
        return res.data;
    }
};
