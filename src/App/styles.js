import { StyleSheet } from 'aphrodite';
import { blue, lightGrey } from 'constants/colors';

export default StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 1000px)': {
            alignItems: 'center',
        },
    },
});
