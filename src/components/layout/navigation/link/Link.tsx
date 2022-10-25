import NextLink from 'next/link';
import { Color } from 'types/types';
import classNames from 'classnames/bind';
import styles from './link.module.scss';

const cn = classNames.bind(styles);

interface Props {
    children: string;
    href: string;
    color: Color;
}

const Link = ({ children, href, color }: Props) => {
    return (
        <li className={cn('wrapper', color)}>
            <NextLink href={href}>{children}</NextLink>
        </li>
    );
};

export default Link;
