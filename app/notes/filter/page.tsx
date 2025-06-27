import { getNotes } from '@/lib/api';
import NotesClient from '../filter/[...slug]/Notes.client'; 

const NotesAllPage = async () => {
  const data = await getNotes('', 1, 12);

  return (
    <NotesClient
      initialNotes={data.notes}
      initialTotalPages={data.totalPages}
      initialPage={1}
      initialSearch=""
      tag={undefined}
    />
  );
};

export default NotesAllPage;