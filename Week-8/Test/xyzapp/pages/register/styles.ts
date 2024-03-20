import { Colors } from "@/Constants/Colors";
import { Styles } from "@/datatypes/Styles";

export const styles:Styles = {
    mainContainer:{
        width:"100vw",
        height: `calc(100vh - 200px)`,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        overflow:'scroll',
        backgroundImage: 'url("https://team.kanakinfosystems.com/apps/assets/17.0/website_logins?imagepath=etc/1-background.jpg")'
    },
    formBox: {
        width: '80%',
        maxWidth: '500px',
        padding: '0px 5vw 20px',
        margin: '20px auto 20px',
        backgroundColor: Colors.others,
        borderRadius: '20px',
        boxShadow: '11px 11px 17px -10px rgba(0,0,0,0.75)',
        transition: '1s',
    },
    formDetails: {
        width: '100%',
    },
    formElement: {
        width: '270px',
        margin: '20px',
        height: '30px',
        padding: '10px',
        fontSize: 'large',
        borderRadius: '10px',
        border: '0px',
        flexWrap: 'wrap',
    },
    formButton: {
        width: '45%',
        margin: '10px',
        height: '50px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 'bold',
        fontSize: 'large',
        borderRadius: '10px',
        border: '0px',
    },
    reset: {
        backgroundColor: Colors.warning,
        color: 'secondary.contrastText',
    },
    submit: {
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
    },
};
