import { getNotes } from '@/lib/api';
import NotesClient from './Notes.client';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByTag = async ({ params }: Props) => {
  const { slug } = await params;

  // Якщо slug немає або перший елемент 'all' — тег undefined (показуємо всі нотатки)
  const tag = !slug || slug.length === 0 || slug[0] === 'all' ? undefined : slug[0];

  const data = await getNotes('', 1, 12, tag);

  return (
    <NotesClient
      initialNotes={data.notes}
      initialTotalPages={data.totalPages}
      initialPage={1}
      initialSearch=""
      tag={tag}
    />
  );
};

export default NotesByTag;
