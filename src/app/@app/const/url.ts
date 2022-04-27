
const ENV_URL = ''; // producation fn

const BASE = ENV_URL + '/api';// + '/api/edu/v1';
const BASE_CORE = ENV_URL + '/api/core/v1';

// Common operations
const PARTLY_UPDATE = '/partly-update';
const ADD_UPDATE = '/add-update';
const ADD_UPDATE_ALL = '/add-update-all';
const DELETE = '/delete';
const LIST = '/list';
const DETAIL = '/detail';

// ************************************************************************************************
// ***************************************          CORE          **********************************
// ************************************************************************************************
// major operations  api/...
const MJR_USER = BASE_CORE + '/user';
const MJR_AUTH = BASE_CORE + '/auth';
const MJR_PROFILE = BASE_CORE + '/profile';
const MJR_FAMILY = BASE_CORE + '/family';
const MJR_CHILD = BASE_CORE + '/child';
const MJR_MEMO = BASE_CORE + '/memo';
const MJR_PARENT = BASE_CORE + '/foster-parent';
/**
 * END_POINT URL URL
 */
export const URL = {
    USER_ADD_UPDATE: MJR_USER + '/add-update-user',
    USER_DELETE: MJR_USER + '/delete-user',
    USER_ACCOUNT_ADD_UPDATE: MJR_USER + '/add-update-user-account', // add new org + user
    PROFILE: MJR_USER + '/profile', 
    
    LOGIN: MJR_PARENT + '/login',
    SEND_OTP: MJR_AUTH + '/send-otp',
    VERIFY_OTP: MJR_AUTH + '/verify-otp',

    FAMILY_ADD_UPDATE: MJR_FAMILY + '/add-update',
    FAMILY_SPOUSE_ADD_UPDATE: MJR_FAMILY + '/add-update-family-spouse',
    FAMILY_STATUS: MJR_FAMILY + '/status',
    FAMILY_DETAIL: MJR_FAMILY + '/detail',
    FAMILY_STATUS_UPDATE: MJR_FAMILY + '/update-status',
    FAMILY_INVITATION: MJR_FAMILY + '/invitation',
    FAMILY_INVITATION_STATUS: MJR_FAMILY + '/invitation-status',
    

    CHILD_ADD_UPDATE: MJR_CHILD + '/add-update',
    CHILD_LIST: MJR_CHILD + '/list',

    MEMO_ADD_UPDATE: MJR_MEMO + '/add-update',
    MEMO_LIST: MJR_MEMO + '/list',
    MEMO_MEDIA: MJR_MEMO + '/media',
};
