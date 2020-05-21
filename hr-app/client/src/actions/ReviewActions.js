import axios from 'axios';

export const listAllReviews = async () => {
    const res = await axios.get(`/review`);
    if (res.status === 200) {
        return res.data;
    }
};

export const updateReview = async (
    id,
    {
        jobKnowledge,
        workQuality,
        attendance,
        initiative,
        communication,
        dependibility,
    },
) => {
    const res = await axios.put(`/review/${id}`, {
        jobKnowledge,
        workQuality,
        attendance,
        initiative,
        communication,
        dependibility,
    });
    if (res.status === 204) {
        return true;
    }
};
