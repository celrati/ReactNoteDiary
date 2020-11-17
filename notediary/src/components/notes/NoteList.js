import React, { useCallback, useState } from 'react';
import { noteState, diaryState } from '../atoms';
import { useRecoilState } from "recoil"
import { Row, Col, Card, Skeleton, notification } from 'antd';
import { DownOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

const { Meta } = Card;
const NoteList = () => {

    const [noteList, setNoteList] = useRecoilState(noteState);
    


    const deleteNote = useCallback(
        id => {
            const newList = noteList.filter( note => note.id !== id);
            setNoteList(newList);
        }
        ,[noteList]);

    const showNote = useCallback(
        (name, content) => {
            notification.info({
                message: `note's name : ${name}`,
                description: `content : ${content}`,
                placement : 'topRight',
              });
        }
    );


    return (
        <div className="site-card-wrapper" style={{ marginTop: '2%' }}>
            <Row gutter={16}>

                {
                    noteList.map(note => (
                        <Col span={8} style={{ marginTop: '2%' }}>
                            <Card
                            hoverable
                                style={{ width: 300, marginTop: 16 }}
                                actions={[
                                    <DownOutlined key="show" onClick={() => showNote(note.name, note.content)}/>,
                                    <DeleteOutlined key="delete" onClick={() => deleteNote(note.id)}/>,
                                ]}
                            >
                                <Skeleton loading={false} avatar active>
                                    <Meta
                                        title={note.name}
                                        description={note.content}
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

export default NoteList;