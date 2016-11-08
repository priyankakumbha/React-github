import React, {Component } from 'react';
class Search extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }
  updateSearch(e){
    console.log( e.currentTarget.value );
    this.setState({
      text: e.currentTarget.value
    });
  }
  handleSubmit(e) {
    const searchQuery = this.state.text;
    this.context.router.push(`/details/${searchQuery}`);
    console.log( searchQuery );
  }
  render(){
    console.log(this);
    return (
      <div>
      <h1>This is the search page</h1>
      <h3>Search</h3>
      <input type="text"
      name="search"
      value={this.state.text}
      onChange={this.updateSearch.bind(this)}
      placeholder='Username: ' />
      <br />
      <input
      type="submit"
      className="buuton-primary"
      onClick={this.handleSubmit.bind(this)}
      value={`search for ${this.state.text}`} />
      </div>
    );
  }
}
Search.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default Search;
