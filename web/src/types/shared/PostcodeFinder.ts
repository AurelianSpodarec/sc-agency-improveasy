export interface PostcodeFindRequest {
    postcode: string;
}

export interface PostcodeAddressRequest {
    id: string;
    description: string;
}

export interface PostcodeRetrieveRequest {
    id: string;
}

export interface PostcodeSuggestion {
    id: string;
    type: string;
    text: string;
    highlight: string;
    description: string;
}
export interface PostcodeAddress {
    line1: string;
    line2: string;
    line3: string;
    provinceName: string;
    city: string;
    postalCode: string;
}
