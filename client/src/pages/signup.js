import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Logo from "../assets/Logo.jpeg";
import "../index.css"
import { Outlet, Link } from 'react-router-dom';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <br></br>
      <main className="flex-row justify-center mb-4">
        <div className="col-12 col-md-6">
          <div className="card">
            <h4 className="card-header bg-info text-white">Sign Up</h4>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="username"
                  id="username"
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button className="btn btn-info btn-lg" type="submit">
                  Submit
                </button>
              </form>
              <div>
                <br></br>Already a member? <Link to="/login">Login now!</Link>
              </div>
              {error && <div>Signup failed</div>}
            </div>
          </div>
        </div>
      </main>
    </div >
  );
};

export default Signup;