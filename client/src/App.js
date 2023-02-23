import React from 'react';
import NavbarHH from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '../src/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Request from './pages/request';
import Login from './pages/Login';
import Footer from './components/Footer';
import Updates from './pages/Updates';
import Signup from './pages/signup';
import Profile from './pages/Profile'
import NoMatch from './pages/NoMatch';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


//add apollo client
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

  return (
    <ApolloProvider client={client}>

      <Router>
        <div>
          {/* <Navbar></Navbar> */}

          <Routes>
            <Route
              path="/"
              element={<NavbarHH/>}
            >
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="login"
                element={<Login />}
              />
              <Route
                path="request"
                element={<Request />}
              />
              <Route
                path="updates"
                element={<Updates />}
              />

              <Route
                path="/profile"
                element={<Profile />}
              />

            <Route

             path="*" element={<NoMatch />} 
             />
            </Route>

          </Routes>


          <footer>
            <Footer></Footer>
          </footer>


        </div>
      </Router>

    </ApolloProvider>
  );
};

export default App;