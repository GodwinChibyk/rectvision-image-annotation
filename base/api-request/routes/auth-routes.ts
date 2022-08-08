

export const AUTH_ROUTES ={
    SIGN_UP: '/auth/signup',
    SIGN_IN: '/auth/login',
    FORGOT_PASSWORD:  '/auth/forgot_password',
    RESET_PASSWORD: (token:string)=> `/auth/set-new-password/${token}`
}
