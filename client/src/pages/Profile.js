import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';
import Logo from "../assets/Logo.jpeg";

const Profile = (props) => {
    const [username, setUsername] = useState(Auth.getProfile().data.username)
    // const { username: userParam } = useParams();
    // console.log(username)

    const [addFriend] = useMutation(ADD_FRIEND);
    // const { loading, data } = useQuery(username ? QUERY_USER : QUERY_ME, {
    //     variables: { username },
    // });
    const { loading, data } = useQuery(QUERY_USER, {
        variables: { username: "Molly48" }
    })
    // console.log("data", data)
    // const user = data?.me || data?.user || {};
    // console.log("user", user)
    // console.log("login", Auth.loggedIn());
    // console.log("getprofile", Auth.getProfile());
    // navigate to personal profile page if username is yours
    //  console.log("userParam", userParam)
    // if (Auth.loggedIn()) {
    //       return <Navigate to="/profile" />;
    //  }

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (!user?.username) {
    //     return (
    //         <div>
    //             <div className="Logo">
    //                 <img src={Logo} alt="Logo" />

    //             </div>
    //             <h4>
    //                 You need to be logged in to see this. Use the navigation links above to
    //                 sign up or log in!
    //             </h4>
    //         </div>
    //     );
    // }

    const handleClick = async () => {
        try {
            // await addFriend({
            //     variables: { id: user._id },
            // });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <div className="Logo">
                <img src={Logo} alt="Logo" />
            </div>

            <div className="flex-row mb-3">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                    Viewing {username}'s profile.
                </h2>

                {useParams && (
                    <button className="btn ml-auto" onClick={handleClick}>
                        Add Friend
                    </button>
                )}
            </div>
            <div>Hello {username}</div>
        </div>
    );
};


export default Profile;
