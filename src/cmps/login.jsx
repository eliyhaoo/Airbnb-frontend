
import * as React from 'react'
import { useState } from 'react'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { connect } from 'react-redux'
import { onLogin } from '../store/actions/user.actions'

import { storageService } from '../services/async-storage.service'
import is from 'date-fns/esm/locale/is/index.js'

const theme = createTheme()
export function _Login(props) {

    const [errorMsg, setErrorMsg] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const credentials = {
            username: data.get('email'),
            password: data.get('password'),
        }
        try {
            await props.onLogin(credentials)
            storageService.removeGuestWishList()
            props.history.push('/explore')
        } catch (err) {
            console.log(err)
            setErrorMsg(err.response.data.err)

        }

    }

    return (
        <section className="login">
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
                            {/* <LockOutlinedIcon /> */}
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                helperText={errorMsg}

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                helperText={errorMsg}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>

                            <Grid container>

                                <Grid item>
                                    <Link to="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>

        </section>
    )
}

function mapStateToProps(storeState) {
    return {
        user: storeState.userModule.user,
    }
}
const mapDispatchToProps = {
    onLogin,
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login)

