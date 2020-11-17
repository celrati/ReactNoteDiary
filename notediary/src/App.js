import React, { useCallback, useState } from 'react';

import './App.css';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { Layout, Menu, Modal, Switch as ThemeSwitch } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/Home';
import DiaryList from './components/diaries/DiaryList';
import DiaryCreate from './components/diaries/DiaryCreate';
import NoteList from './components/notes/NoteList';
import NoteCreate from './components/notes/NoteCreate';
import Credit from './components/about/Credit';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { confirm } = Modal;


const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('light');
  const [colorHeader, setColorHeader] = useState('white');


  const hideShow = () => {
    setCollapsed(!collapsed);
  };

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      setColorHeader('white');
    } else {
      setTheme('dark');
      setColorHeader('#001529');
    }
  };

  const logOutConfirm = () => {
    confirm({
      title: 'Do you Want to logout ?',
      content: 'you can later Log in !',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <Layout theme={theme} style={{ minHeight: '100vh' }}>

      <Header theme={theme} style={{ width: '100%', backgroundColor: `${colorHeader}` }}>

        <Menu theme={theme} mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/home">Home</Link>
          </Menu.Item>

          <Menu.Item key="2">
            <ThemeSwitch
              checked={theme === 'dark'}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </Menu.Item>


          <Menu.Item style={{ float: 'right' }} key="5" onClick={logOutConfirm}>
            LogOut
          </Menu.Item>
          
          <Menu.Item style={{ float: 'right' }} key="4">
            <Link to="/login">Log in</Link>
          </Menu.Item>

          <Menu.Item style={{ float: 'right' }} key="3">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
        </Menu>


      </Header>

      <Layout theme={theme} className="site-layout">
        <Sider theme={theme} collapsible collapsed={collapsed} onCollapse={() => hideShow()}>

          <Menu theme={theme} defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              MyDiaries
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Diary">
              <Menu.Item key="3">
                <Link to="/diarylist">My diaries</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/adddiary">New Diary</Link>
              </Menu.Item>

            </SubMenu>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              MyNotes
            </Menu.Item>

            <SubMenu key="sub2" icon={<TeamOutlined />} title="Note">
              <Menu.Item key="6">
                <Link to="/notelist">My Notes</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/addnote">New Note</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              <Link to="/credit">Crédits</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Content theme={theme} style={{ margin: '0 16px' }}>

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/diarylist">
              <DiaryList />
            </Route>
            <Route path="/adddiary">
              <DiaryCreate />
            </Route>
            <Route path="/notelist">
              <NoteList />
            </Route>
            <Route path="/addnote">
              <NoteCreate />
            </Route>
            <Route path="/credit">
              <Credit />
            </Route>
            <Route path="/profile">
              <h1>profile</h1>
            </Route>
            <Route path="/login">
              <h1>login</h1>
            </Route>
            <Route path="/logout">
              <h1>logout</h1>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0 }}> NoteDiary v0.1 by Celrati 2020 | 2021</Footer>
        </Content>

      </Layout>

    </Layout>
  );
};

export default App;
