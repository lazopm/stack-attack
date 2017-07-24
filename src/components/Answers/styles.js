import { StyleSheet } from 'aphrodite';
import { babyBlue, grey, lightGrey, darkGrey } from 'constants/colors';

export default StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        borderTop: `solid 1px ${grey}`,
        '@media (min-width: 1000px)': {
            width: '1000px',
        },
    },
    AnswerContainer: {
        display: 'flex',
        minHeight: '200px',
        borderWidth: '0 1px 1px 1px',
        borderStyle: 'solid',
        borderColor: grey,
        background: lightGrey, 
        ':hover': {
            background: babyBlue,
        },
    },
    LetterContainer: {
        display: 'flex',
        flex: '0 0 5rem',
        alignItems: 'center',
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
        padding: '1rem',
        paddingLeft: 0,
        overflowX: 'auto',
    },
    Body: {
        color: 'initial',
        flexGrow: 1,
        padding: '0 1rem',
        background: 'white',
        overflowY: 'auto',
        maxHeight: '300px',
    },
});
