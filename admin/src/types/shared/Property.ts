export interface Property {
    id: number;
    userID: number;
    addressLine1: string;
    addressLine2: string;
    addrecityssLine2: string;
    postcode: string;
    statusUpdatedOn: Date;
    isDeleted: false;
    createdOn: Date;
    currentEPCRating: string;
    potentialEPCRating: string;
    hasEPC: boolean;

    accessDetails: PropertyAccessDetails;
}

export interface PropertyAccessDetails {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    preferredContactTime?: Date;
}
