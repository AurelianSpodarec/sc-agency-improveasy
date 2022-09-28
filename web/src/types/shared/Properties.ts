export interface IProperty {
    id: number;
    userID: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
    statusUpdatedOn: Date;
    currentEPCRating: EPCRatings;
    potentialEPCRating: EPCRatings;
    currentEnergyEfficiencyRating: number;
    potentialEnergyEfficiencyRating: number;
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
    preferredContactTime: string | null;
}

export interface IUpdatePropertyAccessDetailsForm extends IAccessDetails {
    useAccountDetailsForAccess: boolean;
}

export enum EPCFilters {
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    None,
}

export interface IPropertyFilterRequest {
    currentEPCFilters: EPCFilters;
    potentialEPCFilters: EPCFilters;
    meesComplianceFilters: MEESCompliance;
    propertyStatusFilters: PropertyStatusType;
}

export interface ICreatePropertyRequest {
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
    bypassEPC: boolean;
    accessDetails: IAccessDetails;
}

export enum ModalContent {
    Form = 1,
    EPCSuccess,
    EPCFailure,
}

export type EPCRatings = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | null;

export interface IUpdatePropertyAddress {
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
}

export interface IEPC {
    id: number;
    builtForm: string;
    certificateNumber: string;
    certificateValidUntil: string;
    constructionAgeBand: number | null;
    createdOn: string;
    currentEnergyEfficiency: number;
    currentRating: string;
    floorDescription: string;
    isManualEntry: boolean;
    potentialEnergyEfficiency: number;
    potentialRating: string;
    propertyID: number;
    propertyType: string;
    ratingCreatedOn: string;
    wallDescription: string;
    isDeleted: boolean;
    status: PropertyStatusType;
}

export interface IPropertyRatingRecommendations {
    id: number;
    propertyRatingID: number;
    step: number;
    improvementDescription: string;
    createdOn: string;
    completed: boolean;
}

export interface FetchPropertiesRequest {
    currentEPCFilters: IEPCFilters[];
    potentialEPCFilters: IEPCFilters[];
    meesComplianceFilters: MEESCompliance[];
    propertyStatusFilters: PropertyStatusType[];
}

export enum IEPCFilters {
    A = 1,
    B = 2,
    C = 3,
    D = 4,
    E = 5,
    F = 6,
    G = 7,
    None = 8,
}

export enum MEESCompliance {
    Compliant = 1,
    NonCompliant = 2,
    Unknown = 3,
}

export enum PropertyStatusType {
    New = 1,
    Compliant,
    NonCompliant,
    RequestedEPC,
    BookedEPC,
}

export enum PropertyStatusTypeLabel {
    'New' = 1,
    'Compliant',
    'Non Compliant',
    'Requested EPC',
    'Booked EPC',
}
