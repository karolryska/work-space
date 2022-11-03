import { useState } from 'react';
import classNames from 'classnames/bind';
import { useDeviceSize } from 'context/DeviceSizeContext';
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
    const { isMobile } = useDeviceSize();

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prevState) => !prevState);

    return (
        <nav className={cn('wrapper', { open: isOpen })}>
            <div className={cn('inner-wrapper')}>
                <Logo color={color} />
                <Hamburger color={color} handleClick={toggleMenu} isOpen={isOpen} />
            </div>
            {isMobile && (
                <div className={cn('mask')} aria-hidden="true">
                    <Logo color="light" />
                    <Hamburger color="light" handleClick={toggleMenu} isOpen={isOpen} />
                </div>
            )}
            <div className={cn('links')}>
                {/* <div className={cn('innerWrapper')}>
                    <Logo color="light" />
                    <Hamburger color="light" handleClick={toggleMenu} />
                </div> */}
                <ul className={cn('list')}>
                    <Link href="/oferta" color={color}>
                        Oferta
                    </Link>
                    <Link href="/kontakt" color={color}>
                        Kontakt
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
