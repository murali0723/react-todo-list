import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim() !== '') {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add new task"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TodoForm;