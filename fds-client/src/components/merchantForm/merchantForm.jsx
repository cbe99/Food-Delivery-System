import React, {useEffect, useState} from 'react';
import {
	Alert,
	Box,
	Button,
	Container,
	Grid,
	LinearProgress,
	Paper,
	Typography,
} from '@mui/material';
import {
	ResponsePaper,
	StyledButton,
	StyledFormField,
	StyledInfoAlertBox,
} from './merchantForm.styled';
import {useAddMerchantMutation} from '../../redux/api/apiSlice';

const MerchantForm = () => {
	const [restaurantName, setRestaurantName] = useState('');
	const [contactName, setContactName] = useState('');
	const [pincode, setPincode] = useState(0);
	const [location, setLocation] = useState('');
	const [website, setWebsite] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [averageDailyTransactions, setAverageDailyTransactions] = useState(0);
	const [showForm, setShowForm] = useState(true);
	const [responseData, setResponseData] = useState();

	const [
		addMerchant,
		{
			data: response,
			isSuccess: isAddMerchantSuccess,
			isLoading: isAddMerchantLoading,
			isError: isAddMerchantError,
			error: errorResponse,
		},
	] = useAddMerchantMutation();

	const handleSubmit = (event) => {
		event.preventDefault();
		addMerchant({
			restaurantName,
			contactName,
			pincode,
			location,
			website,
			phoneNumber,
			averageDailyTransactions,
		});
		setShowForm(false);
	};

	const handleGoToForm = () => {
		setShowForm(true);
		if (isAddMerchantSuccess) {
			handleClearForm();
		}
	};

	const handleClearForm = () => {
		setRestaurantName('');
		setContactName('');
		setPincode('');
		setLocation('');
		setWebsite('');
		setPhoneNumber('');
		setAverageDailyTransactions('');
	};

	useEffect(() => {
		if (isAddMerchantSuccess) {
			setResponseData(response);
		}
		if (isAddMerchantError) {
			setResponseData(errorResponse);
		}
	}, [isAddMerchantError, isAddMerchantSuccess, errorResponse, response]);

	const ShowResult = () => {
		return (
			<>
				{isAddMerchantLoading && <LinearProgress />}
				{isAddMerchantSuccess && (
					<Alert severity="success">
						<Typography variant="overline">
							Successfully added the merchant!!!
						</Typography>
						<Typography variant="body1">{responseData.message}</Typography>
					</Alert>
				)}
				{isAddMerchantError && (
					<Alert severity="error">
						<Typography variant="overline">Something went wrong!!!</Typography>
						<Typography variant="body1">
							Status Code : {responseData.status}
							<br />
							Error Message : {responseData.data.error}
						</Typography>
					</Alert>
				)}
			</>
		);
	};
	return (
		<>
			{showForm ? (
				<Container
					maxWidth="md"
					sx={{mb: 2}}
				>
					<Box sx={{mb: 2}}>
						<Typography
							variant="h4"
							color="primary"
							textAlign="center"
						>
							Merchant Details Form
						</Typography>
						<StyledInfoAlertBox severity="info">
							Please fill up this form to store merchant details in the Food
							Delivery System
						</StyledInfoAlertBox>
					</Box>
					<Paper
						elevation={2}
						sx={{p: 4, marginBottom: 2}}
					>
						<form onSubmit={handleSubmit}>
							<Grid
								container
								spacing={2}
							>
								<Grid
									item
									xs={12}
									md={6}
								>
									<StyledFormField
										label="Restaurant Name"
										name="restaurantName"
										value={restaurantName}
										onChange={(e) => setRestaurantName(e.target.value)}
										required
										type="text"
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}
								>
									<StyledFormField
										label="Contact Name"
										name="contactName"
										value={contactName}
										onChange={(e) => setContactName(e.target.value)}
										required
										type="text"
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}
								>
									<StyledFormField
										label="Pincode"
										name="pincode"
										value={pincode}
										onChange={(e) => setPincode(e.target.value)}
										required
										type="number"
										placeholder="700001"
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}
								>
									<StyledFormField
										label="Location"
										name="location"
										value={location}
										onChange={(e) => setLocation(e.target.value)}
										required
										type="search"
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}
								>
									<StyledFormField
										label="Website"
										name="website"
										value={website}
										onChange={(e) => setWebsite(e.target.value)}
										required
										type="url"
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}
								>
									<StyledFormField
										label="Phone Number"
										name="phoneNumber"
										value={phoneNumber}
										onChange={(e) => setPhoneNumber(e.target.value)}
										required
										type="number"
										placeholder="95432-12345"
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}
								>
									<StyledFormField
										label="Average Daily Transactions"
										name="averageDailyTransactions"
										value={averageDailyTransactions}
										onChange={(e) =>
											setAverageDailyTransactions(e.target.value)
										}
										required
										type="number"
									/>
								</Grid>
							</Grid>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									mt: 2,
								}}
							>
								<StyledButton
									type="submit"
									variant="contained"
									color="primary"
								>
									Submit
								</StyledButton>
								<StyledButton
									variant="outlined"
									color="primary"
									onClick={handleClearForm}
								>
									Cancel
								</StyledButton>
							</Box>
						</form>
					</Paper>
				</Container>
			) : (
				<ResponsePaper elevation={2}>
					{responseData !== undefined && <ShowResult />}
					<Button
						variant="contained"
						onClick={handleGoToForm}
						sx={{mt: 2, mx: 'auto'}}
					>
						{isAddMerchantSuccess ? 'Add Another Merchant' : 'Try Again'}
					</Button>
				</ResponsePaper>
			)}
		</>
	);
};

export default MerchantForm;
