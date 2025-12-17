import React from 'react'
import { LoginForm } from './components/login-form';
import AuthVideo from './assets/video-auth.mp4'
import EternetesLogoLight from './assets/eternetes-logo-hero-dark.svg';

 const Auth = () => {

  return (
    <>
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex size-8 items-center justify-center rounded-md">
                <img 
                    src={EternetesLogoLight}
                />
            </div>
            eternetes
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <video 
        src={AuthVideo}
        alt="auth-video"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
    </>
  )
}
export default Auth;