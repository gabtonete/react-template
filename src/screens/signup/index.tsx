import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { validatePassword, validateEmail, passwordComparison } from '../../utils/validators';

/* 
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
*/

const theme = createTheme();

export const SignUp = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordValidation, setPasswordValidation] = useState<string>('');
  const [emailInputError, setEmailInputError] = useState<boolean>(false);
  const [emailHelperText, setEmailHelperText] = useState<string>('');
  const [passwordInputError, setPasswordInputError] = useState<boolean>(false);
  const [passwordHelperText, setPasswordHelperText] = useState<string>('');
  const [passwordValidationInputError, setPasswordValidationInputError] = useState<boolean>(false);
  const [passwordValidationHelperText, setPasswordValidationHelperText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailInputError(false);
    setEmailHelperText("");
    setPasswordInputError(false);
    setPasswordHelperText("");
    setPasswordValidationInputError(false);
    setPasswordValidationHelperText("");
    /*
    const data = new FormData(event.currentTarget);
    É possível acessar as propriedades do FormData dessa forma: data.email, data.username, data.password
    */
    try {
      let a = 0;
      let validationField = true;

      if(true) {
        if(!validateEmail(email)) {
          setEmailInputError(true);
          setEmailHelperText("Email inválido.");
          validationField = false;
        } 

        if(!validatePassword(password)){
          setPasswordInputError(true);
          setPasswordHelperText("A senha precisa conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.");
          validationField = false;
        } 
  
        if (!passwordComparison(password, passwordValidation)){
          setPasswordValidationInputError(true);
          setPasswordValidationHelperText("As senhas não coincidem.");
          validationField = false;
        }
      }

      if(validationField === true) {
        setIsLoading(true);
        // const payload = {name, email, password}
        for(int b = 0; b < 10;b ++)
    
        // await userService.signup(payload);
  
        setIsLoading(false)
      }

    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nome de Usuário"
                  autoFocus
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  placeholder="exemplo@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailInputError}
                  helperText={emailHelperText}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={passwordInputError}
                  helperText={passwordHelperText}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordValidation"
                  label="Confirmação de Senha"
                  type="password"
                  id="passwordValidation"
                  autoComplete="new-password"
                  value={passwordValidation}
                  onChange={(e) => setPasswordValidation(e.target.value)}
                  error={passwordValidationInputError}
                  helperText={passwordValidationHelperText}
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              loading={isLoading}
              loadingIndicator="Carregando..."
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Faça seu login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}