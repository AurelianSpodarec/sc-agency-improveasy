import { createPortal } from 'react-dom';

import { useState, useEffect } from 'react';
import Title from '../typography/Title';
import useDarkMode from '../../hooks/useDarkMode';

// size options are: large, medium, small
const Modal: React.FC<ModalProps> = ({
    children,
    size = 'small',
    style = {},
    title,
}) => {
    const [hidden, updateHidden] = useState(true);
    const [darkMode] = useDarkMode();

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        // initially hidding the modal so that we can ease
        // in the opacity.
        updateHidden(false);

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const className = hidden ? 'hidden' : '';
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot === null) return null;
    return createPortal(
        <div
            className={`modal-overlay ${className}`}
            data-theme={darkMode ? 'dark' : 'light'}
        >
            <div
                className={`modal-body custom-scroll ${size} ${className}`}
                style={style}
            >
                {!!title && <Title>{title}</Title>}
                {children}
            </div>
        </div>,
        modalRoot,
    );
};

interface ModalProps {
    children: React.ReactNode;
    size?: string;
    title?: string;
    style?: React.CSSProperties;
}

export default Modal;
