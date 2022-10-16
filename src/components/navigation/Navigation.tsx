import { useState } from 'react';
import classNames from 'classnames/bind';
import { Color } from 'types/types';
import Logo from './logo/Logo';
import Hamburger from './hamburger/Hamburger';
import Link from './link/Link';
import styles from './Navigation.module.scss';

const cn = classNames.bind(styles);

interface Props {
    color: Color;
}

const Navigation = ({ color }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prevState) => !prevState);

    return (
        <nav className={cn('wrapper', { open: isOpen })}>
            <div className={cn('mobile')}>
                <Logo color={color} />
                <Hamburger color={color} handleClick={toggleMenu} />
            </div>
            <div className={cn('menu')}>
                <div className={cn('innerWrapper')}>
                    <Logo color="light" />
                    <Hamburger color="light" handleClick={toggleMenu} />
                </div>
                <ul className={cn('list')}>
                    <Link href="/oferta">Oferta</Link>
                    <Link href="/kontakt">Kontakt</Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
