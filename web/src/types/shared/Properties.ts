export interface IProperty {
    id: number;
    userID: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
    statusUpdatedOn: Date;
    useAccountDetailsForAccess: boolean;
    hasEPC: boolean;
    createdOn: Date;
    status: PropertyStatusType;
    isHomeOwner: boolean;
}

export enum EPCFilters {
    All = 1,
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    None,
}

export enum FilterByMEESCompliance {
    All = 1,
    Compliant,
    NonCompliant,
    Unknown,
}

export enum PropertyStatusType {
    New = 1,
    Compliant,
    NonCompliant,
    RequestedEPC,
    BookedEPC,
}

export interface IPropertyFilterRequest {
    currentEPCFilters: EPCFilters;
    potentialEPCFilters: EPCFilters;
    meesComplianceFilters: FilterByMEESCompliance;
    propertyStatusFilters: PropertyStatusType;
}
