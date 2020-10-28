import React, { Component } from 'react';
import Layout from './component/Layout/Layout';
import Rumah from './containers/RumahMakan/RumahMakan'; 


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Rumah />
        </Layout>
      </div>
    );
  }
}

export default App;
