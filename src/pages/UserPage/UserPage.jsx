import { Input, Row, Select, Col } from "antd";
import { moviesData } from "../../utils/mockData";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./UserPage.css";
import { useEffect, useState } from "react";

function UserPage() {
    const [tagFilter, setTagFilter] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filtered, setFiltered] = useState(moviesData);

    const genreOptions = [
        { value: "фантастика", label: "Фантастика" },
        { value: "драма", label: "Драма" },
        { value: "приключения", label: "Приключения" },
        { value: "биография", label: "Биография" },
    ];

    useEffect(() => {
        if (!!tagFilter.length || !!searchQuery) {
            const result = moviesData.filter(
                (item) =>
                    item.title.includes(searchQuery) || tagFilter.includes(item.genre)
            );
            setFiltered(result);
        } else setFiltered(moviesData);
    }, [tagFilter, searchQuery]);

    return (
        <>
            <div className="userpage-content">
                <h1>Обо мне</h1>
                <Row gutter={[140, 20]}>
                    <Col>
                        <p>Имя</p>
                        <p>Почта</p>
                        <p>Роль</p>
                        <p>Любимые жанры</p>
                    </Col>
                    <Col>
                        <p>Ксения Цыгулева</p>
                        <p>example@mail.ru</p>
                        <p>критик</p>
                        <p>драма, боевик, фантастика</p>
                    </Col>
                </Row>

                <h1>Сохраненные фильмы</h1>
                <div>
                    <Row gutter={[40, 40]}>
                        {filtered.map((item) => (
                            <Col span={8}>
                                <MovieCard title={item.title} year={item.year} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>

        </>
    );
}

export default UserPage;