import "./styles/forgot-pw.module.css";

const ForgotPassword = () => {
  return (
    <main className="p-5 h-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center card">
        <h1 className="text-4xl">Forgot Password</h1>
        <p className="text-wrap -mt-2 mb-8 max-w-72 text-center text-black/50">
          Enter the email address associated with your account.
        </p>
        <form action="#" className="flex flex-col gap-2">
          <div className="text-left">
            {/* Email */}
            <label htmlFor="email">
              {" "}
              Email
              <input type="email" id="email" />
            </label>
            <div className="-mt-4 mb-6 flex justify-end">
              <a href="/support" className="text-xs hover:underline">
                Need help?
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {/* Button */}
            <a href="">
              <button className="w-full">Send</button>
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ForgotPassword;
