import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div
      className='
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-gray-100
      '
      style={{
        backgroundImage: "url('/images/pilotomain.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <Image
          height='280'
          width='280'
          className='mx-auto w-auto rounded-full'
          src='/images/LOGO2.png'
          alt='Logo'
        />
        <h2
          className='
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-[#be9e44]
          '
        >
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}

export default Auth;
