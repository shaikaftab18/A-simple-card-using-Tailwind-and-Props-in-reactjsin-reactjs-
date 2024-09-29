import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function CustomCard({channel,btntext="visitme,man"}) {
  return (
    <div style={{ margin: "25%" }}>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            A Simple Material UI Card
          </Typography>
          <Typography variant="h4" component="div">
            Heading
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            describes the heading
          </Typography>
          <Typography variant="body1">
            Card content
            <br />
            {channel}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" > {btntext}</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CustomCard;
