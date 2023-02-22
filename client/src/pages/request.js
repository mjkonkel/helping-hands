import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REQUEST } from '../utils/mutations';
import { QUERY_REQUEST, QUERY_REQUESTS } from '../utils/queries';
import Logo from "../assets/Logo.jpeg";
import "../index.css"

const Request = () => {
  const [requestText, setText] = useState('');

  // const [ addRequest ] = useMutation(ADD_REQUEST, {
  //   update(cache, { data: { addRequest }}){

  //     try { 
  //       const { me } = cache.readQuery({query: QUERY_REQUEST});
  //       cache.writeQuery({ 
  //         data: { me: { ...me, request: [ ...me.request, 
  //         addRequest] } },
  //       });
  //     } catch (e) { 
  //       console.warn("Sorry, Request not valid.")
  //        console.log('testing')
  //     }

  //     const { requests } = cache.readQuery({ query:
  //     QUERY_REQUESTS});
  //     cache.writeQuery({ 
  //       query: QUERY_REQUESTS,
  //       data: { requests: [addRequest, ...requests]}
  //     });
  //   }
  // })

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
   

      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
        </label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
          onChange={handleChange}
        ></textarea>
        <button type="button" class="btn btn-info"
          onClick={handleFormSubmit}

          value={requestText}
        >Send request</button>
      </div>
    </div>
  );
};

export default Request;