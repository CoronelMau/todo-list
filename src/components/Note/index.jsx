import { Notes, NotesTitle, Tasks, Text } from '../Style/Notes';

export default function Note(props) {
  const { title, task } = props.data;

  return (
    <Notes>
      <NotesTitle> {title}</NotesTitle>
      <Tasks>
        <input type='checkbox' />
        <Text>{task}</Text>
      </Tasks>
    </Notes>
  );
}
