import { List } from 'antd';
import TaskDisplay from '../TaskDisplay/TaskDisplay';
import { Task } from '../../models/Task';

interface TaskListDisplayProps {
    data: Task[],
    onStatusChange: (task: number, newStatus: boolean) => void;
    selectedTask: Task | null;
    setSelectedTask: (task: Task | null) => void;
}

const TaskListDisplay: React.FC<TaskListDisplayProps> = ({data, onStatusChange, selectedTask, setSelectedTask}) => {

    return (
        <List 
            bordered 
            dataSource={data}
            renderItem={(item) => (
                <List.Item
                onClick={() => {
                    setSelectedTask(item);
                }}
                    style={selectedTask?.Id === item.Id ? { backgroundColor: '#a3c6ff' } : {}}
                    >
                    <TaskDisplay task={item} onStatusChange={onStatusChange} />
                </List.Item>
            )}
        />
    )
};

export default TaskListDisplay;