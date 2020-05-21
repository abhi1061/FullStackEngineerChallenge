import axios from 'axios';

export const listEmplyees = async () => {
    const res = await axios.get(`/employee`);
    if (res.status === 200) {
        return res.data;
    }
};

export const createEmployee = async (data) => {
    const res = await axios.post(`/employee`, data);
    if (res.status === 201) {
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
    if (res.status === 204) {
        return true;
    }
};

export const updateUser = async (
    id,
    { email, password, role, accountType },
) => {
    const res = await axios.put(`/user/${id}`, {
        email,
        password,
        role,
        accountType,
    });
    if (res.status === 204) {
        return true;
    }
};

export const deleteEmployee = async (id) => {
    const res = await axios.delete(`/employee/${id}`);
    if (res.status === 204) {
        return true;
    }
};
