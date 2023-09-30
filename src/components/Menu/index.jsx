import { Overlay, Option, Container } from '../Style/Menu';
import { Link, useNavigate } from 'react-router-dom';

export default function Menu() {
  const navigate = useNavigate();

  return (
    <Overlay>
      <Link to='/profile'>
        <Container>
          <Option>Profile</Option>
        </Container>
      </Link>
      <Link to='/'>
        <Container>
          <Option
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/');
            }}
          >
            Close Session
          </Option>
        </Container>
      </Link>
    </Overlay>
  );
}
