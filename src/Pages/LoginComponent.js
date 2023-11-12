// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './styles.scss';
// import { useAuth } from './AuthContext';



// const LoginComponent = () => {
//   const [mode, setMode] = useState('signup');
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     uid: '',
//     createpassword: '',
//     repeatpassword: '',
//   });
//   const { auth, login, setuid } = useAuth();

//   const toggleMode = () => {
//     setMode((prevMode) => (prevMode === 'signup' ? 'login' : 'signup'));
//   };

//   const handleChange = (event) => {
//     const { id, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [id]: value }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (mode === 'signup' && formData.createpassword !== formData.repeatpassword) {
//       toast.error("Passwords do not match", {
//         position: "bottom-left",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//       return;
//     }

//     const url =
//       mode === 'login'
//         ? 'https://salmon-painter-hkkrg.pwskills.app:5000/login'
//         : 'https://salmon-painter-hkkrg.pwskills.app:5000/signup';

//     try {
//       console.log(formData); // Log the formData object
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const error = await response.json();
//         throw new Error(`Server error: ${error.message}`);
//       }

//       if (mode === 'signup') {
//         setuid(formData.uid); // Store uid in AuthContext
//       }

//       login();
//       toast.error("Login Successful", {
//         position: "bottom-left",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     } catch (error) {
//       toast.error("401 (UNAUTHORIZED)", {
//         position: "bottom-left",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//       console.error('Error:', error.message);
//     }
//   };

//   return (
//     <div>
//       <div className={`form-block-wrapper form-block-wrapper--is-${mode}`}></div>
//       <section className={`form-block form-block--is-${mode}`}>
//         <header className="form-block__header">
//           <h1>{mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
//           <div className="form-block__toggle-block">
//             <span>
//               {mode === 'login' ? "Don't" : 'Already'} have an account? Click here &nbsp; &nbsp;&nbsp; &#8594;
//             </span>
//             <input id="form-toggler" type="checkbox" onClick={toggleMode} />
//             <label htmlFor="form-toggler"></label>
//           </div>
//         </header>
//         <LoginForm mode={mode} formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
//       </section>
//       <ToastContainer />
//     </div>
//   );
// };

// const LoginForm = ({ mode, formData, onChange, onSubmit }) => {
//   return (
//     <form onSubmit={onSubmit}>
//       <div className="form-block__input-wrapper">
//         <div className={`form-group form-group--${mode}`}>
//           {mode === 'login' ? (
//             <>
//               <Input id="email" type="text" label="Email" required value={formData.email} onChange={onChange} disabled={mode === 'signup'} />
//               <Input
//                 id="password"
//                 type="password"
//                 label="Password"
//                 required
//                 value={formData.password}
//                 onChange={onChange}
//                 disabled={mode === 'signup'}
//               />
//             </>
//           ) : (
//             <>
//               <Input id="uid" type="text" label="user Id" required value={formData.uid} onChange={onChange} disabled={mode === 'login'} />
//               <Input id="email" type="email" label="Email" required value={formData.email} onChange={onChange} disabled={mode === 'login'} />
//               <Input
//                 id="createpassword"
//                 type="password"
//                 label="Password"
//                 required
//                 value={formData.createpassword}
//                 onChange={onChange}
//                 disabled={mode === 'login'}
//               />
//               <Input
//                 id="repeatpassword"
//                 type="password"
//                 label="Repeat Password"
//                 required
//                 value={formData.repeatpassword}
//                 onChange={onChange}
//                 disabled={mode === 'login'}
//               />
//             </>
//           )}
//         </div>
//       </div>
//       <button className="button button--primary full-width" type="submit">
//         {mode === 'login' ? 'Log In' : 'Sign Up'}
//       </button>
//     </form>
//   );
// };

// const Input = ({ id, type, label, value, onChange, disabled, required }) => (
//   <input
//     className="form-group__input"
//     type={type}
//     id={id}
//     placeholder={label}
//     value={value}
//     onChange={onChange}
//     disabled={disabled}
//     required={required}
//   />
// );

// export default LoginComponent;
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';
import { useAuth } from './AuthContext';

const notify = (t) => toast(t);

const LoginComponent = () => {
  const [mode, setMode] = useState('signup');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    uid: '',
    createpassword: '',
    repeatpassword: '',
  });
  const { auth, login, setUid } = useAuth();

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'signup' ? 'login' : 'signup'));
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (mode === 'signup' && formData.createpassword !== formData.repeatpassword) {
      toast.error("Passwords do not match", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const url =
      mode === 'login'
        ? 'https://salmon-painter-hkkrg.pwskills.app:5000/login'
        : 'https://salmon-painter-hkkrg.pwskills.app:5000/signup';

    try {
      console.log(formData); // Log the formData object
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Server error: ${error.message}`);
      }

      if (mode === 'login') {
        const data = await response.json();
        setUid(data.user); // Store uid in AuthContext
      }

      login();
      toast.error("Login Successful", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      toast.error("401 (UNAUTHORIZED)", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <div className={`form-block-wrapper form-block-wrapper--is-${mode}`}></div>
      <section className={`form-block form-block--is-${mode}`}>
        <header className="form-block__header">
          <h1>{mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
          <div className="form-block__toggle-block">
            <span>
              {mode === 'login' ? "Don't" : 'Already'} have an account? Click here &nbsp; &nbsp;&nbsp; &#8594;
            </span>
            <input id="form-toggler" type="checkbox" onClick={toggleMode} />
            <label htmlFor="form-toggler"></label>
          </div>
        </header>
        <LoginForm mode={mode} formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
      </section>
      <ToastContainer />
    </div>
  );
};

const LoginForm = ({ mode, formData, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-block__input-wrapper">
        <div className={`form-group form-group--${mode}`}>
          {mode === 'login' ? (
            <>
              <Input id="email" type="text" label="Email" required value={formData.email} onChange={onChange} disabled={mode === 'signup'} />
              <Input
                id="password"
                type="password"
                label="Password"
                required
                value={formData.password}
                onChange={onChange}
                disabled={mode === 'signup'}
              />
            </>
          ) : (
            <>
              <Input id="uid" type="text" label="User Id" required value={formData.uid} onChange={onChange} disabled={mode === 'login'} />
              <Input id="email" type="email" label="Email" required value={formData.email} onChange={onChange} disabled={mode === 'login'} />
              <Input
                id="createpassword"
                type="password"
                label="Password"
                required
                value={formData.createpassword}
                onChange={onChange}
                disabled={mode === 'login'}
              />
              <Input
                id="repeatpassword"
                type="password"
                label="Repeat Password"
                required
                value={formData.repeatpassword}
                onChange={onChange}
                disabled={mode === 'login'}
              />
            </>
          )}
        </div>
      </div>
      <button className="button button--primary full-width" type="submit">
        {mode === 'login' ? 'Log In' : 'Sign Up'}
      </button>
    </form>
  );
};

const Input = ({ id, type, label, value, onChange, disabled, required }) => (
  <input
    className="form-group__input"
    type={type}
    id={id}
    placeholder={label}
    value={value}
    onChange={onChange}
    disabled={disabled}
    required={required}
  />
);

export default LoginComponent;

