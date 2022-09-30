import { useState } from 'react';

import { AccordionTwo } from '@components/Accordion/AccordionTwo/AccordionTwo';
import AccordionTwoItem from '@components/Accordion/AccordionTwo/AccordionTwoItem';
import { IconMagnifyingGlass } from '@content/icons/IconMagnifyingGlass';
import { Input } from '@components/ui';

import { convertEnumToDropdownOption } from 'lib/src/shared/enums/dropdownEnums';
import Checkbox from 'lib/src/components/form/Checkbox';
import {
    FetchPropertiesRequest,
    MEESCompliance,
    PropertyStatusType,
    IEPCFilters,
} from '../../../../types/shared/Properties';

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
    const [openValue, setOpenValue] = useState<string | string[] | null>(null);

    const epcFilterOptions = convertEnumToDropdownOption(IEPCFilters);
    const meesFilterOptions = convertEnumToDropdownOption(MEESCompliance);
    const statusFilterOptions = convertEnumToDropdownOption(PropertyStatusType);

    return (
        <>
            <AccordionTwo onValueChange={e => setOpenValue(e)}>
                <div className="d-flex-column search-wrapper">
                    <div className="flex flex-row justify-end">
                        <button
                            className="search__clear-inputs"
                            onClick={handleClearFilters}
                            style={{ marginBottom: 15 }}
                        >
                            Clear
                        </button>
                    </div>
                    <Input
                        placeholder="Search"
                        className="input--search w-full"
                        name="@"
                        icon={<IconMagnifyingGlass />}
                        value={searchTerm}
                        onChange={(_, val) => setSearchTerm(val)}
                    />
                </div>
                <AccordionTwoItem
                    title="EPC Current"
                    value={FilterAccordionValue.EPC_CURRENT}
                    isOpen={
                        openValue?.length
                            ? openValue.includes(FilterAccordionValue.EPC_CURRENT)
                            : openValue === FilterAccordionValue.EPC_CURRENT
                    }
                    headerSize="md"
                >
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3">
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
                    isOpen={
                        openValue?.length
                            ? openValue.includes(FilterAccordionValue.EPC_POTENTIAL)
                            : openValue === FilterAccordionValue.EPC_POTENTIAL
                    }
                    headerSize="md"
                >
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3">
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
                    title="MEES"
                    value={FilterAccordionValue.MEES}
                    isOpen={
                        openValue?.length
                            ? openValue.includes(FilterAccordionValue.MEES)
                            : openValue === FilterAccordionValue.MEES
                    }
                    headerSize="md"
                >
                    <div className="lg:grid lg:grid-cols-2">
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
                    isOpen={
                        openValue?.length
                            ? openValue.includes(FilterAccordionValue.STATUS)
                            : openValue === FilterAccordionValue.STATUS
                    }
                    headerSize="md"
                >
                    <div className="grid xl:grid-cols-2">
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
