import { useState } from 'react';
import { Task } from '../../models/Task';
import { theme } from 'antd';

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

export const MainContentController = () => {
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

    const showSomePopup = () => {
        console.log('This does something eventually maybe?');
    }

    return {
        data,
        setData,
        selectedTask,
        setSelectedTask,
        handleStatusChange,
        showSomePopup
    }
}