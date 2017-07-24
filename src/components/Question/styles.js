import { StyleSheet } from 'aphrodite';
import { blue } from 'constants/colors';

export default StyleSheet.create({
    Container: {
        background: blue,
        marginBottom: '1rem',
        '@media (min-width: 1000px)': {
            width: '1000px',
        },
    },
    Content: {
        padding: '1rem',
    },
    Heading: {
        margin: 0,
        marginBottom: '1rem',
        color: 'white',
    },
    Body: {
        padding: '0 1rem',
        background: 'white',
        overflowY: 'auto',
        minHeight: '200px',
        maxHeight: '300px',
    },
});
