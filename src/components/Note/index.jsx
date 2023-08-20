// import { useState } from 'react';
import { TodoNote, NotesTitle, Tasks, Task, Text } from '../Style/Notes';

export default function Note(props) {
  const { title, tasks } = props.data;

  return (
    <TodoNote>
      <NotesTitle> {title}</NotesTitle>
      <Tasks>
        {tasks.map((task) => (
          <Task key={task.id}>
            <input type='checkbox' onChange={() => console.log('Hello')} />
            <Text>{task.description}</Text>
          </Task>
        ))}
      </Tasks>
    </TodoNote>
  );
}
