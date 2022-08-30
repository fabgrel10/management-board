import './Task.css';

function Task({ title, body, id, onDragStart }) {
  return (
    <div
      className="task-wrapper"
      draggable
      onDragStart={e => onDragStart(e, id)}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
export default Task;
