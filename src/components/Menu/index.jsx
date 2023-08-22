import { Overlay, Option, Container } from '../Style/Menu';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <Overlay>
      <Link to='/profile/:id'>
        <Container>
          <Option>Profile</Option>
        </Container>
      </Link>
      <Link to='/'>
        <Container>
          <Option>Close Session</Option>
        </Container>
      </Link>
    </Overlay>
  );
}
