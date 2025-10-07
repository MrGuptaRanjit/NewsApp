// import React, { Component } from "react";
import React, { useEffect , useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{

  const [articles , setArticles] = useState([])
  const [loading , setLoading] = useState(true)
  const [page , setPage] = useState(1)
  const [totalResults , setTotalResults] = useState(0)


// export class News extends Component {
  // static defaultProps = {
  //   country: "in",
  //   pageSize: 15,
  //   category: "general",
  // };

  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };

  // capitalizeFirstLetter = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

    const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     totalResults:0,
  
      
  //   };
    // document.title = `${this.capitalizeFirstLetter(this.props.category)} -NewsApp`;
  //  }  

  // async updateNews() {
  //   this.props.setProgress(10);
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9ac22db495574a03bdf75f34882706ea&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   this.props.setProgress(70);
  //   this.setState({
  //     articles: parseData.articles,
  //     totalResults: parseData.totalResults,
  //     loading: false,
  //   });
  //   this.props.setProgress(100);
  // }

   const updateNews =async ()=> {
    props.setProgress(10);
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9ac22db495574a03bdf75f34882706ea&page=${page}&pageSize=${props.pageSize}`;
    const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&apikey=31cb435271cb59b54e06d4bfe59aff0a&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false)
    props.setProgress(100);
  }

  // async componentDidMount() {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9ac22db495574a03bdf75f34882706ea&page=1&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading:true});
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // this.setState({articles : parseData.articles,
  //   //    totalResults : parseData.totalResults,
  //   //    loading : false
  //   //   });
  //   this.updateNews();
  // }

  
  useEffect(()=>{
    document.title = `${capitalizeFirstLetter(props.category)} -NewsApp`;
    updateNews();
    // eslint-disable-next-line 
  } , [])

  // handlePrevClick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9ac22db495574a03bdf75f34882706ea&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //   //  this.setState({loading:true});
  //   //  let data = await fetch(url);
  //   //  let parseData = await data.json();
  //   //  this.setState({
  //   //   page: this.state.page-1,
  //   //   articles : parseData.articles,
  //   //   loading: false
  //   // })

  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };


  // this is for the button we used in starting but after that we remove this
  // const handlePrevClick = ()=>{
  //   setPage(page-1)
  //   updateNews();
  // }

  // handleNextClick = async () => {
  //   //   if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
  //   //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9ac22db495574a03bdf75f34882706ea&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //   //         this.setState({loading:true});
  //   //         let data = await fetch(url);
  //   //         let parseData = await data.json();
  //   //         this.setState({
  //   //         page: this.state.page+1,
  //   //         articles : parseData.articles,
  //   //         loading: false
  //   //   })
  //   // }
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  // this is for the button we used in starting but after that we remove this
  // const handleNextClick = ()=>{
  //   setPage(page+1)
  //   updateNews();
  // }

  // fetchMoreData = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9ac22db495574a03bdf75f34882706ea&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   this.setState({
  //     articles: this.state.articles.concat(parseData.articles),
  //     totalResults: parseData.totalResults,
  //     loading: false,
  //   });
  // };

  const fetchMoreData = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9ac22db495574a03bdf75f34882706ea&page=${page+1}&pageSize=${props.pageSize}`;
    const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&apikey=31cb435271cb59b54e06d4bfe59aff0a&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };

  // render() {
    return (
      <>
        {/* <h1 className="text-center">NewsApp - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1> */}
        <h1 className="text-center" style={{marginTop:"70px"}}>NewsApp - Top {capitalizeFirstLetter(props.category)} Headlines</h1>

        {/* {this.state.loading && <Spinner />} */}
        {loading && <Spinner />}


         {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        > */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        >

        <div className="container">
        <div className="row">
          {
            // this.state.articles.map((element) => {
            articles.map((element) => {

              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.image}
                    newsUrl={element.url}
                    // author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>

        </InfiniteScroll>


        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  // }
}


 News.defaultProps = {
    country: "in",
    pageSize: 15,
    category: "general",
  };

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
export default News;
