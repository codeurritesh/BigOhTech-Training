import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Quote } from "../../dataTypes/Quote";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { localStorageManagement } from "../../services/LocalStorageManagement";


type Props={
  quote:Quote,
  setAllQuotes:any
}
export default function QuoteCard(props:Props ) {
  const handleDelete=(id:string)=>{
    console.log("deleteing")
    const newData=localStorageManagement.removeQuoteById("Quotes",id);
    console.log(newData)
    props.setAllQuotes(newData);
  }
  return (
    <Card sx={{ width: 270, height: 200, margin: "20px", minWidth: 270,display:"flex",justifyContent:"space-between",backgroundColor:"#e3e3e3" }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Date: {props.quote.date}
        </Typography>
        <Typography variant="body2">{props.quote.quote}</Typography>
        <Typography
          sx={{ fontSize: 14, marginTop: "10px" }}
          color="text.secondary"
          gutterBottom
        >
          - By {props.quote.author}
        </Typography>
      </CardContent>
      <Box>
        <DeleteTwoToneIcon onClick={()=>handleDelete(props.quote.id)} sx={{margin:"10px",cursor:"pointer"}}  />
      </Box>
    </Card>
  );
}
