'use client';
import css from './Modal.module.css';
import { useRouter } from 'next/navigation';

type ModalProps = {
  children: React.ReactNode;
  onClose?: () => void; 
};

const Modal = ({ children }: ModalProps) => {
  const router = useRouter();
  
  const close = () => router.back();

  return (
    <div className={css.backdrop} onClick={close}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
