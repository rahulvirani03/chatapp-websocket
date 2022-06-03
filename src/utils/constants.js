import { UserOutlined, SolutionOutlined, FileJpgOutlined, SmileOutlined } from '@ant-design/icons';

const LOCAL_URL ='http://localhost:4000'

const DEPLOYED_URL='https://chatapp-websocket-backend.herokuapp.com'
export const URL =LOCAL_URL;


export const VARIABLE_NAME = "VARIABLE_NAME";

export const profileOptions = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Profile',
        path: '/profile'
    },
    {
        name: 'Become a Seller',
        path: '/become-a-seller'
    },
    {
        name: 'Settings',
        path: '/settings'
    },
    {
        name: 'Logout',
        danger: true
    }
];

export const MAX_FILE_SIZE = 1024 * 1024;
export const VALIDATIONS = {
    NAME_RULES: /^[a-zA-Z ]{2,30}$/,
    USERNAME_RULES:  /^[a-zA-Z0-9]+$/,
    AADHAR_RULES: /^[01]\d{3}[\s-]?\d{4}[\s-]?\d{4}$/,
    PAN_RULES: /^[A-Z]{5}[0-9]{4}[A-Z]{1}/,
    GSTIN_RULES: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}/
}

export const ERROR_MESSAGES = {
    NAME_ERROR: 'Please provide valid name',
    BUSINESS_NAME_ERROR: 'Please provide a valid business name',
    USERNAME_ERROR: 'Please provide valid username',
    PHONE_NO_ERROR: 'Please provide valid phone number',
    EMAIL_ERROR: 'Please provide valid email address',
    REQUIRED: 'Please fill all required fields',
    FILE_EXTENSION_NOT_ALLOWED: 'File extension not supported',
    FILE_SIZE_EXCEEDED_2MB: 'File size should be less than 2 MB',
    PAN_ERROR: 'PAN number is not correct',
    AADHAR_ERROR: 'AADHAR number is not correct',
    NO_OF_FILES_EXCEEDED_ERROR: 'Only 3 Files are allowed'
}

export const VERIFICATION_DOCUMENTS = {
    PAN: 'PAN',
    AADHAR: 'AADHAR'
}


 const CITY_NAMES = [
    'MUMBAI',
    'PUNE',
    'NASHIK'
]

export const ALLOWED_EXTENSIONS = ['png','jpeg','jpg'];

export const SELLER_REQUIRED_KEYS = [
    'name',
    'phoneNo',
    'email',
    'username',
    'businessName',
    'description',
    'address',
    'selected',
    'aadharOrPan',
    'gstin',
    'document',
    'profileImage'
]

export const PERSONAL="personal-details";
export const PROFESSIONAL="professional-details";
export const STORE_IMAGES="store-images"