import React from 'react'
import Logo from './_components/Logo'

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className='h-full flex flex-col items-center justify-center space-y-6'>
            <Logo />
            {children}
        </div>
    )
}

export default AuthLayout
