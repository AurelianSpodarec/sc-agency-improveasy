export interface IProperty {
    id: number;
    userID: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
    statusUpdatedOn: Date;
    useAccountDetailsForAccess: boolean;
    currentEPCRating: EPCRatings;
    potentialEPCRating: EPCRatings;
    hasEPC: boolean;
    accessDetails: IAccessDetails;
    status: PropertyStatusType;
    createdOn: Date;
}

export interface ICreatePropertyForm {
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
    bypassEPC: boolean;
    useAccountDetailsForAccess: boolean;
    accessDetails: IAccessDetails;
}
export interface IAccessDetails {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
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

export interface ICreatePropertyRequest extends Omit<ICreatePropertyForm, 'accessDetails'> {
    accessDetails: IAccessDetails | null;
}

export enum ModalContent {
    Form = 1,
    EPCSuccess,
    EPCFailure,
}

export type EPCRatings = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | null;
