import { StyleSheet } from 'aphrodite';
import { blue, lightGrey } from 'constants/colors';

export default StyleSheet.create({
    Heading: {
        margin: 0,
        padding: '1rem',
        background: blue,
        color: 'white',
    },
    BodyContainer: {
        background: lightGrey, 
        padding: '1rem',
    },
    Body: {
        padding: '0 1rem',
        background: 'white',
        overflowY: 'auto',
        maxHeight: '300px',
    },
});
