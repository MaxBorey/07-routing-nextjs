'use client';
import css from './Modal.module.css';
import { useRouter } from 'next/navigation';

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const router = useRouter();
  
  const close = () => router.back();

  return (
    <div className={css.backdrop} onClick={close}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
