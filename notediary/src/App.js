import React, { useCallback, useState } from 'react';

import './App.css';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { Layout, Menu, Breadcrumb, Switch as ThemeSwitch } from 'antd';
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

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const textState = atom({
  key: 'textState',
  default: 'Hello Celrati'
});

const textSize = selector({
  key: 'textStateSize',
  get: ({ get }) => {
    return get(textState).length;
  },
});

const todoListState = atom({
  key: 'todoListState',
  default: [],
});


const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('light');
  const [colorHeader, setColorHeader] = useState('white');


  const [text, setText] = useRecoilState(textState);
  const sizeText = useRecoilValue(textSize);

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

  return (
    <Layout theme={theme} style={{ minHeight: '100vh' }}>

      <Header theme={theme} style={{ width: '100%', backgroundColor: `${colorHeader}` }}>

        <Menu theme={theme} mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/mydiaries">My diaries</Link>
          </Menu.Item>

          <Menu.Item style={{ float: 'right' }} key="6">
            <ThemeSwitch
              checked={theme === 'dark'}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </Menu.Item>

          <Menu.Item style={{ float: 'right' }} key="5">LogOut</Menu.Item>
          <Menu.Item style={{ float: 'right' }} key="4">LogIn</Menu.Item>
          <Menu.Item style={{ float: 'right' }} key="3">Profile</Menu.Item>
        </Menu>


      </Header>

      <Layout theme={theme} className="site-layout">
        <Sider theme={theme} collapsible collapsed={collapsed} onCollapse={() => hideShow()}>

          <Menu theme={theme} defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              MyDiaries
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Diary">
              <Menu.Item key="3">Diary's list</Menu.Item>
              <Menu.Item key="4">Add new Diary</Menu.Item>

            </SubMenu>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              MyNotes
            </Menu.Item>

            <SubMenu key="sub2" icon={<TeamOutlined />} title="Note">
              <Menu.Item key="6">Note's list</Menu.Item>
              <Menu.Item key="8">Add new Note</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Crédits
            </Menu.Item>
          </Menu>
        </Sider>

        <Content theme={theme} style={{ margin: '0 16px' }}>

          <Switch>
            <Route path="/">
              <h1>home</h1>
            </Route>
            <Route path="/mydiaries">
              <h1>My diaries</h1>
            </Route>
            <Route path="/diarylist">
              <h1>diarylist</h1>
            </Route>
            <Route path="/adddiary">
              <h1>diarylist</h1>
            </Route>
            <Route path="/notelist">
              <h1>diarylist</h1>
            </Route>
            <Route path="/addnote">
              <h1>diarylist</h1>
            </Route>
            <Route path="/credit">
              <h1>credit</h1>
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
          </Switch>

          <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0 }}> NoteDiary v0.1 by Celrati 2020 | 2021</Footer>
        </Content>

      </Layout>

    </Layout>
  );
};

export default App;
