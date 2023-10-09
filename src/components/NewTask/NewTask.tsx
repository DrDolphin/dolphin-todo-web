import { Button, Form, Input } from 'antd';
import { Task } from '../../models/Task';
import React, { useState } from 'react';
import './NewTask.css';

interface NewTaskProps {
    data: Task[];
    setData: (tasks: Task[]) => void;
}

const NewTask: React.FC<NewTaskProps> = ({ data, setData }) => {
    const [taskInputValue, setTaskInputValue] = useState('');
    const [form] = Form.useForm();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskInputValue(e.target.value);
    }

    const handleNewTaskButtonPress = () => {
        form.validateFields();
        if (taskInputValue) {
            const newTask = new Task(taskInputValue);
            const updatedData = [...data, newTask];
            setData(updatedData);
            setTaskInputValue('');
            form.setFieldValue('taskName', '');
        }
        
    }
    return (
        <Form form={form} onFinish={handleNewTaskButtonPress}>
            <Form.Item
                name='taskName'
                help=''
                rules={[
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                
            >
                <Input placeholder='Task Name' value={taskInputValue} onChange={handleInputChange} />
            </Form.Item>
            <Form.Item
                name='submit'    
            >
                <Button type='primary' onClick={handleNewTaskButtonPress}>New Task</Button>
            </Form.Item>
        </Form>
    );
};

export default NewTask;