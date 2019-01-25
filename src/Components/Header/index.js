import React from 'react';
import './Header.css';
import { Menu, Dropdown, Icon } from 'antd';


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

const Header = (props) => {
  return (
    <div className="headerWrapper">
      <div className="container">
        <div className="main-menu">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link menuItem" href="http://www.google.com/">
              Your Account <Icon className="drop-arrow" type="down" />
            </a>
          </Dropdown>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link menuItem" href="http://www.google.com/">
              Invest <Icon className="drop-arrow" type="down" />
            </a>
          </Dropdown>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link menuItem" href="http://www.google.com/">
              Resources <Icon className="drop-arrow" type="down" />
            </a>
          </Dropdown>
        </div>
        <div className="right-menu">
          <div className="bell">
            <i className="far fa-bell" />
          </div>
          <div className="profile-menu">
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link menuItem" href="http://www.google.com/">
                <i className="fas fa-user-circle userIcon" /> Joseph <Icon className="drop-arrow" type="down" />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
