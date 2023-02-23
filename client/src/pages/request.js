import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_REQUEST } from '../utils/mutations';
import { QUERY_REQUESTS } from '../utils/queries';
import RequestList from '../components/Request';

import Logo from "../assets/Logo.jpeg";
import "../index.css";

const Request = () => {
  const [requestText, setText] = useState('');

  const { loading, data } = useQuery(QUERY_REQUESTS)
  const requests = data?.requests || []


  const [addRequest, { error }] = useMutation(ADD_REQUEST)

  const handleChange = (event) => {
    if (event.target.value.length <= 400) {
      setText(event.target.value);
    }
  };

  const handleFormSubmit = async (event) => {
    console.log('hello', requestText)
    try {
      await addRequest({
        variables: { requestText },

      });
      console.log('form sub', requestText)
      setText('');
      window.location.reload()
    } catch (e) {
      console.error(e)
    }
  };

  return (
    <div>
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="mb-3 ">
        <label for="exampleFormControlTextarea1" className="form-label">
        </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
          onChange={handleChange}
        ></textarea>
        <button type="button" className="btn btn-info "
          onClick={handleFormSubmit}
          value={requestText}
        >Send request</button>
      </div>
      <h3 className="d-flex justify-content-center">Take a look at all requests</h3>
      <div>
        <RequestList
          requests={requests} />
      </div>
    </div>
  );
};

export default Request;