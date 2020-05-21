import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import EmployeePage from '../Employee';
import ReviewPage from '../Review';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <div>{children}</div>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabs: {
        flexGrow: 1,
    },
    notPermitted: {
        display: 'flex',
        height: '70vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function HomeTabs(props) {
    const { user, logout } = props;
    const classes = useStyles();
    const [value, setValue] = React.useState(user.role === 'admin' ? 0 : 1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        className={classes.tabs}
                        aria-label="simple tabs example"
                        edge="start"
                    >
                        <Tab
                            disabled={user.role !== 'admin'}
                            label="Employee"
                            {...a11yProps(0)}
                        />

                        <Tab
                            disabled={
                                user.role !== 'admin' &&
                                user.role !== 'reviewer'
                            }
                            label="Review"
                            {...a11yProps(1)}
                        />
                    </Tabs>
                    <span>{user.email}</span>
                    <IconButton onClick={() => logout()}>
                        <ExitToAppIcon color="secondary" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {user.role === 'admin' ? (
                <TabPanel value={value} index={0}>
                    <EmployeePage user={user} />
                </TabPanel>
            ) : null}
            {user.role === 'admin' || user.role === 'reviewer' ? (
                <TabPanel value={value} index={1}>
                    <ReviewPage user={user} />
                </TabPanel>
            ) : (
                <div className={classes.notPermitted}>
                    <span>You don't have permission to this application</span>
                </div>
            )}
        </div>
    );
}
