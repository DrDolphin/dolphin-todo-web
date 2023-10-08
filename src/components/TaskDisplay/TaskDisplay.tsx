import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox"
import './TaskDisplay.css'
import { Task } from "../../models/Task";

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
    
    const handleLabelClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
    };

    return (
        <Checkbox onChange={onChange}  
            onClick={(e) => e.stopPropagation()}
            value={task.Status}
        >
            <span onClick={handleLabelClick}>{task.Title}</span>
        </Checkbox>
    )
}

export default TaskDisplay;