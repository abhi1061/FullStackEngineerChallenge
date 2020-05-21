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
    await axios.put(`/employee/${id}`, {
        name,
        email,
        department,
        post,
    });
};

export const updateUser = async (
    id,
    { email, password, role, accountType },
) => {
    await axios.put(`/user/${id}`, {
        email,
        password,
        role,
        accountType,
    });
};

export const deleteEmployee = async (id) => {
    await axios.delete(`/employee/${id}`);
};
