import { useState, useRef, useEffect, useMemo, SyntheticEvent } from 'react';

import useFieldValidation from '../../hooks/useFieldValidation';
import usePrevious from '../../hooks/usePrevious';
import { DropdownOption } from '../../types/shared/DropdownOption';
import { FormInputProps } from '../../types/shared/FormInputProps';
import FormField from './FormField';

// Select is a single select dropdown
// pass 'required' flag if it's required
// pass 'search' flag if you want to enable the search
// pass 'disabled' flag if you want to disable the dropdown
// pass a 'placeholder' string if you want to customize the placeholder
// pass a 'label' string if you want to output a field name above the select.
// field errors will be output below automatically
// options should be in this form '[{ value: 1, label: "opt 1" }, { value: 2, label: "opt 2" }]'
// value should be the selected 'value' not option(the number not the object)
// pass `null` as the default value
const Select: React.FC<SelectProps> = ({
    name,
    search = false,
    disabled = false,
    value = null,
    options = [],
    onChange,
    label = '',
    placeholder = 'Select...',
    required,
    customValidate,
}) => {
    const [error, showError] = useFieldValidation({
        name,
        required,
        customValidate,
        value,
    });

    const [searchTerm, setSearch] = useState('');
    const node = useRef<HTMLDivElement | null>(null);

    const [isOpen, setIsOpen] = useState(false);
    const prevIsOpen = usePrevious(isOpen);

    useEffect(() => {
        if (!isOpen && prevIsOpen) {
            showError();
        }
    }, [isOpen, showError, prevIsOpen]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    const filteredOptions = useMemo(_getFilteredOptions, [search, searchTerm, options]);
    const selected = useMemo(_getSelected, [value, options]);

    return (
        <FormField name={name} label={label} required={required} error={error}>
            <div ref={node} onClick={() => !disabled && setIsOpen(!isOpen)}>
                <div
                    className={`form-select ${disabled ? 'disabled' : ''} ${error ? 'error' : ''}`}
                >
                    {!selected ? (
                        <p className="placeholder">{placeholder}</p>
                    ) : (
                        <>
                            <p>{selected.label}</p>
                            {!disabled && (
                                <button
                                    className="remove"
                                    onClick={e => {
                                        e.preventDefault();
                                        e.stopPropagation();

                                        handleChange(null);
                                    }}
                                >
                                    <i className="fal fa-times" />
                                </button>
                            )}
                        </>
                    )}
                    <i className="arrow fal fa-angle-down" />
                </div>

                {isOpen && (
                    <div className="form-select-options">
                        {search && !!options.length && (
                            <div className="search" onClick={e => e.stopPropagation()}>
                                <input
                                    className="form-input"
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            </div>
                        )}
                        <div className="options-list">
                            {!filteredOptions.length && <p>There are no options to display</p>}

                            {filteredOptions.map((opt, i) => (
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
        </FormField>
    );

    function _getSelected() {
        return options.find(item => item.value === value);
    }

    function _getFilteredOptions() {
        if (!search || !searchTerm) return options;
        return options.filter(opt =>
            opt.label
                .replace(/[^A-Z0-9]/gi, '')
                .toLowerCase()
                .includes(searchTerm.replace(/[^A-Z0-9]/gi, '').toLowerCase()),
        );
    }

    function handleClick(e: Event) {
        // inside click
        if (node?.current?.contains(e.target as Node)) {
            return;
        }

        // outside click
        setIsOpen(false);
    }

    function handleSearchChange(e: SyntheticEvent) {
        e.preventDefault();

        setSearch((e.target as HTMLTextAreaElement).value);
    }

    function handleChange(val: number | null) {
        if (value === val) return;
        onChange(name, val);
    }
};

interface SelectProps extends FormInputProps<number | null> {
    search?: boolean;
    options?: DropdownOption<number>[];
    label?: string;
    placeholder?: string;
}

export default Select;
