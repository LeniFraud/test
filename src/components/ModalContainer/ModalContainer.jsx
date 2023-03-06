import { MdClose } from 'react-icons/md';
// import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBox, CloseButton } from './ModalContainer.styled';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/contacts/slice';

const modalRoot = document.getElementById('modal-root');

export const ModalContainer = ({ children }) => {
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     const onEscapeClick = e => {
  //       if (e.code === 'Escape') onClose();
  //     };

  //     document.body.style = 'overflow-y: hidden';
  //     window.addEventListener('keydown', onEscapeClick);

  //     return () => {
  //       document.body.style = 'overflow-y: auto';
  //       window.removeEventListener('keydown', onEscapeClick);
  //     };
  //   }, [onClose]);

  //   const onOverlayClick = e => {
  //     if (e.target === e.currentTarget) onClose();
  //   };

  return createPortal(
    <Overlay>
      <ModalBox>
        <CloseButton type="button" onClick={() => dispatch(toggleModal())}>
          <MdClose size={28} />
        </CloseButton>
        {children}
      </ModalBox>
    </Overlay>,
    modalRoot
  );
};
