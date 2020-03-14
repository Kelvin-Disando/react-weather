import React from 'react';
import './styles/main.scss'
import Header from './components/Header'
import Main from './components/Main'
import Layout from './components/Layout'


function App() {
  return (
    <Layout>
<Header/>
<Main/>
    </Layout>
  );
}

export default App;
