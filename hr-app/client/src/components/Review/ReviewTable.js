import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/RateReview';

import { getComparator, stableSort } from '../TableHelper';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

const headCells = [
    {
        id: 'name',
        numeric: false,
        label: 'Employee Name',
    },
    {
        id: 'department',
        numeric: false,
        label: 'Department',
    },
    { id: 'post', numeric: false, disablePadding: false, label: 'Post' },
    {
        id: 'jobKnowledge',
        numeric: true,
        label: 'Job Knowledge',
    },
    {
        id: 'workQuality',
        numeric: true,
        label: 'Work Quality',
    },
    {
        id: 'attendance',
        numeric: true,
        label: 'Attendance',
    },
    {
        id: 'initiative',
        numeric: true,
        label: 'Initiative',
    },
    {
        id: 'communication',
        numeric: true,
        label: 'Communication',
    },
    {
        id: 'dependibility',
        numeric: true,
        label: 'Dependibility',
    },
];

function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort, user } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding='default'
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc'
                                        ? 'sorted descending'
                                        : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                {user.role === 'admin' || user.role === 'reviewer' ? (
                    <TableCell></TableCell>
                ) : null}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable(props) {
    const { data, user, setReview, setShowReviewModal } = props;
    const classes = useStyles();
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState('department');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleEdit = (row) => {
        setReview(row);
        setShowReviewModal(true);
    };

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size="medium"
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={data.length}
                            user={user}
                        />
                        <TableBody>
                            {stableSort(data, getComparator(order, orderBy))
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage,
                                )
                                .map((row, index) => {
                                    return (
                                        <TableRow
                                            hover
                                            tabIndex={-1}
                                            key={row._id}
                                        >
                                            <TableCell
                                                component="th"
                                                id={index}
                                                scope="row"
                                                padding="default"
                                            >
                                                {row.employee.name}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.employee.department}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.employee.post}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.jobKnowledge * 20}
                                                {'%'}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.workQuality * 20}
                                                {'%'}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.attendance * 20}
                                                {'%'}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.initiative * 20}
                                                {'%'}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.communication * 20}
                                                {'%'}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.dependibility * 20}
                                                {'%'}
                                            </TableCell>
                                            {user.role === 'admin' ||
                                            user.role === 'reviewer' ? (
                                                <TableCell>
                                                    <IconButton
                                                        onClick={() => {
                                                            handleEdit(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                </TableCell>
                                            ) : null}
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 53 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={12} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}
