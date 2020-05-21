import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ReviewControl from './ReviewControl';

export default function FormDialog(props) {
    const {
        review,
        setReview,
        showReviewModal,
        handleClose,
        reviewEmployee,
    } = props;
    const handleChange = (event) => {
        const { name, value } = event.target;
        setReview({ ...review, [name]: parseInt(value) });
    };
    return (
        <Dialog
            open={showReviewModal}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Employee Review</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To review folloing emplyee please select markings from below
                    categories.
                </DialogContentText>
                <hr />
                <DialogContentText>
                    {`Name: ${review.employee.name} Department: ${review.employee.department}`}
                </DialogContentText>
                <DialogContentText>
                    {`Post: ${review.employee.post}`}
                </DialogContentText>
                <hr />
                <DialogContentText>Job Knowledge</DialogContentText>
                <ReviewControl
                    name="jobKnowledge"
                    value={review.jobKnowledge.toString()}
                    handleChange={handleChange}
                />
                <hr />
                <DialogContentText>Work Quality</DialogContentText>
                <ReviewControl
                    name="workQuality"
                    value={review.workQuality.toString()}
                    handleChange={handleChange}
                />
                <hr />
                <DialogContentText>Attedance</DialogContentText>
                <ReviewControl
                    name="attendance"
                    value={review.attendance.toString()}
                    handleChange={handleChange}
                />
                <hr />
                <DialogContentText>Initiative</DialogContentText>
                <ReviewControl
                    name="initiative"
                    value={review.initiative.toString()}
                    handleChange={handleChange}
                />
                <hr />
                <DialogContentText>Communication</DialogContentText>
                <ReviewControl
                    name="communication"
                    value={review.communication.toString()}
                    handleChange={handleChange}
                />
                <hr />
                <DialogContentText>Dependibility</DialogContentText>
                <ReviewControl
                    name="dependibility"
                    value={review.dependibility.toString()}
                    handleChange={handleChange}
                />
                <hr />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => reviewEmployee()} color="primary">
                    Review
                </Button>
            </DialogActions>
        </Dialog>
    );
}
