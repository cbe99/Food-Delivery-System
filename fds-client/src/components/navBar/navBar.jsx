import React from 'react';
import {
	AppBar,
	Box,
	IconButton,
	Link,
	Toolbar,
	Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import {GITHUB_LINK} from '../../constants/constants';

const NavigationBar = () => {
	return (
		<AppBar
			position="sticky"
			color="primary"
		>
			<Toolbar>
				<Typography
					variant="h6"
					component="div"
					sx={{flexGrow: 1}}
				>
					Food Delivery System
				</Typography>
				<Box>
					<Link
						href={GITHUB_LINK}
						color="inherit"
						target="_blank"
						rel="noopener"
					>
						<IconButton>
							<GitHubIcon />
						</IconButton>
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavigationBar;
