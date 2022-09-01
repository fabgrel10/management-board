import styled from '@emotion/styled';

const TaskWrapper = styled.div`
  background: darkGray;
  padding: 20px;
  border-radius: 20px;
  margin: 0% 5% 5% 5%;
`;

const Body = styled.p`
  width: 100%;
  margin: 0;
  font-size: 0.8rem;
`;

function Task({ title, body, id, onDragStart }) {
  return (
    <TaskWrapper
      draggable
      onDragStart={e => onDragStart(e, id)}
    >
      <h3>{title}</h3>
      <Body>{body}</Body>
    </TaskWrapper>
  );
}
export default Task;
