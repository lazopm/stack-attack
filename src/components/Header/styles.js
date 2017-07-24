import { StyleSheet } from 'aphrodite';
import { blue, grey, lightGrey } from 'constants/colors';

export default StyleSheet.create({
    Container: {
        display: 'flex',
        marginBottom: '2rem',
        width: '100%',
        background: lightGrey,
        overflowY: 'auto',
        borderBottom: `1px solid ${grey}`,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Score: {
        color: blue,
        marginRight: '1rem',
        fontSize: '1.5rem',
    },
    Heading: {
        color: blue,
        margin: '1rem',
        fontWeight: 'normal',
    },
});
