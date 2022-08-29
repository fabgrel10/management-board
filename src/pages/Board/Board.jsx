import { useEffect, useState } from 'react';

import Lane from '../../components/Lane/Lane';

import './Board.css';

const lanes = [
  { id: 1, title: 'To Do' },
  { id: 2, title: 'In Progress' },
  { id: 3, title: 'Review' },
  { id: 4, title: 'Done' }
];

function Board() {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiTasks = await fetch(
          `https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`
        );
        const result = await apiTasks.json();

        if (result) {
          setTasks(result);
          setLoading(false);
        }
      } catch (e) {
        setError(error);
        setLoading(false);
      }
    }
  }, [error]);

  return (
    <div className="Board-wrapper">
      {lanes.map(lane => (
        <Lane
          key={lane.id}
          title={lane.title}
          loading={loading}
          error={error}
          tasks={tasks.filter((task) => task.lane === lane.id)}
        />
      ))}
    </div>
  );
}

export default Board;
