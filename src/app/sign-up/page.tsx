import './styles/sign-up.css';

const SignUp = () => {
  return (
    <main className="p-5 flex flex-col justify-center items-center h-full">
      <section className="flex flex-col items-center justify-center card">
        <div className='flex flex-col text-center'>
          <h1 className='text-5xl'>Sign Up</h1>
          <p className='-mt-2 text-lg text-black/50'>Create an account</p>
        </div>
        <form action="#" className='flex flex-col gap-2'>
          <div>
            {/* Name */}
            <label htmlFor="name"> Name
              <input type="text" id='name' placeholder='John'/>
            </label>

            {/* Last Name */}
            <label htmlFor="last-name"> Last Name
              <input type="text" id='last-name' placeholder='Doe'/>
            </label>

            {/* Email */}
            <label htmlFor="email"> Email
              <input type="email" id='email' placeholder='example@mail.com'/>
            </label>

            {/* Password */}
            <label htmlFor="password"> Password
              <input type="password" id='password' placeholder='********'/>
            </label>

            {/* Confirm Password */}
            <label htmlFor="confirm-password"> Confirm Password
              <input type="password" id='confirm-password' placeholder='********'/>
            </label>
          </div>
          
          <div className='flex flex-col gap-2'>
            <a href="">
              <button className='w-full'>Sign Up</button>
            </a>
            <a href="/login" className='text-xs hover:underline text-center'>
              Already have an account?
            </a>
          </div>
        </form>
      </section>
    </main>
  );
}

export default SignUp
