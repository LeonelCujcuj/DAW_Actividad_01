import React from 'react';
import Button from 'react-bootstrap/Button';

const StaticAddBtn = ({ onClick, selectedOption }) => {
    return (
        <Button type="submit" onClick={onClick} className="addTaskButton">
            {selectedOption === 'tasks' ? 'Add Task' : 'Add Goal'}
        </Button>
    );
}

export default StaticAddBtn;
