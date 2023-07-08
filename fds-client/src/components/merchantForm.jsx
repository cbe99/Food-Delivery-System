import React, {useState} from 'react';
import {Alert, Button, Container, Typography} from '@mui/material';
import {StyledButton, StyledFormField} from './merchantForm.styled';
import {useAddMerchantMutation} from '../redux/api/apiSlice';
import LoadingButton from '@mui/lab/LoadingButton';

const MerchantForm = () => {
	const [restaurantName, setRestaurantName] = useState('');
	const [contactName, setContactName] = useState('');
	const [pincode, setPincode] = useState();
	const [location, setLocation] = useState('');
	const [website, setWebsite] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [averageDailyTransactions, setAverageDailyTransactions] = useState();
	const [showForm, setShowForm] = useState(true);

	const [
		addMerchant,
		{
			data: response,
			isSuccess: isAddMerchantSuccess,
			isLoading: isAddMerchantLoading,
			isError: isAddMerchantError,
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

	const handleClearForm = () => {
		setRestaurantName('');
		setContactName('');
		setPincode('');
		setLocation('');
		setWebsite('');
		setPhoneNumber('');
		setAverageDailyTransactions('');
	};

	return (
		<>
			{isAddMerchantSuccess && (
				<Typography>Succesfully added the merchant</Typography>
			)}
			{isAddMerchantError && <Typography>Something went wrong</Typography>}
			{showForm ? (
				<Container maxWidth="sm">
					<Typography
						variant="h4"
						color="primary"
						textAlign="center"
					>
						Merchant Details Form
					</Typography>
					<Alert
						severity="info"
						sx={{justifyContent: 'center'}}
					>
						Please fill up this form to store merchant details in the Food
						Delivery System
					</Alert>
					<form onSubmit={handleSubmit}>
						<StyledFormField
							label="Restaurant Name"
							name="restaurantName"
							value={restaurantName}
							onChange={(e) => {
								e.preventDefault();
								setRestaurantName(e.target.value);
							}}
							required
							fullWidth
							type="text"
						/>

						<StyledFormField
							label="Contact Name"
							name="contactName"
							value={contactName}
							onChange={(e) => {
								e.preventDefault();
								setContactName(e.target.value);
							}}
							required
							fullWidth
							type="text"
						/>

						<StyledFormField
							label="Pincode"
							name="pincode"
							value={pincode}
							onChange={(e) => {
								e.preventDefault();
								setPincode(e.target.value);
							}}
							required
							fullWidth
							type="number"
							placeholder="700001"
						/>

						<StyledFormField
							label="Location"
							name="location"
							value={location}
							onChange={(e) => {
								e.preventDefault();
								setLocation(e.target.value);
							}}
							required
							fullWidth
							type="search"
						/>

						<StyledFormField
							label="Website"
							name="website"
							value={website}
							onChange={(e) => {
								e.preventDefault();
								setWebsite(e.target.value);
							}}
							fullWidth
							required
							type="url"
						/>
						<StyledFormField
							label="Phone Number"
							name="phoneNumber"
							value={phoneNumber}
							onChange={(e) => {
								e.preventDefault();
								setPhoneNumber(e.target.value);
							}}
							fullWidth
							required
							type="number"
							placeholder="95432-12345"
						/>
						<StyledFormField
							label="Average Daily Transactions"
							name="averageDailyTransactions"
							value={averageDailyTransactions}
							onChange={(e) => {
								e.preventDefault();
								setAverageDailyTransactions(e.target.value);
							}}
							fullWidth
							required
							type="number"
						/>
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
					</form>
				</Container>
			) : (
				<Button onClick={() => setShowForm(true)}>Show Form</Button>
			)}
		</>
	);
};
export default MerchantForm;
