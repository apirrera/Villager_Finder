import React from "react";

function FosterForm() {
	return (
		<div>
			<h4>Foster Form</h4>
            <form className='mt-3'>
                <div className='form-group'>

                {/* Name - First and Last Name */}
                <div className='form-group'>
                    <label htmlFor="first_name">
                        First Name
                    <input name='first_name' className='form-control' placeholder='Enter first name' required />
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor="last_name">
                        Last Name
                    <input name='last_name' className='form-control' placeholder='Enter last name' required />
                    </label>
                </div>

            {/* Age Field */}
                <div className='form-group'>
                    <label htmlFor="age">
                        Age:
                    <input name='age' type='number' placeholder='0' className='form-control' required />
                    </label>
                </div>

            {/* Address */}
            <div className='form-group'>
            <label htmlFor="address">
                Address:
            <input name="address" placeholder="Address" class="form-control" type="text" />
            </label>
            </div>

            <div className='form-group'>
            <label htmlFor="address 2">
                Address 2:
            <input name="address" placeholder="Address" class="form-control" type="text" />
            </label>
            </div>

            <div className='form-group'>
            <label htmlFor="city">
                City:
                <input name="city" placeholder="city" class="form-control"  type="text"/>
            </label>
            </div>

            <div className='form-group'>
            <label htmlFor="state">
                State:
                <input name="state" placeholder="state" class="form-control"  type="text"/>
            </label>
            </div>

            <div className='form-group'>
            <label htmlFor="zipcode">
                Zip Code:
                <input name="zipcode" placeholder="00000" class="form-control"  type="text"/>
            </label>
            </div>

            {/* Phone Number and Alt Phone Number */}
                <div className='form-group'>
                    <label htmlFor="mobile_number">
                        Phone Number
                    <input name='mobile_number' type='tel' placeholder='###-###-####' className='form-control' required />
                    </label>
                </div>

                <div className='form-group'>
                    <label htmlFor="mobile_number">
                        Alternative Phone Number
                    <input name='mobile_number' type='tel' placeholder='###-###-####' className='form-control' />
                    </label>
                </div>

            {/* Email */}
                <div className='form-group'>
                    <label htmlFor="email">
                        Email
                    <input name='email' type='email' min='1' className='form-control' placeholder="sophie@example.com" required />
                    </label>
                </div>
                </div>

            {/* PDF Field and PDF Submission Button*/}

            {/* Submit Button */}
                <button type='submit' className='button mx-3 px-3'>
                    Submit
            </button>
            </form>
		</div>
	);
}

export default FosterForm;