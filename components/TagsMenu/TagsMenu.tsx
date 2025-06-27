'use client';
import { useState } from 'react';
import Link from 'next/link';
import { getNotesByTag, NoteTag } from '@/lib/api';
import css from './CategoriesMenu.module.css';
import { Note } from '@/types/note';

type Props = {
    tags: string[]; // масив назв тегів
  };

const TagsMenu = ({ tags }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuBtn}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menu}>
          <li className={css.menuItem}>
            <Link href="/notes/filter" legacyBehavior>
              <a onClick={toggle} className={css.menuLink}>
                All notes
              </a>
            </Link>
          </li>
          {tags.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <Link href={`/notes/filter/${tag}`} legacyBehavior>
                <a onClick={toggle} className={css.menuLink}>
                  {tag}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
