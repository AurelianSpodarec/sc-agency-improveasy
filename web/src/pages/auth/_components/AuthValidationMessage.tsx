function AuthValidationMessage({ children, type, message }: any) {
    const messages = [
        {
            message: 'Reset password email sent',
        },
        {
            message: 'Your password has been reset',
        },
    ];

    return (
        <div>
            <div>{message}</div>
            {children}
        </div>
    );
}

export default AuthValidationMessage;

// {showSuccess ? (
//     <p>
//         <p>Success!</p>
//         If the provided address exists in our system you will recieve an email with a
//         link to reset your password.
//     </p>
// ) : (

// {showSuccess ? (
//     <p>
//         <p>Success!</p>
//         Your password has been reset.
//         {/* <Link to="/auth/login">Login</Link> */}
// {/* </p> */}

/*                  

{/* {showConfirmEmail && (
    <>
        <p>
            Your account is not comfirmed, please click the link in your email.
        </p>
        <p>
            <button type="button" onClick={resendEmail}>
                Resend confimation.
            </button>
        </p>
    </>
)} */
