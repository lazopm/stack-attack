import { StyleSheet } from 'aphrodite';
import { blue, grey, lightGrey } from 'constants/colors';

export default StyleSheet.create({
    Container: {
        padding: '2rem 0',
        marginTop: '2rem',
        width: '100%',
        background: lightGrey,
        borderTop: `1px solid ${grey}`,
        textAlign: 'center',
    },
    Link: {
        color: blue,
        textDecoration: 'none',
    },
});
