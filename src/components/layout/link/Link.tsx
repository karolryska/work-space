import NextLink from 'next/link';
import styles from './Link.module.scss';

interface Props {
    children: string;
    href: string;
}

const Link = ({ children, href }: Props) => {
    return (
        <li className={styles.wrapper}>
            <NextLink href={href}>{children}</NextLink>
        </li>
    );
};

export default Link;
