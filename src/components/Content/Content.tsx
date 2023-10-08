import React, { useState } from 'react';
import { Col, Layout, Row } from 'antd';
import { Routes, Route } from 'react-router-dom';
import HomeContent from '../HomeContent/HomeContent';
import MainContentHeader from '../MainContentHeader/MainContentHeader';
import TaskListDisplay from '../TaskListDisplay/TaskListDisplay';
import { Task } from '../../models/Task';

const initialData: Task[] = [
    {
        Id: 1,
        Title: "Task 1",
        Description: "Description for Task 1",
        DueDate: new Date("2023-10-15"),
        DurationInMinutes: 60,
        UserId: 101,
        Status: false
    },
    {
        Id: 2,
        Title: "Task 2",
        Description: "Description for Task 2",
        DueDate: new Date("2023-10-20"),
        DurationInMinutes: 45,
        UserId: 102,
        Status: false
    },
    {
        Id: 3,
        Title: "Task 3",
        Description: "Description for Task 3",
        DueDate: new Date("2023-10-25"),
        DurationInMinutes: 30,
        UserId: 103,
        Status: false
    },
    // Add more data entries as needed
];

interface ContentProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

const Content: React.FC<ContentProps> = ({collapsed, setCollapsed}) => {
    const [data, setData] = useState<Task[]>(initialData);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const handleStatusChange = (taskId: number, newStatus: boolean) => {
        const updatedData = data.map(task => {
            if (task.Id === taskId) {
                return {
                    ...task,
                    Status: newStatus
                }
            }
            return task;
        });

        setData(updatedData);

        const updatedSelectedTask = updatedData.find(task => task.Id === selectedTask?.Id);
        setSelectedTask(updatedSelectedTask || null);
    }

    return (
        <Layout style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Routes>
                <Route path="/" element={<MainContentHeader title='Home' collapsed={collapsed} setCollapsed={setCollapsed} />} />
                <Route path="/about" element={<MainContentHeader title='About' collapsed={collapsed} setCollapsed={setCollapsed} />} />
            </Routes>
            <Layout>
                <Row>
                    <Col span={5}>
                        <TaskListDisplay data={data} onStatusChange={handleStatusChange} selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
                    </Col>
                    <Col span={19}>
                    <Routes>
                        <Route path="/" element={<HomeContent task={selectedTask} />} />
                    </Routes>
                    </Col>
                </Row>
            </Layout>
        </Layout>
    );
}

export default Content;