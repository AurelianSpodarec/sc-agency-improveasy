export interface Property {
    id: number;
    userID: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
    statusUpdatedOn: Date;
    isDeleted: false;
    createdOn: Date;
    currentEPCRating: string;
    potentialEPCRating: string;
    hasEPC: boolean;
    userFullName: string;
    accessDetails: PropertyAccessDetails;
}

export interface PropertyAccessDetails {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    preferredContactTime?: Date;
}
