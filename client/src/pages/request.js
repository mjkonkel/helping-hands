import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_REQUEST } from '../utils/mutations';
import { QUERY_REQUESTS, QUERY_ME  } from '../utils/queries';

const Request= () => {
  const [requestText, setText] = useState('');


const [addRequest, { error }] = useMutation(ADD_REQUEST, {
  update(cache, { data: { addRequest }}){

    try { 
      const { me } = cache.readQuery({query: QUERY_ME});
      cache.writeQuery({ 
        query: QUERY_ME,
        data: { me: { ...me, request: [ ...me.request, 
        addRequest] } },
      });
    } catch (e) { 
      console.warn("Sorry, Request not valid.")
    }
    
    const { requests } = cache.readQuery({ query:
    QUERY_REQUESTS});
    cache.writeQuery({ 
      query: QUERY_REQUESTS,
      data: { requests: [addRequest, ...requests]}
    });
  }
})

const handleChange  = (event) => {
  if (event.target.value.length <= 400) {
    setText(event.target.value);
    
  }
};

const handleFormSubmit = async (event) => {
  event.perventDefault();

  try { 
    await addRequest({
      variables: { requestText },
    });
    setText('');
  } catch (e) {
    console.error(e)
  }
};
 
return (
    <div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address
        </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
        value={requestText}
        onChange={handleChange}
        ></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
        </label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
        onSubmit={handleFormSubmit}
        ></textarea>
      </div>
    </div>
  );
};

export default Request;