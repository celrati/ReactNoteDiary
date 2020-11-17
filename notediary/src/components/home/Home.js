import React  from 'react';
import { Divider } from 'antd';

const Home = () => {
    return (
        <div style={{ color: 'blue', fontSize : '20px', textAlign: 'center', marginTop: '10%'}}>
            Welcome dear user To My DiaryNote v0.1, you can write your diaries <br/>
            and your notes here.
            <Divider />
            Techno used : ReactJS with hooks, Ant Design, RecoilJS as state management,
            Axios for the HTTP queries, react-router-dom for routing
        </div>
    );
};

export default Home;