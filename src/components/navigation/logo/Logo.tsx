import Link from 'next/link';
import classNames from 'classnames/bind';
import { Color } from 'types/types';
import Icon from 'assets/icons/logo.svg';
import styles from './Logo.module.scss';

const cn = classNames.bind(styles);

interface Props {
    color: Color;
}

const Logo = ({ color }: Props) => {
    return (
        <Link href="/">
            <div className={cn('wrapper', color)}>
                <Icon />
            </div>
        </Link>
    );
};

export default Logo;
