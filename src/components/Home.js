import React from 'react';
import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <h1>
        Welcome to the <code>react-from-scratch</code> Starter App!
      </h1>

      <p>
        Take a look around. Or clone{' '}
        <a href="https://github.com/jacobdcastro/react-from-scratch-starter">
          the repo
        </a>{' '}
        from Github!
      </p>
      <p>
        To understand the "hows" and "why's" behind this repo, check out Jacob's
        blog post on <a href="#">Creating a React App from Scratch</a>
      </p>
    </Layout>
  );
};

export default Home;
