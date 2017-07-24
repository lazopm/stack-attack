import { StyleSheet } from 'aphrodite';
import { red, grey, lightGrey, darkGrey } from 'constants/colors';

export default StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 1000px)': {
            width: '1000px',
        },
    },
    AnswerContainer: {
        display: 'flex',
        minHeight: '200px',
        borderBottom: `1px solid ${grey}`,
    },
    LetterContainer: {
        display: 'flex',
        flex: '0 0 5rem',
        alignItems: 'center',
        background: lightGrey,
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
        background: lightGrey, 
        padding: '1rem',
        paddingLeft: 0,
        overflowX: 'auto',
    },
    Body: {
        flexGrow: 1,
        padding: '0 1rem',
        background: 'white',
        overflowY: 'auto',
        maxHeight: '300px',
    },
});
