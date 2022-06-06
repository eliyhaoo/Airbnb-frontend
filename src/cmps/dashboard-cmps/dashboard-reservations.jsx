
import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { StatusActionSelect } from './status-action-select';
import { visuallyHidden } from '@mui/utils';
import { reservationService } from '../../services/reservation.service';
import { socketService, SOCKET_ON_RESERVATION_RECEIVED } from '../../services/socket.service'


// const reservations =   [
//     {
//         "_id": "61f907caa7cf85901696d591",
//         "hostId": "61f3b204da15b10b906xxe58",
//         "buyerId": "61f3b2ddd995b10b90629e59",
//         "stayId": "61ef1c92652f5891aa7bc38a",
//         "listingName":"1 BR bla bla",
//         "totalPrice": 2822.8,
//         "dates": {
//             "checkIn": "may-02",
//             "checkOut": "may-05"
//         },
//         "guests": {
//             "total": 6,
//             "adults": 4,
//             "children": 2,
//             "infants": 0
//         },
//         "status": "Approved"
//     },
//     {
//         "_id": "61f907caa7cf680016974491",
//         "hostId": "61f3b204da18510b90629e58",
//         "buyerId": "61f3b5ddda15b10b90629e59",
//         "stayId": "61ef1c92652f5891aa7bc38a",
//         "listingName":"3 BR bla bla",
//         "totalPrice": 1582,
//         "dates": {
//             "checkIn": "may-02",
//             "checkOut": "may-05"
//         },
//         "guests": {
//             "total": 3,
//             "adults": 1,
//             "children": 2,
//             "infants": 0
//         },
//         "status": "pending"
//     },
//     {
//         "_id": "61f907caa7cf36501696d591",
//         "hostId": "61f3b204da17410b90629e58",
//         "buyerId": "6173b2ddda15b10b90629e59",
//         "stayId": "61ef1c92652f5891aa7bc38a",
//         "listingName":"2 BR blsaassasa bla",
//         "totalPrice": 745,
//         "dates": {
//             "checkIn": "",
//             "checkOut": ""
//         },
//         "guests": {
//             "total": 2,
//             "adults": 2,
//             "children": 0,
//             "infants": 0
//         },
//         "status": "Approved"
//     },
//     {
//         "_id": "968907caa7cf68014296d591",
//         "hostId": "61f3b2048515b10b90629e58",
//         "buyerId": "61f3b2ddda15b10b92029e59",
//         "stayId": "61ef1c92652f5891aa7bc38a",
//         "listingName":"2 BR bla bla",
//         "totalPrice": 745,
//         "dates": {
//             "checkIn": "may-02",
//             "checkOut": "may-05"
//         },
//         "guests": {
//             "total": 8,
//             "adults": 6,
//             "children": 1,
//             "infants": 1
//         },
//         "status": "Approved"
//     },
//     {
//         "_id": "61f90789a7cf68001696c591",
//         "hostId": "61f3b204da15b12090629e58",
//         "buyerId": "61f3b2dd7715b10b90629e59",
//         "stayId": "61ef1c92652f5891aa7bc38a",
//         "listingName":"9 BR bla bla",
//         "totalPrice": 745,
//         "dates": {
//             "checkIn": "may-02",
//             "checkOut": "may-05"
//         },
//         "guests": {
//             "total": 3,
//             "adults": 2,
//             "children": 0,
//             "infants": 1
//         },
//         "status": "Approved"
//     },
//     {
//         "_id": "61f90789a7cf68001696c552",
//         "hostId": "61f3b2049815b10b90629e58",
//         "buyerId": "61f3b263da15b10b90629e59",
//         "stayId": "61ef1c92652f5891aa7bc38a",
//         "listingName":"3 BR 232 bla bla",
//         "totalPrice": 745,
//         "dates": {
//             "checkIn": "",
//             "checkOut": ""
//         },
//         "guests": {
//             "total": 1,
//             "adults": 1,
//             "children": 0,
//             "infants": 0
//         },
//         "status": "Approved"
//     },
//     {
//         "_id": "61f907caacc468001696d591",
//         "hostId": "61f3b2055a15b10b90629e58",
//         "buyerId": "61f3bbbdda15b10b90629e59",
//         "stayId": "61ef1c92652f5891aa7bc38a",
//         "listingName":"1333 BR bla bla",
//         "totalPrice": 745,
//         "dates": {
//             "checkIn": "",
//             "checkOut": ""
//         },
//         "guests": {
//             "total": 4,
//             "adults": 2,
//             "children": 2,
//             "infants": 0
//         },
//         "status": "Approved"
//     },
//     {
//         "_id": "61f907cac7cf68001696d591",
//         "hostId": "61f3b204da15b10550629e58",
//         "buyerId": "61f3bsddda15b10b90629e59",
//         "stayId": "61ef1c92652f5891aa7bc38a",
//         "listingName":"33 BR bla2222 bla",
//         "totalPrice": 745,
//         "dates": {
//             "checkIn": "",
//             "checkOut": ""
//         },
//         "guests": {
//             "total": 3,
//             "adults": 2,
//             "children": 1,
//             "infants": 0
//         },
//         "status": "Approved"
//     },
//     {
//         "_id": "61f907caa72228001696d591",
//         "hostId": "61f31104da15b10b90629e58",
//         "buyerId": "61f3b2dd8815b10b90629e59",
//         "stayId": "61ef1c92652f5891aa7bc38a",
//         "listingName":"333332 BR23 bla bla",
//         "totalPrice": 745,
//         "dates": {
//             "checkIn": "",
//             "checkOut": ""
//         },
//         "guests": {
//             "total": 5,
//             "adults": 2,
//             "children": 3,
//             "infants": 0
//         },
//         "status": "Approved"
//     }
// ]



function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {

    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'status',
        numeric: false,
        disablePadding: true,
        label: 'Status',
    },
    {
        id: 'guests',
        numeric: true,
        disablePadding: false,
        label: 'Guests',
    },
    {
        id: 'checkIn',
        numeric: true,
        disablePadding: false,
        label: 'Check-in',
    },
    {
        id: 'checkOut',
        numeric: true,
        disablePadding: false,
        label: 'Check-out',
    },
    {
        id: 'booked',
        numeric: true,
        disablePadding: false,
        label: 'Booked',
    },
    {
        id: 'listingName',
        numeric: false,
        disablePadding: false,
        label: 'Listing',
    },
    {
        id: 'totalPrice',
        numeric: true,
        disablePadding: false,
        label: 'Total Payout',
    },
    {
        id: 'action',
        numeric: false,
        disablePadding: false,
        label: 'action',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        console.log('Property go to sort', property);
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Nutrition
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export const DashboardReservations = () => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [reservations, setReservation] = React.useState(null);

    const user = {
        _id: '629dbc94388d60172ca60aeb',
        imgUrl: 'https://res.cloudinary.com/dys1y33zj/image/upload/v1653814932/8_o4nctw.jpg',
        isHost: true,
        wishList: ['6297cb852f760e2ec9f8244b']
    }

    React.useEffect(() => {
        loadReservations()
        socketService.off(SOCKET_ON_RESERVATION_RECEIVED);
        socketService.on(SOCKET_ON_RESERVATION_RECEIVED, onReservationReceive);
        return () => {
            socketService.off(SOCKET_ON_RESERVATION_RECEIVED, loadReservations);

        }

    }, [])

    const onReservationReceive = (data) => {
        console.log('RECEIVEIVEIVIEIIEDDddsadsad');
        console.log('RECEIVEIVEIVIEIIEDD', data);
    }

    const loadReservations = async () => {
        const hostReservations = await reservationService.query({ hostId: user._id })
        console.log('HOST RESERVTATIONS', hostReservations);
        setReservation(hostReservations)

    }

    const handleRequestSort = (event, property) => {
        console.log('PROPA PROPRERRERTY', property);
        console.log('PROPA PROPRERRERTY evevnttentntte', event);
        const isAsc = orderBy === property && order === 'asc';
        console.log('IS ASCC BITCH', isAsc);
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = reservations.map((r) => r.listingName);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const onReserveClick = () => {

    }

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - reservations.length) : 0;

    if (!reservations) return <div className="loader"></div>
    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={reservations.length}
                        />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                            {stableSort(reservations, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((reservation, index) => {
                                    const isItemSelected = isSelected(reservation.listingName);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, reservation.listingName)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={reservation._id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {reservation.status}
                                            </TableCell>
                                            <TableCell align="right">{reservation.guests}</TableCell>
                                            <TableCell align="right">{reservation.checkIn}</TableCell>
                                            <TableCell align="right">{reservation.checkOut}</TableCell>
                                            <TableCell align="right">{'BOOKED AT'}</TableCell>
                                            <TableCell align="right">{reservation.listingName}</TableCell>
                                            <TableCell align="right">${reservation.totalPrice}</TableCell>
                                            <TableCell align="right"><StatusActionSelect currStatus={reservation.status} /></TableCell>
                                            {/* <TableCell align="right"> <button className='reservation-action-btn' onClick={onReserveClick}>ACTION HERE</button></TableCell> */}
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={reservations.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
        </Box>
    );
}

