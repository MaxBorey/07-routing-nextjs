import { getNotes } from '@/lib/api';
import NotesClient from './Notes.client';

type Props = {
  params: { slug?: string[] };
};

const NotesByTag = async ({ params }: Props) => {
  const slug = params.slug || [];
  const tag = slug[0] === 'all' || !slug.length ? undefined : slug[0];
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


