import { Grid, Paper, Container } from '@mui/material';
import Overview from './Overview';
import LatestBlocks from './LatestBlocks';
import LatestTransactions from './LatestTransactions';

function Body() {
	return (
		<div>
			<Container maxWidth='xl' sx={{ mt: 4, mb: 4 }}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
							<Overview />
						</Paper>
					</Grid>
					<Grid item xs={12} md={6} lg={6}>
						<Paper
							sx={{
								p: 2,
								display: 'flex',
								flexDirection: 'column',
								height: 400,
							}}
						>
							<p
								style={{
									alignSelf: 'flex-start',
									margin: 0,
									paddingBottom: 15,
									fontWeight: 'bold',
									fontSize: 14
								}}
							>Latest Blocks</p>
							<LatestBlocks sx={{
								p: 2,
								display: 'flex',
								flexDirection: 'column',
								height: 240,
							}} />
						</Paper>
					</Grid>
					<Grid item xs={12} md={6} lg={6}>
						<Paper
							sx={{
								p: 2,
								display: 'flex',
								flexDirection: 'column',
								height: 400,
							}}
						>
							<p
								style={{
									alignSelf: 'flex-start',
									margin: 0,
									paddingBottom: 15,
									fontWeight: 'bold',
									fontSize: 14
								}}
							>Latest Transsactions</p>
							<LatestTransactions sx={{
								p: 2,
								display: 'flex',
								flexDirection: 'column',
								height: 240,
							}} />
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Body;
