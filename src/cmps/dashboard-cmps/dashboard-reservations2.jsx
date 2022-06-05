import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];
const reservations =[]

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
      id: 'check-in',
      numeric: true,
      disablePadding: false,
      label: 'Check-in',
  },
  {
      id: 'check-out',
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
      id: 'listing',
      numeric: false,
      disablePadding: false,
      label: 'Listing',
  },
  {
      id: 'total-payout',
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

export const DashboardReservations=() =>{
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });
  console.log('data',data);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid {...data} />
    </div>
  );
}
