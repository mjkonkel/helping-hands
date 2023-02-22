import React from "react";


const RequestList = ({ requests }) => {
  console.log("this is all the requests", requests)
    // if(!requests.length) {
    //     return <h2> go requests... </h2>;
    // }

    return(
        <div>
            <h1>hello</h1>
            {requests &&
              requests.map(request => (
                <div key={request._id}>
                    <p>{request.requestText}</p>
                </div>
              ))
            }
        </div>
    )
};

export default RequestList; 