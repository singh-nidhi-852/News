import React, { useEffect,useState } from "react"
import NewsItem from "./NewsItem"
import Spinner from "./Spinner"
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


//b8b59a78108c4aa1b473496666c8d302

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

//document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const fetchMoreData = async () => {
    setPage({ page: page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json(data);
    setArticles(articles.concat(parseddata.articles));
    setLoading(false);
    setTotalResults(parseddata.totalResults);
  };


  const fetchNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parseddata = await data.json(data);
    props.setProgress(70);
    setArticles(parseddata.articles);
    setLoading(false);
    setTotalResults(parseddata.totalResults);
    props.setProgress(100);

  }

  useEffect(() => {
    fetchNews();
  }, [])

    return (
      <>
        <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row" >
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ''}
                      description={element.description ? element.description : ''}
                      imageUrl={element.urlToImage ? element.urlToImage : '/'}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />

                  </div>

                );
              })}
            </div>
          </div>

        </InfiniteScroll>
      </>
    );
}

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "genral"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
}

export default News
