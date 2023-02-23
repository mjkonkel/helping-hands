import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME, QUERY_REQUESTS, QUERY_ALL_USERS } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';
import Logo from "../assets/Logo.jpeg";
import RequestList from '../components/Request';

const Profile = (props) => {
    const { username: userParam } = useParams();
    console.log(userParam)
    const [username, setUsername] = useState(Auth.getProfile().data.username)

    const { loading, error, data } = useQuery( QUERY_USER,{variables: {username:"test1"}});

    const user = data?.me || data?.user || {};

    // console.log(username)
    console.log(user)

    // const handleClick = async () => {
    //     try {
    //         // await addFriend({
    //         //     variables: { id: user._id },
    //         // });
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/profile" />;
      }

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>ERROR...</div>;
    }

    return (
        <div>
            <div className="Logo">
                <img src={Logo} alt="Logo" />
            </div>

            <div className="flex-row mb-3">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                    Viewing {username}'s profile.
                </h2>
                <div className="col-12 col-lg-3 mb-3">
          <RequestList
            requests = {user.requests}
          />  
            </div>
            <div>Welcome {username}</div>
        </div>
        </div>
    );
};


export default Profile;
