import { useEffect, useState } from 'react';
import { useModal } from '../../hooks';
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalButton,
  Button,
  ImgButton,
  InputBlock,
  Label,
  InputTask,
  InputTitle,
  TaskContainer,
  ButtonsDiv,
} from '../Style/Modal';

export default function ModalTodo({ isOpen, onClose, registerNote, idAuthor }) {
  const [id, setId] = useState(1);
  const { close, isOpen: status, open } = useModal();
  const [title, updateTitle] = useState('');
  const [tasks, setTasks] = useState([]);
  const author = idAuthor;

  const handleChangeTitle = (e) => {
    updateTitle(e.target.value);
  };

  const onChangeTask = (description, index) => {
    const newTasks = [...tasks];

    newTasks[index].description = description;
    setTasks(newTasks);
  };

  const onClickAddTask = () => {
    if (tasks.length > 0 && !tasks[tasks.length - 1].description) return;

    const newId = `todo-task-${id}`;

    setTasks([
      ...tasks,
      {
        id: newId,
        description: '',
        check: false,
      },
    ]);

    setId(id + 1);
  };

  const deleteTask = (index) => {
    const newTasks = tasks
      .slice(0, index)
      .concat(tasks.slice(index + 1, tasks.legth));

    setTasks(newTasks);
  };

  useEffect(() => {
    if (isOpen) return open();

    close();
  }, [isOpen]);

  const closeModal = () => {
    close();
    onClose();
    updateTitle('');
    setTasks([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const jwt = JSON.parse(localStorage.getItem('token'));

    closeModal();

    const sendData = {
      title,
      tasks,
      author,
    };

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(sendData),
    };

    fetch('http://localhost:5137/user/note-register', config)
      .then((res) => res.json())
      .then((res) => {
        registerNote(sendData);
        updateTitle('');
      })
      .catch((error) => console.error(error));
  };

  if (!status) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <h1>New Note</h1>
          <ModalButton onClick={closeModal}>X</ModalButton>
        </ModalHeader>

        <form onSubmit={handleSubmit}>
          <Label> Title</Label>
          <InputTitle
            required={true}
            value={title}
            onChange={handleChangeTitle}
            autoFocus
          />
          <TaskContainer>
            {tasks.map((task, index) => (
              <div key={task.id}>
                <Label> Task: {index + 1} </Label>
                <InputBlock>
                  <InputTask
                    required={true}
                    value={task.description}
                    onChange={(e) => onChangeTask(e.target.value, index)}
                    autoFocus
                  />
                  <ImgButton
                    src='../minus.webp'
                    onClick={() => deleteTask(index)}
                  />
                </InputBlock>
              </div>
            ))}
          </TaskContainer>
          <ButtonsDiv>
            <ImgButton src='../plus.webp' onClick={onClickAddTask} />
            <Button>Accept</Button>
          </ButtonsDiv>
        </form>
      </ModalContainer>
    </Overlay>
  );
}
