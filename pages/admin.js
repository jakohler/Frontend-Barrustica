import React from 'react'
import SignUp from '../components/formComponents/SignUp'
import ConfirmSignUp from '../components/formComponents/ConfirmSignUp'
import SignIn from '../components/formComponents/SignIn'
import Inventory from '../components/Inventory'

class Admin extends React.Component {
  state = { formState: 'signUp', isAdmin: false }
  toggleFormState = (formState) => {
    this.setState(() => ({ formState }))
  }
  async componentDidMount() {
    // check and update signed in state
  }
  signUp = async (form) => {
    // sign up
    try {
      const response = await fetch('http://localhost:5132/User/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
  
      if (response.ok) {
        // Cambiar el estado para mostrar la pantalla de confirmación
        this.setState({ formState: 'confirmSignUp' })
      } else {
        // Manejar errores de registro
      }
    } catch (error) {
      // Manejar errores de conexión
    }
  }
  confirmSignUp = async (form) => {
    const { username, authcode } = form
    // confirm sign up
    try {
      const url = `http://localhost:5132/User/ConfirmSignUp?userName=${username}`;
      const response = await fetch(url);
      const resAuthCode = await response.json();
      
      if (response.ok && resAuthCode == authcode) {
        // Cambiar el estado para mostrar la pantalla de inicio de sesión
        this.setState({ formState: 'signIn' })
      } else {
        // Manejar errores de confirmación
      }
    } catch (error) {
      // Manejar errores de conexión
    }
  }
  signIn = async (form) => {
    const { username, password } = form
    // signIn

    try {
      const url = `http://localhost:5132/User/SignIn?userName=${username}&password=${password}`;
      const response = await fetch(url);
      const resUser = await response.json();

      if (response.ok && resUser.username == username && resUser.password == password) {
        // Cambiar el estado para mostrar la pantalla de inicio de sesión
        this.setState({ formState: 'signedIn', isAdmin: resUser.isAdmin })
      } else {
        // Manejar errores de confirmación
      }
    } catch (error) {
      // Manejar errores de conexión
    }

    //this.setState({ formState: 'signedIn', isAdmin: true })
  }
  signOut = async() => {
    // sign out
    this.setState({ formState: 'signUp' })
  }

  render() {
    const { formState, isAdmin } = this.state
    const renderForm = (formState, state) => {
      switch(formState) {
        case 'signUp':
          return <SignUp {...state} signUp={this.signUp} toggleFormState={this.toggleFormState} />
        case 'confirmSignUp':
          return <ConfirmSignUp {...state} confirmSignUp={this.confirmSignUp} />
        case 'signIn':
          return <SignIn {...state} signIn={this.signIn} toggleFormState={this.toggleFormState} />
        case 'signedIn':
          return isAdmin ? <Inventory {...state} signOut={this.signOut} /> : <h3>Not an admin</h3>
        default:
          return null
      }
    }
    
    return (
      <div className="flex flex-col">
        <div className="max-w-fw flex flex-col">
          <div className="pt-10">
            <h1 className="text-5xl font-light">Admin Panel</h1>
          </div>
          {
            renderForm(formState)
          }
        </div>
      </div>
    )
  }
}

export default Admin