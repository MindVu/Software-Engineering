import { useState } from "react";
import { MDBContainer } from 'mdb-react-ui-kit';
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';
import '../css/style.css';
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
      <div className="mt-5" style={{width:"60vw"}}>
        <h2 className="text-center">Log in</h2>
      <form>
      <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' />
      <MDBInput className='mb-4' type='password' id='form1Example2' label='Password' />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href='#!'>Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type='submit' block>
        Sign in
      </MDBBtn>
    </form>
    <span className="d-flex justify-content-center mt-3">Don't have an account yet? &nbsp; <Link to="/register">Register</Link></span>
    <span className="d-flex justify-content-center mt-3">Or back to &nbsp; <Link to="/">Home</Link></span>
    </div>
    );
}

export default LogIn;