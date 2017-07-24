import { StyleSheet } from 'aphrodite';
import {
    red,
    darkRed,
    green,
    darkGreen
} from 'constants/colors';

export default StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
        borderWidth: '0 1px 1px 1px',
        borderStyle: 'solid',
        background: red,
        color: darkRed,
    },
    Correct: {
        background: green,
        color: darkGreen,
    },
    Result: {
        fontSize: '3rem',
        fontWeight: 'bold',
    },
    Button: {
        padding: '.5rem .75rem',
        fontSize: '1.4rem',
    },
});
