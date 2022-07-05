
import * as React from 'react'
import PropTypes from 'prop-types'
import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import DeleteIcon from '@mui/icons-material/Delete'
import FilterListIcon from '@mui/icons-material/FilterList'
import { StatusActionSelect } from './status-action-select'
import { visuallyHidden } from '@mui/utils'
import { reservationService } from '../../services/reservation.service'
import { utilService } from '../../services/util.service'

import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Loader } from '../general-cmps/loader'
import { useSelector } from 'react-redux'

const themeHeader = createTheme({
    typography: {
        fontFamily: 'cereal-medium'

    },
});
const theme = createTheme({
    typography: {
        fontFamily: 'cereal-book'

    },
});





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
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) {
            return order
        }
        return a[1] - b[1]
    });
    return stabilizedThis.map((el) => el[0])
}

const headCells = [
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
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
        numeric: true,
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
        label: 'Action',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property)
    }

    return (
        <ThemeProvider theme={themeHeader}>
            <TableHead>
                <TableRow>
                    {/* <TableCell padding="checkbox">
                        <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                    </TableCell> */}
                    {headCells.map((headCell) => (
                        <TableCell
                            key={headCell.id}
                            // align={headCell.numeric ? 'right' : 'left'}
                            align={headCell.id === 'action' ? 'right' : 'left'}
                            // align={'left'}
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
        </ThemeProvider>
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
    const { numSelected } = props

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
    )
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export const DashboardReservations = () => {
    const [order, setOrder] = React.useState('asc')
    const [orderBy, setOrderBy] = React.useState('calories')
    const [selected, setSelected] = React.useState([])
    const [page, setPage] = React.useState(0)
    const [dense, setDense] = React.useState(false)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [reservations, setReservation] = React.useState(null)

    const { user } = useSelector(storeState => storeState.userModule)
    




    React.useEffect(() => {
        if (!user) return
        loadReservations()

    }, [user])

    // const onReservationReceive = () => {
    //     loadReservations()
    // }

    const loadReservations = async () => {
        const hostReservations = await reservationService.query({ hostId: user._id })


        setReservation(hostReservations)

    }

    const handleRequestSort = (event, property) => {

        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = reservations.map((r) => r.listingName);
            setSelected(newSelecteds)
            return
        }
        setSelected([])
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name)
        let newSelected = []

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name)
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1))
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1))
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected)
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked)
    };


    const isSelected = (name) => selected.indexOf(name) !== -1

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - reservations.length) : 0

    const dateToDisplay = (reservationDate) => {
        const dateToDisplay = new Date(reservationDate).toLocaleDateString('en-us', { day: "numeric", month: "short", year: "numeric" })
        return dateToDisplay
    }

    if (!reservations) return <Loader/>
    return (
        <section className="dashboard-reservations">
            <h2>Reservations</h2>
            <ThemeProvider theme={theme}>
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
                                                    // onClick={(event) => handleClick(event, reservation.listingName)}
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={reservation._id}
                                                    selected={isItemSelected}
                                                >
                                                    {/* <TableCell padding="checkbox">
                                                        <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                                    </TableCell> */}
                                                    <TableCell
                                                        component="th"
                                                        id={labelId}
                                                        scope="row"
                                                        padding="none"
                                                    >

                                                        <span className={`reservation-status-table-head capital ${reservation.status}`}>{reservation.status}</span>
                                                    </TableCell>
                                                    <TableCell align="left">{reservation.guests}</TableCell>
                                                    {/* <TableCell align="left">{reservation.guests}</TableCell> */}
                                                    <TableCell align="left">{utilService.getDateToDisplay(reservation.checkIn)}</TableCell>
                                                    <TableCell align="left">{utilService.getDateToDisplay(reservation.checkOut)}</TableCell>
                                                    <TableCell align="left">{utilService.getDateToDisplay(reservation.bookedAt)}</TableCell>
                                                    <TableCell align="left">{reservation.listingName}</TableCell>
                                                    <TableCell align="left">${utilService.getPriceWithCommas(reservation.totalPrice)}</TableCell>
                                                    <TableCell align="right"><StatusActionSelect reservation={reservation} loadReservations={loadReservations} /></TableCell>
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
            </ThemeProvider>
        </section>
    );
}

