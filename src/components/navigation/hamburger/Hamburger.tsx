import classNames from 'classnames/bind';
import { Color } from 'types/types';
import styles from './Hamburger.module.scss';

const cn = classNames.bind(styles);

interface Props {
    color: Color;
    isOpen: boolean;
    handleClick: () => void;
}

const Hamburger = ({ color = 'dark', isOpen, handleClick }: Props) => {
    return (
        <button
            type="button"
            aria-label="menu"
            className={cn('wrapper', color, { open: isOpen })}
            onClick={handleClick}
        >
            <div></div>
            <div></div>
            <div></div>
        </button>
    );
};

export default Hamburger;
