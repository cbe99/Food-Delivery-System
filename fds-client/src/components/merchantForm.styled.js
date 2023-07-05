import { Button, TextField, styled } from '@mui/material';

export const StyledFormField = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(2),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(2),
}));