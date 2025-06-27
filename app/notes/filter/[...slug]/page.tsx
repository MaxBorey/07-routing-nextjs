// app/notes/filter/[...slug]/page.tsx

import { getNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
import TagsMenu from '@/components/TagsMenu/TagsMenu';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByTag = async ({ params }: Props) => {
  const { slug } = await params;
  const tag = slug[0] === 'all' ? undefined : slug[0];
  const response = await getNotes('', 1, 12, tag);

  return (
    <div>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </div>
  );
};

export default NotesByTag;
