import { Box, Grid, Paper } from '@mui/material';
import ethereumSvg from '../../assets/ethereum-1.svg';
import marketCapSvg from '../../assets/icon-8.svg';
import transactionsSvg from '../../assets/icon-2-1.svg';
import difficultySvg from '../../assets/icon-51.svg';
import Chart from './Chart';

var InfoItem = (props) => {
	return (
		<Grid
			container
			direction="row"
			justifyContent="space-between"
			alignItems="center"
		>
			{Array.isArray(props.children) ? props.children.map((item, index) => {
				return (
					<Grid item xs={12} md={12 / props.children.length}>
						{item}
					</Grid>
				);
			})
				: props.children ?
					<Grid item>
						{props.children}
					</Grid>
					:
					<></>
			}
		</Grid>
	);
};

var SubInfoItem = (props) => {

	return (
		< Grid container spacing={1}>
			<Grid item>
				{props.image}
			</Grid>
			<Grid item xs={12} sm container>
				<Grid item xs={12}>
					{props.title}
				</Grid>
				<Grid item xs={12}>
					{props.info}
				</Grid>
			</Grid>
		</Grid >
	);
};

function Overview() {

	return (
		<Grid container>
			<Grid item xs={12} md={4} container>
				<Grid item xs={12} md={12} height={70} display='flex' alignItems='center'>
					<InfoItem>
						<SubInfoItem
							image={
								<img
									src={ethereumSvg}
									height={35}
								/>
							}
							title={<Box sx={{
								display: 'flex',
								fontSize: 12,
								justifyContent: 'flex-start',
								color: 'gray',
								paddingBottom: 0.5
							}}>
								{'ETHER PRICE'}
							</Box>}
							info={
								<Box sx={{
									display: 'flex',
									fontSize: 14,
									justifyContent: 'flex-start',
									fontWeight: 'bold'
								}}>
									{'$2,940.010 @ 0.06721 BTC (-0.26%)'}
								</Box>}
						/>
					</InfoItem>
				</Grid>
				<Grid item xs={12} md={12} height={70} display='flex' alignItems='center'>
					<InfoItem>
						<SubInfoItem
							image={
								<img
									src={marketCapSvg}
									height={35}
								/>
							}
							title={<Box sx={{
								display: 'flex',
								fontSize: 12,
								justifyContent: 'flex-start',
								color: 'gray'
							}}>
								{'MARKET CAP'}
							</Box>}
							info={
								<Box sx={{
									display: 'flex',
									fontSize: 14,
									justifyContent: 'flex-start',
									fontWeight: 'bold'
								}}>
									{'$347,902,583,746.00'}
								</Box>}
						/>
					</InfoItem>
				</Grid>
			</Grid>
			<Grid item xs={12} md={4} container>
				<Grid item xs={12} md={12} height={70} display='flex' alignItems='center'>
					<InfoItem>
						<SubInfoItem
							image={
								<img
									src={transactionsSvg}
									height={35}
								/>
							}
							title={<Box sx={{
								display: 'flex',
								fontSize: 12,
								justifyContent: 'flex-start',
								color: 'gray',
								paddingBottom: 0.5
							}}>
								{'TRANSACTIONS'}
							</Box>}
							info={
								<Box sx={{
									display: 'flex',
									fontSize: 14,
									justifyContent: 'flex-start',
									fontWeight: 'bold'
								}}>
									{'1,489.98 M (13.9 TPS)'}
								</Box>}
						/>
						<SubInfoItem
							title={<Box sx={{
								display: 'flex',
								fontSize: 12,
								justifyContent: 'flex-end',
								color: 'gray',
								paddingBottom: 0.5
							}}>
								{'MED GAS PRICE'}
							</Box>}
							info={
								<Box sx={{
									display: 'flex',
									fontSize: 14,
									justifyContent: 'flex-end',
									fontWeight: 'bold'
								}}>
									{'79 Gwei ($4.88)'}
								</Box>}
						/>
					</InfoItem>
				</Grid>
				<Grid item xs={12} md={12} height={70} display='flex' alignItems='center'>
					<InfoItem>
						<SubInfoItem
							image={
								<img
									src={difficultySvg}
									height={35}
								/>
							}
							title={<Box sx={{
								display: 'flex',
								fontSize: 12,
								justifyContent: 'flex-start',
								color: 'gray',
								paddingBottom: 0.5
							}}>
								{'HASH RATE'}
							</Box>}
							info={
								<Box sx={{
									display: 'flex',
									fontSize: 14,
									justifyContent: 'flex-start',
									fontWeight: 'bold'
								}}>
									{'12,902.81 TH'}
								</Box>}
						/>
						<SubInfoItem
							title={<Box sx={{
								display: 'flex',
								fontSize: 12,
								justifyContent: 'flex-end',
								color: 'gray',
								paddingBottom: 0.5
							}}>
								{'DIFFICULTY'}
							</Box>}
							info={
								<Box sx={{
									display: 'flex',
									fontSize: 14,
									justifyContent: 'flex-end',
									fontWeight: 'bold'
								}}>
									{'1,030,844.72 GH/s'}
								</Box>}
						/>
					</InfoItem>
				</Grid>
			</Grid>
			<Grid item xs={12} md={4} height={100}>
                  <Chart />
			</Grid>
		</Grid>
	);
};
//1,030,844.72 GH/s
export default Overview;
