import { DataGrid } from '@mui/x-data-grid';

const columns = [
	{ field: 'add', headerName: 'Address', width: 200 },
	{ field: 'tra', headerName: 'Transaction', width: 200 },
	{ field: 'amt', headerName: 'Amount', width: 200 },
];

const rows = [
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },
	{ id: 1, add: '0x23082424242424', tra: '0x23082424242424 To 0x23082434352424', amt: '2 ETH' },

];

function LatestTransactions(props) {

	return (
		<DataGrid
			sx={props.sx}
			borderWidth={0}
			headerHeight={0}
			hideFooter={'true'}
			disableColumnFilter={'true'}
			disableColumnMenu={'true'}
			disableSelectionOnClick={'true'}
			rows={rows}
			columns={columns}
		/>
	);
};

export default LatestTransactions;
