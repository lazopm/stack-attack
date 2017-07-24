import { StyleSheet } from 'aphrodite';
import { blue, grey, lightGrey } from 'constants/colors';

export default StyleSheet.create({
    Container: {
        marginBottom: '2rem',
        width: '100%',
        background: lightGrey,
        overflowY: 'auto',
        borderBottom: `1px solid ${grey}`,
    },
    Heading: {
        color: blue,
        margin: '1rem',
        fontWeight: 'normal',
    },
});
