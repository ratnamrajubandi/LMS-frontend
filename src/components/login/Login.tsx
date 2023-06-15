import React, { useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// import { login } from "../services/auth.service";

type Props = {}

const Login: React.FC<Props> = () => {
    //   let navigate: NavigateFunction = useNavigate();

    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    const initialValues: {
        username: string
        password: string
    } = {
        username: '',
        password: '',
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('This field is required!'),
        password: Yup.string().required('This field is required!'),
    })

    const handleLogin = (formValue: { username: string; password: string }) => {
        const { username, password } = formValue

        setMessage('')
        setLoading(true)

        // login(username, password).then(
        //   () => {
        //     navigate("/profile");
        //     window.location.reload();
        //   },
        //   (error) => {
        //     const resMessage =
        //       (error.response &&
        //         error.response.data &&
        //         error.response.data.message) ||
        //       error.message ||
        //       error.toString();

        //     setLoading(false);
        //     setMessage(resMessage);
        //   }
        // );
    }

    return (

       
<div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
  <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <h1 className="font-bold text-center text-2xl mb-5">Your Logo</h1>
    <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      <div className="px-5 py-7">
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          E-mail
        </label>
        <input
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          Password
        </label>
        <input
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
        <button
          type="button"
          className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
        >
          <span className="inline-block mr-2">Login</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
      {/* <div className="p-5">
        <div className="grid grid-cols-3 gap-1">
          <button
            type="button"
            className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
          >
            MailUp
          </button>
          <button
            type="button"
            className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
          >
            Google
          </button>
          <button
            type="button"
            className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
          >
            Github
          </button>
        </div>
      </div> */}
      <div className="py-5">
        <div className="grid grid-cols-2 gap-1">
          <div className="text-center sm:text-left whitespace-nowrap">
            <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 inline-block align-text-top"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
              <span className="inline-block ml-1">Forgot Password</span>
            </button>
          </div>
          {/* <div className="text-center sm:text-right whitespace-nowrap">
            <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 inline-block align-text-bottom	"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="inline-block ml-1">Help</span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
    {/* <div className="py-5">
      <div className="grid grid-cols-2 gap-1">
        <div className="text-center sm:text-left whitespace-nowrap">
          <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 inline-block align-text-top"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="inline-block ml-1">Back to your-app.com</span>
          </button>
        </div>
      </div>
    </div> */}
  </div>
</div>

        // <div className="col-md-12">
        //     <div className="card card-container">
        //         <img
        //             src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        //             alt="profile-img"
        //             className="profile-img-card"
        //         />
        //         <Formik
        //             initialValues={initialValues}
        //             validationSchema={validationSchema}
        //             onSubmit={handleLogin}
        //         >
        //             <Form>
        //                 <div className="form-group">
        //                     <label htmlFor="username">Username</label>
        //                     <Field
        //                         name="username"
        //                         type="text"
        //                         className="form-control"
        //                     />
        //                     <ErrorMessage
        //                         name="username"
        //                         component="div"
        //                         className="alert alert-danger"
        //                     />
        //                 </div>

        //                 <div className="form-group">
        //                     <label htmlFor="password">Password</label>
        //                     <Field
        //                         name="password"
        //                         type="password"
        //                         className="form-control"
        //                     />
        //                     <ErrorMessage
        //                         name="password"
        //                         component="div"
        //                         className="alert alert-danger"
        //                     />
        //                 </div>

        //                 <div className="form-group">
        //                     <button
        //                         type="submit"
        //                         className="btn btn-primary btn-block"
        //                         disabled={loading}
        //                     >
        //                         {loading && (
        //                             <span className="spinner-border spinner-border-sm"></span>
        //                         )}
        //                         <span>Login</span>
        //                     </button>
        //                 </div>

        //                 {message && (
        //                     <div className="form-group">
        //                         <div
        //                             className="alert alert-danger"
        //                             role="alert"
        //                         >
        //                             {message}
        //                         </div>
        //                     </div>
        //                 )}
        //             </Form>
        //         </Formik>
        //     </div>
        // </div>
    )
}

export default Login
