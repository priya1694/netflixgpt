import { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
    }

    return (
       
        <div>
            <Header/> 
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_medium.jpg"
                alt="logo"/>
            </div>

            <form className="w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">

            <h1 className="text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up" }
            </h1>

             {!isSignInForm && (<input type="text"
             placeholder="Name"
             className="p-4 my-4 w-full bg-gray-700"/>)}

            <input type="text"
             placeholder="email"
             className="p-4 my-4 w-full bg-gray-700"/>


             <input type="password"
              placeholder="password"
              className="p-4 my-4 w-full bg-gray-700"/>


             <button className="p-4 my-6 bg-red-700 w-full">
              {isSignInForm ? "Sign In" : "Sign Up" }
              </button>


             <p className="py-4 cursor-pointer" 
             onClick = {toggleSignInForm}>
              {isSignInForm?"New to Netflix? Sign Up Now" : "Already registered? Sign In"}
             </p>

         </form>
        </div>

    )
}

export default Login;