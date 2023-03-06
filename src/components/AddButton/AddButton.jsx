import { MdAddCircle } from 'react-icons/md';
import { Button } from './AddButton.styled';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/contacts/slice';

export const AddButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      type="button"
      aria-label="Add transaction"
      onClick={() => dispatch(toggleModal())}
    >
      <MdAddCircle size={44} />
    </Button>
  );
};
