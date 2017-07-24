import { StyleSheet } from 'aphrodite';
import { grey } from 'constants/colors';

export default StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        borderTop: `solid 1px ${grey}`,
        '@media (min-width: 1000px)': {
            width: '1000px',
        },
    },
});
