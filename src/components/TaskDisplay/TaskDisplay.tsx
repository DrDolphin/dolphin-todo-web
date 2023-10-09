import Checkbox, { CheckboxChangeEvent } from 'antd/es/checkbox'
import './TaskDisplay.css'
import { Task } from '../../models/Task';
import { Col, Layout, Row } from 'antd';

interface TaskDisplayProps {
    task: Task
    onStatusChange: (taskId: number, newStatus: boolean) => void;
}

const TaskDisplay: React.FC<TaskDisplayProps> = ({task, onStatusChange}) => {
    const onChange = (e: CheckboxChangeEvent) => {
        e.stopPropagation();
        task.Status = e.target.value;
        onStatusChange(task.Id, e.target.checked)
    };

    return (
        <Layout>
            <Row style={{ padding:'6px 0' }}>
                <Col span={2}>
                
                </Col>
                <Col span={1}>
                    <Checkbox onChange={onChange}  
                        onClick={(e) => e.stopPropagation()}
                        value={task.Status}
                    />
                </Col>
                <Col span={19}>
                    {task.Title}
                </Col>
                <Col span={2}>
                
                </Col>
            </Row>
        </Layout>
    )
}

export default TaskDisplay;