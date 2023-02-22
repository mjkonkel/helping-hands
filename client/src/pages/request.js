import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_REQUEST } from '../utils/mutations';
import { QUERY_ME, QUERY_REQUEST, QUERY_REQUESTS, QUERY_USER } from '../utils/queries';
import RequestList from '../components/Request';
import { useParams } from 'react-router-dom';

const Request= () => {
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

// const { username: userParam } = useParams();
// const { data } = useQuery( userParam  ? QUERY_USER : QUERY_ME, {
//   variables: { username: userParam },
// });
// const user = data?.me || data?.user || {};

const {loading, data } = useQuery( QUERY_REQUESTS )  
const requests = data?.requests || []


const [ addRequest, { error }  ] = useMutation(ADD_REQUEST)

const handleChange  = (event) => {
  if (event.target.value.length <= 400) {
    setText(event.target.value);
  }
};

const handleFormSubmit = async (event) => {
  console.log('hello',requestText)
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
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
        </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
           onChange={handleChange}
        ></textarea>
        <button type="button" class="btn btn-info"
        onClick={handleFormSubmit}
        value={requestText}
        >Send request</button>
      </div>
      <div>
        <RequestList
        requests={requests} />
      </div>
    </div>
  );
};

export default Request;