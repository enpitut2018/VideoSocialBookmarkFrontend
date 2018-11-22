import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

export default class Pagination extends Component {
  handlePageChange = (data) => {
    const page = data.selected + 1;
    this.props.onPageChange(page);
  };

  render() {
    return (
      <ReactPaginate
        pageCount={this.props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        onPageChange={this.handlePageChange}
        containerClassName={"pagination-ul"}
        pageClassName={"pagination-li"}
        previousClassName={"pagination-li"}
        nextClassName={"pagination-li"}
        pageLinkClassName={"pagination-a"}
        previousLinkClassName={"pagination-a"}
        nextLinkClassName={"pagination-a"}
        activeLinkClassName={"pagination-a active"}
      />
    );
  }
}
