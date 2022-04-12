import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Container } from 'semantic-ui-react'
import {signIn} from '../actions/user'
import {connect} from 'react-redux'
import Swal from 'sweetalert2'

const LoginForm = (props) => {
  const {history} = props

  const [loading, setLoading] = React.useState(false)
  const [values, setValues] = React.useState({
    email: '',
    password: ''
  }) 

  const handleChange = prop => e => {
    e.preventDefault()
    setValues({...values, [prop]: e.target.value})
  }

  console.log(values)

  const handleSubmit = () => {
    try {
      setLoading(true)
      props.signIn(values.email, values.password, history.push('/cp/dashboard'))
    } catch (error) {
      setLoading(false)
      console.log(error)
      Swal.fire(
        'Opppss!',
        'Nampaknya ada yang salah, periksa kembali email dan password kamu!',
        'error'
      )
    }
  }

  return(
    <Container style={{paddingLeft: '15px', paddingRight: '15px'}}>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Login untuk melanjutkan
          </Header>
          <Form size='large' onSubmit={handleSubmit}>
              <Form.Input 
                fluid 
                icon='user' 
                iconPosition='left' 
                placeholder='E-mail address'
                name='email'
                onChange={handleChange('email')}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                name='password'
                type='password'
                onChange={handleChange('password')}
              />

              <Button color='teal' fluid size='large' style={{width: '100% !important'}}>
                {loading ? 'Loading' : 'Login'}
              </Button>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password, callback) => 
      dispatch(signIn(email, password, callback))
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)
