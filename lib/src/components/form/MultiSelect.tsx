import React, { useState, useRef, useEffect, useMemo, SyntheticEvent, MouseEvent } from 'react';
import { useEventListener } from '../../hooks/useEventListener';

import useFieldValidation from '../../hooks/useFieldValidation';
import usePrevious from '../../hooks/usePrevious';
import { DropdownOption } from '../../types/shared/DropdownOption';
import { FormInputProps } from '../../types/shared/FormInputProps';

import FormField from './FormField';

// MultiSelect is a multi select dropdown
// pass 'required' prop if it's required
// pass 'search' prop if you want to enable the search
// pass 'disabled' flag if you want to disable the dropdown
// pass a 'placeholder' string if you want to customize the placeholder
// field errors will be output below automatically
// options should be in this form '[{ value: 1, label: "opt 1" }, { value: 2, label: "opt 2" }]'
// value should be an array of selected values i.e '[1, 2]'
// pass an empty array as the default value
const MultiSelect: React.FC<MultiSelectProps> = ({
    name,
    search = false,
    disabled = false,
    value = [],
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

    useEventListener('mousedown', handleClick);

    const filteredOptions = useMemo(_getFilteredOptions, [search, searchTerm, options]);
    const selected = useMemo(_getSelected, [value, options]);

    return (
        <FormField name={name} label={label} required={required} error={error}>
            <div ref={node}>
                <div onClick={() => !disabled && setIsOpen(!isOpen)}>
                    <div
                        className={`form-select multi-select ${disabled ? 'disabled' : ''} ${
                            error ? 'error' : ''
                        }`}
                        ref={node}
                    >
                        <div className="selected">
                            {selected.map(opt => (
                                <div
                                    key={opt.value}
                                    className="option"
                                    onClick={() => isOpen && setIsOpen(false)}
                                >
                                    <p>{opt.label}</p>
                                    {!disabled && (
                                        <button
                                            className="remove"
                                            onClick={e => handleDeselect(e, opt.value)}
                                        >
                                            <i className="fal fa-times" />
                                        </button>
                                    )}
                                </div>
                            ))}

                            {!selected.length && <p className="placeholder">{placeholder}</p>}
                        </div>

                        {selected.length && !disabled ? (
                            <button className="remove" onClick={e => handleClearAll(e)}>
                                <i className="fal fa-times" />
                            </button>
                        ) : (
                            ''
                        )}

                        <i className="arrow fal fa-angle-down" />
                    </div>
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
                            {filteredOptions.map(opt => (
                                <p
                                    key={opt.value}
                                    className={`option ${
                                        value.includes(opt.value) ? 'active' : ''
                                    }`}
                                    onClick={(e: MouseEvent) => {
                                        handleSelect(e, opt.value);
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
        const selectedOptions: DropdownOption<number>[] = value
            .filter(val => !options.find(({ value }) => value === val))
            .map(val => ({ label: val.toString(), value: val }));

        return options.filter(opt => value.includes(opt.value)).concat(selectedOptions);
    }

    function _getFilteredOptions() {
        if (!search || !searchTerm) return options;

        const formattedTerm = searchTerm.replace(/[^A-Z0-9]/gi, '').toLowerCase();
        return options.filter(opt =>
            opt.label
                .replace(/[^A-Z0-9]/gi, '')
                .toLowerCase()
                .includes(formattedTerm),
        );
    }

    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();

        setSearch(e.target.value);
    }

    function handleClick(e: Event) {
        // inside click
        if (node?.current?.contains(e.target as Node)) {
            return;
        }

        // outside click
        setIsOpen(false);
    }
    function handleDeselect(e: MouseEvent, clicked: number) {
        e.preventDefault();
        e.stopPropagation();

        const newVal = value.filter(item => item !== clicked);
        handleChange(newVal);
        showError();
    }

    function handleSelect(e: MouseEvent, clicked: number) {
        e.preventDefault();

        const newVal = value.includes(clicked)
            ? value.filter(item => item !== clicked)
            : value.concat(clicked);

        handleChange(newVal);
    }

    function handleClearAll(e: SyntheticEvent) {
        e.preventDefault();
        e.stopPropagation();
        showError();

        setIsOpen(false);

        const newVal: number[] = [];
        handleChange(newVal);
    }

    function handleChange(newVal: number[]) {
        onChange(name, newVal);
    }
};

interface MultiSelectProps extends FormInputProps<number[]> {
    search?: boolean;
    options: DropdownOption<number>[];
    label?: string;
    placeholder?: string;
}

export default MultiSelect;
