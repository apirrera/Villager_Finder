import React from "react";

function LoginForm() {
	return (
		<div>
			<h4>Log In</h4>
            <form className='mt-3'>
            <div className='form-group'>

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
                    Submit
            </button>
            <div><p1>Forgot Password</p1></div>
            </div>
            </form>
		</div>
	);
}

export default LoginForm;