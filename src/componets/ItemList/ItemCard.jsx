import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ width: 350, height: 380 }}>
      <CardMedia sx={{ height: 140 }} image={item.img} title="e-commerce" />
      <CardContent sx={{ height: 150 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
          {item.description}
        </Typography>
        <Typography variant="body2" textAlign={"center"}>
          ${item.price}.-
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/ItemDetail/${item.id}`}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;