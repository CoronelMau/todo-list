import { Notes, NotesTitle, Tasks, CheckBox, Text } from '../Style/Notes';
import { useState } from 'react';

export default function Note(props) {
  const { title, task } = props.data;

  const [check, setCheck] = useState(false);

  const toggleCheck = () => {
    setCheck(!check);
  };

  return (
    <Notes>
      <NotesTitle> {title}</NotesTitle>
      <Tasks>
        <CheckBox
          onClick={toggleCheck}
          src={check ? '../check.webp' : '../square.webp'}
        />
        <Text>{task}</Text>
      </Tasks>
    </Notes>
  );
}
