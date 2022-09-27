export interface PropertyRatingRecomendation {
    id: number;
    propertyRatingID: number;
    step: number;
    improvementDescription: string;
    completed: boolean;
    potentialRatingAfterCompletion: number;
    createdOn: Date;
}
