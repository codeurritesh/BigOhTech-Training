import { Colors } from "@/Constants/Colors";
import { Styles } from "@/datatypes/Styles";


export const styles: Styles = {
    likeImageContainer: {
        width: '90vw',
        margin: '20px auto 0px auto',
        padding: '20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        transition: '0.5s',
    },
    likeProductHeading: {
        width: '100%',
        height: '50px',
        marginLeft: '50px',
        color: 'info.dark',
        fontSize: 'xx-large',
    },
    cartHeader: {
        width: '100%',
        height: '60px',
        borderBottom: '2px solid #eee',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: 'large',
        fontWeight: 'bold',
        color: "info.light",
    },
    mainSummary: {
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
    },
    summaryBox: {
        marginRight: '8vw',
        width: '500px',
        boxSizing: 'border-box',
        display: 'flex',
        fontSize: 'large',
        justifyContent: 'space-between',
    },
    borderTop: {
        borderTop: '2px dashed #eee',
    },
    checkoutButton: {
        width: '100px',
        height: '40px',
        marginRight: '8vw',
        borderRadius: '5px',
        border: '0px',
        fontWeight: 'bold',
        color: 'warning.contrastText',
        backgroundColor: 'warning.main',
        cursor: 'pointer',
    },
    noResult: {
        margin: 'auto',
    },
    mainCart: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow:'scroll'
    },
};
