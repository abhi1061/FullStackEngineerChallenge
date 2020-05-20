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

export const editEmployee = async (id, { name, email, department, post }) => {
    const res = await axios.put(`/employee/${id}`, {
        name,
        email,
        department,
        post,
    });
    if (res.status === 200) {
        return res.data;
    }
};
