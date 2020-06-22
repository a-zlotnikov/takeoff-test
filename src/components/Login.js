import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Container, FormControl, Input, InputLabel, InputAdornment, IconButton, Box, Button} from '@material-ui/core'
import { Visibility, VisibilityOff} from '@material-ui/icons'
// import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

function Login() {
  const classes = useStyles()
  // const numOfCakes = useSelector(state => state.cake.numOfCakes)
  // const dispatch = useDispatch()
  const [values, setValues] = React.useState({
    login: '',
    password: '',
    showPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  return (
    <Container maxWidth='sm'>
     <form>
       <Box display='flex' flexDirection='column' alignItems='center' marginTop='30%'>
         <FormControl className={clsx(classes.margin, classes.textField)}>
           <InputLabel htmlFor='login'>Логин</InputLabel>
           <Input
             id='login'
             type='text'
             onChange={handleChange('login')}
             value={values.login}
           />
         </FormControl>
         <FormControl className={clsx(classes.margin, classes.textField)}>
           <InputLabel htmlFor="standard-adornment-password">Пароль</InputLabel>
           <Input

             id="standard-adornment-password"
             type={values.showPassword ? 'text' : 'password'}
             value={values.password}
             onChange={handleChange('password')}
             endAdornment={
               <InputAdornment position="end">
                 <IconButton
                   aria-label="toggle password visibility"
                   onClick={handleClickShowPassword}
                   onMouseDown={handleMouseDownPassword}
                 >
                   {values.showPassword ? <Visibility /> : <VisibilityOff />}
                 </IconButton>
               </InputAdornment>
             }
           />
         </FormControl>
         <Button type='submit' variant="contained" color='primary' width='300px' style={{marginTop: '20px'}}>Войти</Button>
       </Box>
     </form>
      {/*<button onClick={() => dispatch(buyCake())}>Buy cake</button>*/}
    </Container>
  )
}

export default Login
