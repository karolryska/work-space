import NextLink from 'next/link';
import styles from './Link.module.scss';

interface Props {
    children: string;
    href: string;
}

const Link = ({ children, href }: Props) => {
    return (
        <NextLink href={href}>
            <a className={styles.wrapper}>{children}</a>
        </NextLink>
    );
};

export default Link;
