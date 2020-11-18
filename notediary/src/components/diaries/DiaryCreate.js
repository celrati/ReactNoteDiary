import React, { useCallback, useState, useEffect } from 'react';
import { noteState, diaryState } from '../atoms';
import { useRecoilState } from "recoil"
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const DiaryCreate = () => {

    const [diaryList, setDiaryList] = useRecoilState(diaryState);
    const [form] = Form.useForm();
    let history = useHistory();
    const newNote = useCallback(
        (values) => {
            let max = 0;
            diaryList.forEach(note => {
                if (note.id > max) {
                    max = note.id;
                }
            });
            max += 1;
            setDiaryList([...diaryList, { id: max, name: values.diaryName, content: values.diaryContent }])
            history.push('/diarylist');
        }
        , []);

    return (
        <Form form={form} name="horizontal_login" layout="inline" style={{ marginTop: '3%' }} onFinish={newNote}>
            <Form.Item
                name="diaryName"
                rules={[{ required: true, message: 'Please input the name of your diary !' }]}
            >
                <Input placeholder="diaryName" />
            </Form.Item>
            <Form.Item
                name="diaryContent"
                rules={[{ required: true, message: 'Please input some content !' }]}
            >
                <Input

                    placeholder="diaryContent"
                />
            </Form.Item>
            <Form.Item shouldUpdate={true}>
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit"

                    >
                        New Diary
            </Button>
                )}
            </Form.Item>
        </Form>
    );
};

export default DiaryCreate;