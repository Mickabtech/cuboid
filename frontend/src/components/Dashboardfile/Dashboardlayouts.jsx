import React from 'react';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Input } from 'antd';
import { blue } from '@mui/material/colors';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';
import Cardcontent from '../Cardcontentfile/Cardcontent';
import Profile from '../Profilepage/Profile';



const { Header, Content, Footer, Sider } = Layout;
const labels = ['Profile', 'Chat', 'Settings', 'Logout'];
const paths = ['/profile', '/chat', '/settings', '/logout'];
const icons = [UserOutlined, VideoCameraOutlined, SettingsIcon, LogoutIcon];

const items = icons.map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: <Link to={paths[index]}>{labels[index] || `nav ${index + 1}`}</Link>,
}));
const Dashboardlayouts = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className='layout'>
      <Sider className='sider'
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }} 
      >
          <Header className='header' 
          />
        <div className="demo-logo-vertical" />
        <Menu className='menu' theme="dark" mode="inline"  items={items} />
        
      </Sider>
      <Layout>
      <Header className='header'>
        <div className='header-div'>
         <div className='input-div'>
        <Input
              className='search-input'
              placeholder="Search..."
              prefix={<SearchIcon/>}
            ></Input>
        </div>
        <div className='icon-div'>
        <span className=' header-icons'>
            <AccountCircleIcon className='header-icon'/>
          </span>
            <span className=' header-icons'>
            <AddLocationAltIcon className='online-icon'/>
          </span>
          <span className=' header-icons'>
            <NotificationsNoneIcon className='header-icon'/>
          </span>
        </div>
        </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
            <Outlet/>
        </Content>
        
      </Layout>
    </Layout>
  );
};
export default Dashboardlayouts;