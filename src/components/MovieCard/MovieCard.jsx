import { Card } from "antd";
import "./MovieCard.css"

function MovieCard(props) {
  return (
    <Card className="movie-card" hoverable cover={props.img}>
      <Card.Meta 
        title={props.title} 
        description={props.year}
      />
    </Card>
  );
}

export default MovieCard;
