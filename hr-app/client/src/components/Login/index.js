import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { login } from '../../actions';

export default function LoginDialog(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { open, setUser } = props;

    const loginUser = async () => {
        const user = await login(email, password);
        if (user) {
            setUser(user[0]);
        }
    };
    return (
        <Dialog open={open} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To Login to this app, please enter your email address and
                    password here.
                </DialogContentText>
                <TextField
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                    onChange={(e) => setPassword(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={loginUser}>
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    );
}
