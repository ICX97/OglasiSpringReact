import React, { Component } from 'react';
import OglasService from '../services/OglasService';

class Pagination extends Component {
  constructor(props){
    super(props)
    this.state = {
        oglasi: [], 
    } 
}
  componentDidMount(){
    OglasService.getOglas().then((res)=>{
        this.setState({oglasi: res.data});
    });
  }
  render() {
    const {postsPerPage, totalPosts,paginate, nextPage, prevPage } = this.props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }


    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" onClick={() => prevPage()}>Previous</a>
          </li>
          {pageNumbers.map(num => (
            <li className="page-item" key={num}>
              <a onClick={() => paginate(num)} href="#" className="page-link" >{num}</a>
            </li>
          ))};

          <li className="page-item">
            <a className="page-link" href="#" onClick={() => nextPage()}>Next</a>
          </li>

        </ul>
      </nav>
    );
  }
}

export default Pagination;