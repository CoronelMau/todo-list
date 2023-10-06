import { TodoNote, NotesTitle, Tasks, Task, Text } from '../Style/Notes';
import { useState } from 'react';

export default function Note(props) {
  const { _id, title, tasks } = props.data;

  const [check, setCheck] = useState(() => {
    const checkedTasks = tasks.map((task) => task.check);
    return checkedTasks;
  });

  const handleCheck = (index) => {
    const jwt = JSON.parse(localStorage.getItem('token'));

    const newCheck = [...check];
    newCheck[index] = !newCheck[index];

    setCheck(newCheck);
    tasks[index].check = newCheck[index];

    const data = {
      _id,
      tasks,
    };

    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    };

    fetch('http://localhost:5137/user/check-update', config)
      .then((res) => {
        return res.json();
      })
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  return (
    <TodoNote>
      <NotesTitle> {title}</NotesTitle>
      <Tasks>
        {tasks.map((task, index) => (
          <Task key={task.id}>
            <input
              type='checkbox'
              checked={check[index]}
              onChange={() => {
                handleCheck(index);
              }}
            />
            <Text>{task.description}</Text>
          </Task>
        ))}
      </Tasks>
    </TodoNote>
  );
}
