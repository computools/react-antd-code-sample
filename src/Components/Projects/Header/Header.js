import React from 'react';
import { Menu, Dropdown, Icon, Radio } from 'antd';
import './Header.css';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

const HeaderOfProjects = ({activePojectsCount}) => {
  return (
    <div className="header-of-project-wrapper">
      <div className="header-of-project-title">
        <h2>Projects</h2>
      </div>
      <div className="header-of-project-menu">
        <div className="active-projects-counter">
          {`${activePojectsCount} active projects`}
        </div>
        <div className="header-of-project-right-menu">
          <div className="recently-acquired-wrapper">
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="http://www.google.com/">
                Recently acquired <Icon className="drop-arrow" type="down" />
              </a>
            </Dropdown>
          </div>
          <div className="radio-menu">
            <RadioGroup onChange={onChange} defaultValue="a">
              <RadioButton value="a">
                <i className="fas fa-th-large" />
              </RadioButton>
              <RadioButton value="b">
                <i className="fas fa-th-list" />
              </RadioButton>
              <RadioButton value="c">
                <i className="fas fa-map-marker-alt" />
              </RadioButton>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderOfProjects;