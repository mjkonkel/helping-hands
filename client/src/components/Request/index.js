import React from "react";


const RequestList = ({ requests }) => {
  console.log("this is all the requests", requests)

  return (
    <div className="card">
      {requests &&
        requests.map(request => (
          <div className="card-header"
            key={request._id}>
            <p className="card-body">{request.requestText}</p>
          </div>
        ))
      }
    </div>
  )
};

export default RequestList; 