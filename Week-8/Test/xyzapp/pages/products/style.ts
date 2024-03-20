import { Colors } from "@/Constants/Colors";

interface Styles {
    [key: string]: React.CSSProperties;
}

 export const style: Styles = {
    imageContainer: {
        width: '80vw',
        height: `calc(100vh - 280px)`,
        margin: '20px auto',
        padding: '20px',
        borderRadius: '5px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        backgroundColor: 'warning.main',
        transition: '0.5s',
        overflow: 'scroll'
    }
};
