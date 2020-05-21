import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import './review.css';
import { listAllReviews, updateReview } from '../../actions';
import ReviewTable from './ReviewTable';
import ReviewModal from './ReviewModal';

export default function Review(props) {
    const { user } = props;
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState({});
    const [showReviewModal, setShowReviewModal] = useState(false);

    useEffect(() => {
        async function fetchReviews() {
            const response = await listAllReviews();
            setReviews(response);
        }
        fetchReviews();
    }, []);

    const handleClose = () => {
        setShowReviewModal(false);
        setReview({});
    };

    const reviewEmployee = async () => {
        await updateReview(review._id, review);
        const newReviews = [...reviews];
        const index = _.findIndex(reviews, ['_id', review._id]);
        newReviews[index] = review;
        setReviews(newReviews);
        handleClose();
    };

    return (
        <div className="review-container">
            <ReviewTable
                data={reviews}
                user={user}
                setReview={setReview}
                setShowReviewModal={setShowReviewModal}
            />
            {showReviewModal && (
                <ReviewModal
                    review={review}
                    setReview={setReview}
                    showReviewModal={showReviewModal}
                    handleClose={handleClose}
                    reviewEmployee={reviewEmployee}
                />
            )}
        </div>
    );
}
