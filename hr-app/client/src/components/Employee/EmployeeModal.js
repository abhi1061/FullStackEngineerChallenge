import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
    const {
        showEmployeeModal,
        setShowEmployeeModal,
        employee,
        setEmployee,
        editMode,
        setEditMode,
    } = props;

    const handleClose = () => {
        setShowEmployeeModal(false);
        setEmployee({});
        setEditMode(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
    };
    return (
        <Dialog
            open={showEmployeeModal}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                {editMode ? 'Edit Employee' : 'Add New Employee'}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To add new employee, please enter below information.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="name"
                    label="Name"
                    fullWidth
                    value={employee.name || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email Address"
                    fullWidth
                    value={employee.email || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    id="department"
                    name="department"
                    label="Department"
                    fullWidth
                    value={employee.department || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    id="post"
                    name="post"
                    label="Post"
                    fullWidth
                    value={employee.post || ''}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    {editMode ? 'Edit' : 'Add'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
