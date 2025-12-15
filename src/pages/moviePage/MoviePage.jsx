import { Descriptions, Flex, Tag, Typography } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../utils/requests";
import "./MoviePage.css";

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovie(id)
      .then((res) => {
        setMovie(res.data.data);
      })
      .catch(console.warn);
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  const posterUrl = `http://${movie.poster}`;
  const items = [
    { label: "год", children: movie.details.year },
    {
      label: "режиссер",
      children: movie.details.director,
    },
    {
      label: "сценарист",
      children: movie.details.screenwriter,
    },
    {
      label: "жанр",
      children: (
        <>
          {movie.details.genres.map((genre) => (
            <Tag color="#FF7A85" key={genre}>
              {genre}
            </Tag>
          ))}
        </>
      ),
    },
    {
      label: "страна",
      children: movie.details.country,
    },
    {
      label: "описание",
      children: movie.details.description,
      span: 3,
    },
  ];

  return (
    <div id="movie-page">
      <div className="content-movie-container">
        <Flex gap={30} align="center">
          <Typography.Title className="movie-title" level={4}>
            {movie.title.ru}
          </Typography.Title>
          <Typography.Title className="movie-title light" level={4}>
            {movie.title.en}
          </Typography.Title>
        </Flex>
      </div>
      <div className="content-movie-container">
        <Flex gap={90}>
          <img className="movie-img" src={posterUrl}></img>
          <div className="movie-info-container">
            <Flex></Flex>
            <Descriptions
              column={1}
              colon={false}
              title={"О фильме"}
              bordered
              items={items}
            ></Descriptions>
          </div>
        </Flex>
      </div>
      <div className="content-movie-container"></div>
    </div>
  );
};

export default MoviePage;
