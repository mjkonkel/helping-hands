import React, { useState } from 'react';
import Nav from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '../src/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Request from './pages/request';
import Login from './pages/Login';
import Footer from './components/Footer';
import Updates from './pages/Updates';

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
  const [categories] = useState([
    {
      name: 'Updates',
      description: 'Get updates and stay informed of the people you are caring for!',
    },
    {
      name: 'Photos',
      description: 'Photos of the people you how they are doing!',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
          ></Nav>
          <div>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/request"
                element={<Request />}
              />
              <Route
                path="/updates"
                element={<Updates />}
              />
            </Routes>

          </div>
          <footer>
            <Footer></Footer>
          </footer>


        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;