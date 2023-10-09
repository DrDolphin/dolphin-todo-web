import { List } from 'antd';
import TaskDisplay from '../TaskDisplay/TaskDisplay';
import { Task } from '../../models/Task';
import { Content } from 'antd/es/layout/layout';

interface TaskListDisplayProps {
    data: Task[];
    onStatusChange: (task: number, newStatus: boolean) => void;
    selectedTask: Task | null;
    setSelectedTask: (task: Task | null) => void;
}

const TaskListDisplay: React.FC<TaskListDisplayProps> = ({data, onStatusChange, selectedTask, setSelectedTask}) => {

    return (
        <Content style={{ height: '100%' }}>
            <div
                id='scrollableDiv'
                style={{
                    height: '100%',
                    overflow: 'auto',
                }}
            >
                <List 
                    bordered 
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item
                            onClick={() => {
                                setSelectedTask(item);
                            }}
                            style={{
                                padding:'0 0 6px 0'
                            }}
                        >
                            <TaskDisplay task={item} onStatusChange={onStatusChange} />
                        </List.Item>
                    )}
                />
            </div>
        </Content>
    )
};

export default TaskListDisplay;