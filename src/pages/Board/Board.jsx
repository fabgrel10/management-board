import { useEffect, useState } from 'react';

import Lane from '../../components/Lane/Lane';
import useDataFetching from '../../hooks/useDataFetching';

import './Board.css';

const lanes = [
  { id: 1, title: 'To Do' },
  { id: 2, title: 'In Progress' },
  { id: 3, title: 'Review' },
  { id: 4, title: 'Done' }
];

function onDragStart(ev, taskId) {
  ev.dataTransfer.setData('taskId', taskId);
}

function onDragOver(ev) {
  ev.preventDefault();
}

function Board() {
  const [loading, error, data] = useDataFetching(
    `https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`
  );

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, [data]);

  function onDrop(ev, laneId) {
    const taskId = ev.dataTransfer.getData('taskId');

    // Update the task's lane
    const updatedTasks = tasks.filter(task => {
      if (task.id.toString() === taskId) {
        task.lane = laneId;
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="Board-wrapper">
      {lanes.map(lane => (
        <Lane
          key={lane.id}
          laneId={lane.id}
          title={lane.title}
          loading={loading}
          error={error}
          tasks={tasks.filter(task => task.lane === lane.id)}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      ))}
    </div>
  );
}

export default Board;
