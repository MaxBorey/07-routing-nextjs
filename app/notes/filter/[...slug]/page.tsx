import { getNotes } from '@/lib/api';
import NotesClient from './Notes.client';

type NotesByTagProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotesByTag  ({ params }: NotesByTagProps) {
  const { slug } = await params;
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


