import { fetchNoteById } from '@/lib/api';
import Modal from '@/components/Modal/Modal';

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
    const { id } = await params;
    const NoteId = Number(id)
  const note = await fetchNoteById(NoteId);

  return (
    <Modal>
      <h2>{note.title}</h2>
          <p>{note.content}</p>
          <p>{note.tag}</p>
          <p>{note.createdAt}</p>
    </Modal>
  );
};

export default NotePreview;
