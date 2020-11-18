import React, { useCallback, useState } from 'react';
import { noteState, diaryState } from '../atoms';
import { useRecoilState } from "recoil"
import { Row, Col, Card, Skeleton, notification } from 'antd';
import { DownOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

const { Meta } = Card;
const DiaryList = () => {

    const [diaryList, setDiaryList] = useRecoilState(diaryState);
    


    const deleteDiary = useCallback(
        id => {
            const newList = diaryList.filter( diary => diary.id !== id);
            setDiaryList(newList);
        }
        ,[diaryList]);

    const showDiary = useCallback(
        (name, content) => {
            notification.info({
                message: `diary's name : ${name}`,
                description: `content : ${content}`,
                placement : 'topRight',
              });
        }
    );


    return (
        <div className="site-card-wrapper" style={{ marginTop: '2%' }}>
            <Row gutter={16}>

                {
                    diaryList.map(diary => (
                        <Col span={8} style={{ marginTop: '2%' }}>
                            <Card
                            hoverable
                                style={{ width: 300, marginTop: 16 }}
                                actions={[
                                    <DownOutlined key="show" onClick={() => showDiary(diary.name, diary.content)}/>,
                                    <DeleteOutlined key="delete" onClick={() => deleteDiary(diary.id)}/>,
                                ]}
                            >
                                <Skeleton loading={false} avatar active>
                                    <Meta
                                        title={diary.name}
                                        description={diary.content}
                                    />
                                </Skeleton>
                            </Card>
                        </Col>
                    ))
                }

            </Row>
        </div>
    );
};

export default DiaryList;