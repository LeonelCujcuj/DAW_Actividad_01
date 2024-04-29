import Button from 'react-bootstrap/Button';
import './FloatingAddBtn.scss';

function FloatingAddBtn() {
  return (
    <>
      <Button variant="primary" type="submit" id='AddGoal'>
        Add Goal
      </Button>{' '}
    </>
  );
}

export default FloatingAddBtn;