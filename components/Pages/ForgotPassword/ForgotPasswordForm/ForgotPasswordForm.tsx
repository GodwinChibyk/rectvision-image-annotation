import { useAtom } from 'jotai';
import React from 'react'
import toast, { Renderable, ValueOrFunction } from 'react-hot-toast';
import { AUTH_ROUTES, IRequestError, usePostRequest, useYupValidationResolver } from '../../../../base';
import HookFormContainer from '../../../../base/HookForm/HookFormContainer';
import HookInput from '../../../../base/HookForm/HookInput';
import CustomPrimaryButton from '../../../Global/Reuseable/CustomPrimaryButton';
import MessageIcon from '../../../Global/SVGIcons/MessageIcon';
import { forgotPasswordValidationSchema } from './forgotPasswordValidator';

// interface IForgotPasswordProps {
//   isLoading: boolean,
//   handleResetPassword: ()=> void
// }

const ForgotPasswordForm = ({isLoading, handleResetPassword}:any) => {
    const validator = useYupValidationResolver(forgotPasswordValidationSchema);


  return (
    <>
      <HookFormContainer validator={validator} handleSubmit={handleResetPassword}>            
        <HookInput
          name="email"
          placeholder="Enter your email"
          inputIcon={<MessageIcon />}
        />

        <div className="flex">
         <CustomPrimaryButton
          title='Reset password'
          isFullWidth={true}
          type='submit'
          isLoading={isLoading}
          />
        </div>
      </HookFormContainer>  
    </>
  )
}

export default ForgotPasswordForm