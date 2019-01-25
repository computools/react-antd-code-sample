import React from 'react';
import { Pagination } from 'antd';
import Header from "./Header";
import Positions from './Positions';
import Projects from "./Projects";
import Charts from "./Charts";
import 'bulma/css/bulma.css'

const Root = () => {
  return (
    <div className="root-wrapper">
      <Header />
      <div className="columns layout-wrapp">
        <div className="is-three-quarters">
          <Positions />
          <Projects />
        </div>
        <div className="column">
          <Charts />
        </div>
      </div>
      
      <div className="pagination-wrapper">
        <Pagination
          total={40}
          pageSize={20}
          defaultCurrent={1}
        />
      </div>
    </div>
  );
};

export default Root;