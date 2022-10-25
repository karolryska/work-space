import { Color } from 'types/types';
import Logo from 'assets/icons/logo.svg';
import Navigation from './navigation/Navigation';
import Link from './link/Link';
import styles from './Layout.module.scss';

interface Props {
    children: React.ReactNode;
    color: Color;
}

const Layout = ({ children, color }: Props) => {
    return (
        <div className={styles.wrapper}>
            <Navigation color={color} />
            <div className={styles.content}>{children}</div>
            <footer className={styles.footer}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <ul className={styles.links}>
                    <Link href="/">Regulamin</Link>
                    <Link href="/">Polityka prywatności</Link>
                </ul>
            </footer>
        </div>
    );
};

export default Layout;
