import './styles/login.css';

const Login = () => {
  return (
    <main className="p-5 flex flex-col justify-center items-center h-full">
      <section className="flex flex-col items-center justify-center card">
        <div className='flex flex-col text-center'>
          <h1 className='text-5xl'>Login</h1>
          <p className='-mt-2 text-lg text-black/50'>Log in to your account</p>
        </div>
        <form action="#" className='flex flex-col gap-2'>
          <div>
            {/* Email */}
            <label htmlFor="email"> Email
              <input type="email" id='email' placeholder='example@mail.com'/>
            </label>

            {/* Password */}
            <label htmlFor="password"> Password
              <input type="password" id='password' placeholder='********'/>
            </label>
          </div>

          <div className='-mt-6 mb-6 flex justify-end'>
            <a href="/forgot-password" className='text-xs hover:underline'>Forgot your password?</a>
          </div>

          {/* Button */}
          <div className='flex flex-col gap-2'>
            <a href="">
              <button className='w-full'>Sign Up</button>
            </a>
            <a href="/sign-up" className='text-xs hover:underline text-center'>Don&apos;t have an account yet?</a>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login
