import React from 'react'

function UserProfile() {
    return ( 
        <form className='row'>
            <div className='col-4'>
            <label>
            <strong>First Name</strong>
              <input type="text" name="name" placeholder='Enter First name' />
            </label>
            <label>
                <strong>Address 1</strong>
              <input type="text" name="name"  placeholder='Enter Address' />
            </label>
            </div>


            <div className='col-4'>
            <label>
            <strong>Last Name</strong>
              <input type="text" name="name" placeholder='Enter Last name' />
            </label>
            <label>
            <strong>Address 2</strong>
              <input type="text" name="name" placeholder='Enter address' />
            </label>
            </div>


            <div className='col-4'>
            <label>
            <strong>Email</strong>
              <input type="text" name="name" placeholder='Enter Email Id'/>
            </label>
            <label>
            <strong>City</strong>
              <input type="text" name="name" placeholder='Enter City' />
            </label>
            </div>
            <div className='sbt-btn'>
                <input type="submit" className='btn btn-primary' value="Submit" /></div>
        </form>
    );

}
export default UserProfile;