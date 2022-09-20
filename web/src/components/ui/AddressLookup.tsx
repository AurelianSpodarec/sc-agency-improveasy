import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    resetPostcodeFinder,
    postcodeFind,
    postcodeAddress,
    postcodeRetrieve,
} from '@actions/postcodeFinder';
import {
    getPostcodeFinderIsFetching,
    getPostcodeFinderError,
    getPostcodeFinderSuggestions,
    getPostcodeFinderAddresses,
} from '@selectors/postcodeFinder';
import TextInput from 'lib/src/components/form/TextInput';
import DataCheck from './DataCheck';

const SuggestionItem = ({
    suggestion,
    setText,
    setAddressAdded,
    handleAddressSelection,
    inputRef,
}: any) => {
    const dispatch = useDispatch();
    const { id, text, description, type } = suggestion;

    const handlePress = () => {
        setText(text);

        if (type === 'Address') {
            dispatch(postcodeRetrieve({ id }));
            setAddressAdded(true);
            inputRef.current?.blur();

            if (handleAddressSelection) handleAddressSelection();
            return;
        }

        dispatch(postcodeAddress({ id, description }));
    };

    return (
        <div onClick={handlePress} className="address-item">
            <p>
                {text} {description}
            </p>
        </div>
    );
};

const AddressLookup = ({ setShowAddressFields, onSelect = () => {} }: IProps) => {
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const isFetching = useSelector(getPostcodeFinderIsFetching);
    const error = useSelector(getPostcodeFinderError);
    const suggestions = useSelector(getPostcodeFinderSuggestions);
    const address = useSelector(getPostcodeFinderAddresses)[0];

    const [initLoad, setInitLoad] = useState<boolean>(true);
    const [text, setText] = useState<string>('');
    const [isFocussed, setIsFocussed] = useState<boolean>(false);
    const [addressAdded, setAddressAdded] = useState<boolean>(false);

    useEffect(() => {
        dispatch(resetPostcodeFinder());
        setInitLoad(false);
    }, [dispatch]);

    const handleChange = (value: string) => {
        setShowAddressFields(false);
        setText(value);
        if (value) dispatch(postcodeFind({ postcode: value }));
        if (addressAdded) setAddressAdded(false);
    };

    useEffect(() => {
        if (!address || initLoad) return;
        const { line1, line2, provinceName, city, postalCode } = address;
        onSelect({
            addressLine1: line1,
            addressLine2: line2,
            county: provinceName,
            town: city,
            postCode: postalCode,
        });
    }, [initLoad, onSelect, address]);

    return (
        <>
            <TextInput
                name="addressSearch"
                value={text}
                onChange={(_, value) => handleChange(value || '')}
                placeholder="Enter Postcode for search"
                className="winged"
                onFocus={() => setIsFocussed(true)}
                required
            />

            <div className="flex-row justify-center">
                <button className="text-button" onClick={() => setShowAddressFields(true)}>
                    Manually enter address
                </button>
            </div>

            {isFocussed && !!text && !addressAdded && (
                <div className="suggestion-list">
                    <DataCheck
                        isFetching={isFetching}
                        error={error}
                        dataExists={!!suggestions.length}
                    >
                        {suggestions.map((suggestion: any) => (
                            <SuggestionItem
                                key={suggestion.id}
                                suggestion={suggestion}
                                setText={setText}
                                setAddressAdded={setAddressAdded}
                                handleAddressSelection={() => setShowAddressFields(true)}
                                inputRef={inputRef}
                            />
                        ))}
                    </DataCheck>
                </div>
            )}
        </>
    );
};
export interface IAddress {
    addressLine1?: string;
    addressLine2?: string;
    postCode?: string;
    town?: string;
    county?: string;
}

interface IProps {
    setShowAddressFields: (showAddressFields: boolean) => void;
    onSelect?: (address: IAddress) => void;
}
export default AddressLookup;
