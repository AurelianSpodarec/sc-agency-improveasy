import { useState } from 'react';

function SurveyTooltip(props: any) {
    const { children, name, title, position } = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                {children}
            </div>
            <div
                className={`survey-tooltip ${isOpen ? 'is-open' : 'hidden'} `}
                style={{ userSelect: 'none' }}
            >
                {name || title}
            </div>
        </div>
    );
}

export default SurveyTooltip;
