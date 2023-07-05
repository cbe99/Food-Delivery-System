import React, {useState} from 'react';
import {Alert, Container, Typography} from '@mui/material';
import {StyledButton, StyledFormField} from './merchantForm.styled';

const initialFormState = {
	restaurantName: '',
	contactName: '',
	pincode: '',
	location: '',
	website: '',
	phoneNumber: '',
	averageDailyTransactions: '',
};

const MerchantForm = () => {
	const [formData, setFormData] = useState(initialFormState);

	const handleChange = (event) => {
		const {name, value} = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert('correct');
		// Handle form submission here (e.g., send data to backend)
	};

	const handleClearForm = () => {
		setFormData(initialFormState);
	};

	return (
		<>
			<Container maxWidth="sm">
				<Typography
					variant="h4"
					color={'primary'}
					textAlign={'center'}
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
						value={formData.restaurantName}
						onChange={handleChange}
						required
						fullWidth
						type="text"
					/>

					<StyledFormField
						label="Contact Name"
						name="contactName"
						value={formData.contactName}
						onChange={handleChange}
						required
						fullWidth
						type="text"
					/>

					<StyledFormField
						label="Pincode"
						name="pincode"
						value={formData.pincode}
						onChange={handleChange}
						required
						fullWidth
						type="number"
						placeholder="700001"
					/>

					<StyledFormField
						label="Location"
						name="location"
						value={formData.location}
						onChange={handleChange}
						required
						fullWidth
						type="search"
					/>

					<StyledFormField
						label="Website"
						name="website"
						value={formData.website}
						onChange={handleChange}
						fullWidth
						required
						type="url"
					/>
					<StyledFormField
						label="Phone Number"
						name="phoneNumber"
						value={formData.phoneNumber}
						onChange={handleChange}
						fullWidth
						required
						type="number"
						placeholder="95432-12345"
					/>
					<StyledFormField
						label="Average Daily Transactions"
						name="averageDailyTransactions"
						value={formData.averageDailyTransactions}
						onChange={handleChange}
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
		</>
	);
};
export default MerchantForm;
