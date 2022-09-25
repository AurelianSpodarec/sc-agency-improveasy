import { useState } from 'react';

function MeesTooltip(props: any) {
    const { children, name, position } = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                {children}
            </div>
            <div
                className={`mees-tooltip ${isOpen ? 'is-open' : 'hidden'} `}
                style={{ userSelect: 'none' }}
            >
                {name}
            </div>
        </div>
    );
}

export default MeesTooltip;
