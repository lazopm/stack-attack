import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 1000px)': {
            alignItems: 'center',
        },
    },
});
