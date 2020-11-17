import React, { useCallback, useState, useEffect } from 'react';
import { noteState } from '../atoms';
import { useRecoilState } from "recoil"
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const NoteCreate = () => {

    const [noteList, setNoteList] = useRecoilState(noteState);
    const [form] = Form.useForm();
    let history = useHistory();
    const newNote = useCallback(
        (values) => {
            let max = 0;
            noteList.forEach(note => {
                if (note.id > max) {
                    max = note.id;
                }
            });
            max += 1;
            setNoteList([...noteList, { id: max, name: values.noteName, content: values.noteContent }])
            history.push('/notelist');
        }
        , []);

    return (
        <Form form={form} name="horizontal_login" layout="inline" style={{ marginTop: '3%' }} onFinish={newNote}>
            <Form.Item
                name="noteName"
                rules={[{ required: true, message: 'Please input the name of your note !' }]}
            >
                <Input placeholder="noteName" />
            </Form.Item>
            <Form.Item
                name="noteContent"
                rules={[{ required: true, message: 'Please input some content !' }]}
            >
                <Input

                    placeholder="noteContent"
                />
            </Form.Item>
            <Form.Item shouldUpdate={true}>
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit"

                    >
                        New Note
            </Button>
                )}
            </Form.Item>
        </Form>
    );
};

export default NoteCreate;