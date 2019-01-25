import React from 'react';
import { Collapse } from 'antd';
import './Positions.css';

const Panel = Collapse.Panel;

const data = [
  ['Income eREIT', '28.2%', '$23,609', '$24,902'],
  ['Growth eREIT', '13.7%', '$11,604', '$14,602'],
  ['East Coast eREIT', '10.9%', '$9,102', '$24,407'],
  ['West Coast eREIT', '12.1%', '$4,102', '$7,573'],
  ['Income eREIT', '28.2%', '$23,609', '$24,902'],
  ['Growth eREIT', '13.7%', '$11,604', '$14,602'],
  ['East Coast eREIT', '10.9%', '$9,102', '$24,407'],
  ['West Coast eREIT', '12.1%', '$4,102', '$7,573'],
  ['Income eREIT', '28.2%', '$23,609', '$24,902'],
  ['Growth eREIT', '13.7%', '$11,604', '$14,602'],
  ['East Coast eREIT', '10.9%', '$9,102', '$24,407'],
  ['West Coast eREIT', '12.1%', '$4,102', '$7,573'],
];

const Positions = (props) => {
  return (
    <div className="position-wrapper">
      <div className="position-container">
        <div className="position-title">
          <h2>
            Position
          </h2>
        </div>
        <div className="table-header">
          <span>Name</span>
          <span style={{ marginLeft: '290px' }}>% of portfolio</span>
          <span style={{ marginLeft: '80px' }}>Est. value of shares</span>
          <span style={{ marginLeft: '40px' }}>Position total</span>
        </div>
        <Collapse bordered={false}>
          <Panel header="Real estate offerings">
            <table width="100%">
              {
                data.map(row => (
                  <tr className="position-row-item">
                    {row.map(cellItem => <CellItem cellItem={cellItem} />)}
                  </tr>
                ))
              }
            </table>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

const CellItem = ({cellItem}) => {
  return (
    <td>
      {cellItem}
    </td>
  );
}

export default Positions;
