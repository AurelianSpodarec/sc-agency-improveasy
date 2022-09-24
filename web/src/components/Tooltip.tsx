import { useState } from 'react';

function Tooltip(props: any) {
    const { children, name, position } = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                {children}
            </div>
            <div
                className={`tooltip ${isOpen ? 'is-open' : 'hidden'} `}
                style={{ userSelect: 'none' }}
            >
                {name}
            </div>
        </div>
    );
}

export default Tooltip;
