export interface PropertyRating {
    id: number;
    propertyID: number;
    isManualEntry: boolean;
    ratingCreatedOn: Date;
    currentRating: string;
    potentialRating: string;
    currentEnergyEfficiency: number;
    potentialEnergyEfficiency: number;
    certificateNumber: string;
    certificateValidUntil: Date;
    builtForm: string | null;
    constructionAgeBand: string | null;
    wallDescription: string | null;
    floorDescription: string | null;
    propertyType: string | null;
    isDeleted: boolean;
    createdOn: Date;
}
