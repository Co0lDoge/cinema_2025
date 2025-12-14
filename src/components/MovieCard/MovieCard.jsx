import { Card } from "antd";
import "./MovieCard.css"

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Card className="movie-card" hoverable cover={props.img}>
      <Card.Meta 
        title={props.title} 
        description={props.year}
      />
    </Card>
  );
};

export default MovieCard;
