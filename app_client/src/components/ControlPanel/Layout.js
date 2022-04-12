import React, {useState, Suspense} from 'react'
import {
  Container,
  Menu,
  Image,
  Sidebar, 
  Icon,
  Segment,
  Dropdown,
  Button
} from 'semantic-ui-react'

import Content from './Content'
import {connect, useSelector, useDispatch} from 'react-redux'
import {signOut} from '../../actions/user'
// import styled from 'styled-components'



const Layout = (props) => {

  const [sidebarVisible, setSidebarVisible] = useState(false)
  const {auth, logOut} = props
  const dispatch = useDispatch()

  const toggle = () => {
    setSidebarVisible(!sidebarVisible)
  }


  return (
    <div>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="push"
          width="thin"
          visible={sidebarVisible}
          icon="labeled"
          vertical
          inverted
          className="sidebar-menu"
        >
          <Menu.Header name="brand" className="item">
            Defie & Teguh
          </Menu.Header>
          <Menu.Item link onClick={toggle} href='/#/cp/dashboard'>
            <Icon name='home'/>
            Dashboard
          </Menu.Item>
          {/* <Menu.Item link onClick={toggle} href='/#/cp/buku'>
            <Icon name='book'/>
            Buku Tamu
          </Menu.Item> */}
        </Sidebar>
        <Menu inverted borderless fixed='top' className='header-menu'>
          <Menu.Item
            position="left"
            link
            icon
            active={sidebarVisible}
            onClick={toggle}
          >
              <Icon
                name="bars"
                aria-label="menu"
                className="menu-icon"
                size="large"
              />
          </Menu.Item>
          <Menu.Menu position='right'>
            <Dropdown text={auth.email} pointing className='link item'>
              <Dropdown.Menu>
                <Dropdown.Header><Button onClick={logOut}>Logout</Button></Dropdown.Header>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
          <Sidebar.Pusher dimmed={sidebarVisible}>
            <Content/>
          </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(signOut())
  }
}

const mapStateToProps = state => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
