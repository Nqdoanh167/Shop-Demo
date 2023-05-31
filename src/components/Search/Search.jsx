import './search.scss';
import '../../grid.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Search(params) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('https://data-bebasic.onrender.com/api/v1/get-product');
            setSearchResult(res.data.data);
        };
        fetchPosts();
    }, []);
    const filteredData = searchResult.filter((item) => item.nameP.toLowerCase().startsWith(searchValue.toLowerCase()));

    const navigate = useNavigate();

    const handleClick = () => {
        setShowResult(!showResult);
    };
    return (
        <div className="input-group ">
            {showResult && searchValue.length > 0 && (
                <div className="search-result">
                    <span className="search-title">đề xuất</span>
                    {filteredData.map((result) => (
                        <div
                            className="search-item"
                            key={'search_' + result.id}
                            onClick={() => {
                                navigate(`/introduce/${result.id}`);
                                setShowResult(false);
                                window.scrollTo(0, 0);
                            }}
                            onfocusout
                        >
                            <i className=" glyphicon glyphicon-search"></i>
                            <span>{result.nameP}</span>
                        </div>
                    ))}
                </div>
            )}
            <input
                autoComplete="off"
                value={searchValue}
                type="text"
                className="form-control"
                placeholder="Tôi đang tìm mua..."
                name="search"
                onChange={(e) => {
                    setSearchValue(e.target.value);
                    setShowResult(true);
                }}
                onClick={handleClick}
            />
            <div className="input-group-btn">
                <button className="btn " type="submit">
                    <i className=" glyphicon glyphicon-search"></i>
                </button>
            </div>
        </div>
    );
}
export default Search;
