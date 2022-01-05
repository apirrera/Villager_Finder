import React from "react";

function RegistrationForm() {
	return (
		<div>
			<h4>Sign Up</h4>
            <form className='mt-3'>
            <div className='form-group'>

            {/* Username */}
                <div className='form-group'>
                    <label htmlFor="first_name">
                        First Name
                    <input name='first_name' className='form-control' placeholder='Enter first name' required />
                    </label>
                </div>


            {/* Email */}
                <div className='form-group'>
                    <label htmlFor="email">
                        Email
                    <input name='email' type='email' min='1' className='form-control' placeholder="sophie@example.com" required />
                    </label>
                </div>

            {/*Password */}

                <div className='form-group'>
                    <label htmlFor="last_name">
                        Last Name
                    <input name='last_name' className='form-control' placeholder='Enter last name' required />
                    </label>
                </div>

            {/* Create Account Button */}
            <button type='submit' className='button mx-3 px-3'>
                    Create Account
            </button>
            </div>
            </form>
		</div>
	);
}

export default RegistrationForm;