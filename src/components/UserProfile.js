import React from 'react';
import {connect } from 'react-redux';

function UserProfile({user}) {
    const { id, first_name, last_name, email, avatar} = user;
    return ( 
        <form className='row'>
            <div className='col-4'>
            <label>
            <strong>Id</strong>
              <input type="text" name="name" placeholder='Enter First name' value={id} readOnly/>
            </label>
            <label>
                <strong>Email</strong>
              <input type="text" name="name"  placeholder='Enter Address'value={email} readOnly/>
            </label>
            </div>


            <div className='col-4'>
            <label>
            <strong>First Name</strong>
              <input type="text" name="name" placeholder='Enter Last name' value={first_name} readOnly />
            </label>
            <label>
            <strong>Last name</strong>
              <input type="text" name="name" placeholder='Enter address' value={last_name} readOnly />
            </label>
            </div>


            <div className='col-4'>
            
              <img src={avatar} className='image' alt='user_picture' />
          
            </div>
            <div className='sbt-btn'>
                <input type="submit" className='btn btn-primary' value="Submit" />
            </div>
        </form>
    );

}

const mapStateToProps = (state) => {
    return {
        user : state.user

    }
}
export default connect(mapStateToProps,null)(UserProfile);