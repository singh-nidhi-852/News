import React, { Component } from "react"
import NewsItem from "./NewsItem"
import Spinner from "./Spinner"
import PropTypes from 'prop-types'


//b8b59a78108c4aa1b473496666c8d302

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize : 9,
    category : "genral"
  }

  static propTypes = {
    country:PropTypes.string,
    pageSize: PropTypes.number,
  }

  capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);


  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async fetchNews(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8b59a78108c4aa1b473496666c8d302&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parseddata = await data.json(data);
      this.setState({
        articles:parseddata.articles,
        totalResults: parseddata.totalResults,
        loading : false
      });
    
  }

  async componentDidMount(){
    this.fetchNews()
  }

  handlePreviousClick = async() => {
    this.setState({page:this.state.page - 1})
    this.fetchNews()
  }

  handleNextClick = async() => {
    this.setState({page:this.state.page + 1})
    this.fetchNews()
  }


  render() {
    return (
      <>
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'35px 0px'}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {
        this.state.loading ?<Spinner/>:
           <div className="row" > 
           {this.state.articles.map((element)=>{
             return(
               <div className="col-md-4" key={element.url}>
               <NewsItem 
                 title={element.title?element.title:''}
                 description={element.description?element.description:''}
                 imageUrl={element.urlToImage?element.urlToImage:'/'}
                 newsUrl={element.url} 
                 author={element.author}
                 date={element.publishedAt}
                 source={element.source.name}
               />
               
             </div>
             );
           })}
           </div>
        } 
       
      </div>
      {!this.state.loading && <div className="container d-flex justify-content-between">
        <button type="button" disabled = {this.state.page <=1} className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button> 
        <button type="button" disabled = {this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

      </div>}
      
      </>
    );
  }
}
