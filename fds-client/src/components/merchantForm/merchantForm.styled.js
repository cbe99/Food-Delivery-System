import { Alert, Button, Paper, TextField, styled } from '@mui/material';

export const StyledFormField = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(2),
}));

export const StyledInfoAlertBox = styled(Alert)(({ theme }) => ({
    justifyContent: 'center',
    display: 'flex',
}));

export const ResponsePaper = styled(Paper)(({ theme }) => ({
    my: 2,
    p: 2,
    mx: 'auto',
    maxWidth: 600,
    textAlign: 'center',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(2),
}));