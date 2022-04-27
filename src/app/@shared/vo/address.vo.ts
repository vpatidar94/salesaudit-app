/**
 *
 Suite/Floor/etc
 Zip City State
 Phone
 Email
 Fax Number
 */
export interface AddressVo {
    street: string;
    landmark: string;
    city: string;
    zip: string;
    zipext: string;
    state: string;
    country: string;

    ph: string;
    ph2: string;
    cell: string;
    fax: string;
    email: string;

    web: string;
    type: string;

    lat: number;
    lng: number;
    geo: any;
    placeId: string;
    formated: string; //formated Address

    created: Date;

    default: boolean;
    apartmentNo: string;
    dropOffOption: string; // HANDOVER, AT_DOOR
    note: string;
}
