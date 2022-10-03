export interface PropertyRating {
    id: number;
    propertyID: number;
    isManualEntry: boolean;
    ratingCreatedOn: Date;
    currentRating: string;
    potentialRating: string;
    currentEnergyEfficiency: number;
    potentialEnergyEfficiency: number;
    lmkKey: string;
    certificateValidUntil: Date;
    certificateNumber?: string;
    builtForm: string | null;
    constructionAgeBand: string | null;
    wallDescription: string | null;
    floorDescription: string | null;
    propertyType: string | null;
    isDeleted: boolean;
    createdOn: Date;
}
