import { DataGrid } from '@mui/x-data-grid';

const columns = [
	{ field: 'blk', headerName: 'Block', width: 200 },
	{ field: 'min', headerName: 'Miner', width: 200 },
	{ field: 'rew', headerName: 'Block Reward', width: 200 },
];

const rows = [
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
	{ id: 1, blk: '1230293', min: '0x23082424242424', rew: '2 ETH' },
];

function LatestBlocks(props) {

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

export default LatestBlocks;
