import { StyleSheet } from 'aphrodite';
import {
    babyBlue,
    lightGrey,
    grey,
    lightGreen,
    darkGrey,
} from 'constants/colors';

export default StyleSheet.create({
    Container: {
        display: 'flex',
        minHeight: '200px',
        cursor: 'pointer',
        borderWidth: '0 1px 1px 1px',
        borderStyle: 'solid',
        borderColor: grey,
        background: lightGrey, 
    },
    Correct: {
        background: lightGreen,
    },
    Hover: {
        ':hover': {
            background: babyBlue,
        },
    },
    LetterContainer: {
        display: 'flex',
        flex: '0 0 5rem',
        alignItems: 'center',
    },
    Letter: {
        flexGrow: 1,
        textAlign: 'center',
        fontSize: '2rem',
        color: darkGrey,
    },
    BodyContainer: {
        flex: '1 1 auto',
        display: 'flex',
        padding: '1rem',
        paddingLeft: 0,
        overflowX: 'auto',
    },
    Body: {
        color: 'initial',
        flexGrow: 1,
        padding: '0 1rem',
        background: 'white',
        overflowY: 'auto',
        maxHeight: '300px',
    },
});
