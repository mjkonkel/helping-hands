// import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// // import Auth from '../utils/auth';
// import { useParams } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { ADD_REQUEST } from '../utils/mutations';
// const Request = () => {
//   const { id: requestId } = useParams();
//   const { loading, data } = useMutation(ADD_REQUEST, {
//     variables: { id: requestId },
//   });
//   const request = data?.request || {};
//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   //needs logic for adding to a user
//   return (
//     <div>
//       <div class="mb-3">
//         <label for="exampleFormControlInput1" class="form-label">Email address</label>
//         <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
//           {request.username}
//         </input>
//       </div>
//       <div class="mb-3">
//         <label for="exampleFormControlTextarea1" class="form-label">Please state your request.
//           {request.createdAt}
//           {request.requestText}
//         </label>
//         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//       </div>
//     </div>
//   );
// };
// export default Request;