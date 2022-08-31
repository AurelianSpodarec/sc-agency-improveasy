import { useState, useRef, useEffect, useMemo } from 'react';
import { DropdownOption } from '../../types/shared/DropdownOption';
import { FormInputProps } from '../../types/shared/FormInputProps';

const MiniSelect: React.FC<MiniSelectProps> = ({
    name,
    disabled = false,
    value,
    options = [],
    onChange,
}) => {
    const node = useRef<HTMLDivElement | null>(null);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    const selected = useMemo(_getSelected, [value, options]);

    return (
        <div ref={node} onClick={() => !disabled && setIsOpen(!isOpen)}>
            <div className={`form-select mini ${disabled ? 'disabled' : ''}`}>
                <p>{selected?.label}</p>
                <i className="arrow fal fa-angle-down" />
            </div>

            {isOpen && (
                <div className="form-select-options mini">
                    <div className="options-list">
                        {options.map((opt, i) => (
                            <p
                                key={`${opt.value} - ${i}`}
                                className={`option ${value === opt.value ? 'active' : ''}`}
                                onClick={e => {
                                    e.preventDefault();
                                    handleChange(opt.value);
                                }}
                            >
                                {opt.label}
                            </p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

    function _getSelected() {
        return options.find(item => item.value === value);
    }

    function handleClick(e: MouseEvent) {
        // inside click
        if (node?.current?.contains(e.target as Node)) {
            return;
        }

        // outside click
        setIsOpen(false);
    }

    function handleChange(val: number) {
        if (value === val) return;
        onChange(name, val);
    }
};

interface MiniSelectProps extends FormInputProps<number> {
    options: DropdownOption<number>[];
}

export default MiniSelect;
