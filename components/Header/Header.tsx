import css from './Header.module.css';
import Link from 'next/link';

const Header = async () => {
  const tags = ['Work', 'Personal', 'Meeting', 'Shopping', 'Todo'];

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.logo}>
        <span className={css.logoNote}>Notehub</span>
      </Link>
      <nav aria-label="Main Navigation" role="navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/" className={css.navLink}>
              Home
            </Link>
          </li>
          <li>
            <div className={css.menuContainer}>
              <button className={css.menuButton}>
                Notes ▾
              </button>
              <ul className={css.menuList}>
                {tags.map((tag) => (
                  <li key={tag} className={css.menuItem}>
                    <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
