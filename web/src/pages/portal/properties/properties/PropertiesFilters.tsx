import { useState } from 'react';

import { AccordionTwo } from '@components/Accordion/AccordionTwo/AccordionTwo';
import AccordionTwoItem from '@components/Accordion/AccordionTwo/AccordionTwoItem';
import { IconMagnifyingGlass } from '@content/icons/IconMagnifyingGlass';
import { Input } from '@components/ui';
import {
    FetchPropertiesRequest,
    FilterByMEESCompliance,
    FilterByPropertyStatus,
    IEPCFilters,
} from '@actions/properties/fetchUserProperties';

import { convertEnumToDropdownOption } from 'lib/src/shared/enums/dropdownEnums';
import Checkbox from 'lib/src/components/form/Checkbox';

enum FilterAccordionValue {
    EPC_CURRENT = '1',
    EPC_POTENTIAL = '2',
    MEES = '3',
    STATUS = '4',
}

const PropertiesFilters = ({
    searchTerm,
    setSearchTerm,
    handleClearFilters,
    form,
    handleChange,
}: IProps) => {
    const [openValue, setOpenValue] = useState<FilterAccordionValue | null>(null);

    const epcFilterOptions = convertEnumToDropdownOption(IEPCFilters);
    const meesFilterOptions = convertEnumToDropdownOption(FilterByMEESCompliance);
    const statusFilterOptions = convertEnumToDropdownOption(FilterByPropertyStatus);

    function onValueChange(e: string | string[]) {
        if (
            e === FilterAccordionValue.EPC_CURRENT ||
            e === FilterAccordionValue.EPC_POTENTIAL ||
            e === FilterAccordionValue.MEES ||
            e === FilterAccordionValue.STATUS
        ) {
            setOpenValue(e);
        } else {
            setOpenValue(null);
        }
    }

    return (
        <>
            <AccordionTwo onValueChange={onValueChange} type="multiple">
                <div className="d-flex justify-between search-wrapper space-x-2">
                    <Input
                        placeholder="Search"
                        className="input--search w-full"
                        name="@"
                        icon={<IconMagnifyingGlass />}
                        value={searchTerm}
                        onChange={(_, val) => setSearchTerm(val)}
                    />
                    <button className="search__clear-inputs" onClick={handleClearFilters}>
                        Clear filters
                    </button>
                </div>
                <AccordionTwoItem
                    title="EPC Current"
                    value={FilterAccordionValue.EPC_CURRENT}
                    isOpen={openValue === FilterAccordionValue.EPC_CURRENT}
                >
                    <div className="grid grid-cols-3">
                        {epcFilterOptions.map((option, index) => (
                            <Checkbox
                                key={index}
                                placeholder={option.label}
                                name={`${option.label}-current`}
                                value={form['currentEPCFilters'].includes(option.value)}
                                onChange={() => handleChange('currentEPCFilters', option.value)}
                            />
                        ))}
                    </div>
                </AccordionTwoItem>
                <AccordionTwoItem
                    title="EPC Potential"
                    value={FilterAccordionValue.EPC_POTENTIAL}
                    isOpen={openValue === FilterAccordionValue.EPC_POTENTIAL}
                >
                    <div className="grid grid-cols-3">
                        {epcFilterOptions.map((option, index) => (
                            <Checkbox
                                key={index}
                                placeholder={option.label}
                                name={`${option.label}-potential`}
                                value={form['potentialEPCFilters'].includes(option.value)}
                                onChange={() => handleChange('potentialEPCFilters', option.value)}
                            />
                        ))}
                    </div>
                </AccordionTwoItem>
                <AccordionTwoItem
                    title="MEESE"
                    value={FilterAccordionValue.MEES}
                    isOpen={openValue === FilterAccordionValue.MEES}
                >
                    <div className="grid grid-cols-2">
                        {meesFilterOptions.map(option => (
                            <Checkbox
                                key={option.value}
                                placeholder={option.label}
                                name={`${option.label}-mees`}
                                value={form['meesComplianceFilters'].includes(option.value)}
                                onChange={() => handleChange('meesComplianceFilters', option.value)}
                            />
                        ))}
                    </div>
                </AccordionTwoItem>
                <AccordionTwoItem
                    title="Status"
                    value={FilterAccordionValue.STATUS}
                    isOpen={openValue === FilterAccordionValue.STATUS}
                >
                    <div className="grid grid-cols-2">
                        {statusFilterOptions.map((option, index) => (
                            <Checkbox
                                key={index}
                                placeholder={option.label}
                                name={`${option.label}-status`}
                                value={form['propertyStatusFilters'].includes(option.value)}
                                onChange={() => handleChange('propertyStatusFilters', option.value)}
                            />
                        ))}
                    </div>
                </AccordionTwoItem>
            </AccordionTwo>
        </>
    );
};

interface IProps {
    searchTerm: string;
    setSearchTerm: (val: string) => void;
    handleClearFilters: () => void;
    form: FetchPropertiesRequest;
    handleChange: (name: keyof FetchPropertiesRequest, value: number) => void;
}

export default PropertiesFilters;
