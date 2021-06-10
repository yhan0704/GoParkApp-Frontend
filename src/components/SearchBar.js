import React from "react";
import { connect } from "react-redux";
import { onSearch, filterState } from "../redux/actionCreators";

const SearchBar = (props) => {
  return (
    <div>
      <form className="searchContainer">
        <input
          id="searchbar"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => props.onSearch(e.target.value)}
        />
      </form>
      <form className="radioContainer">
        <select onChange={(e) => props.filterState(e.target.value)}>
          <option value="">All</option>
          <option value="DC">Washington D.C</option>
          <option value="MD">Maryland</option>
          <option value="VA">Virginia</option>
        </select>
      </form>
    </div>
  );
};

const mapStateToProps = (store) => ({
  value: store.search,
  filter: store.filter,
});

export default connect(mapStateToProps, { onSearch, filterState })(SearchBar);
