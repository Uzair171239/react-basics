import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};
    onInputChange = event => {
        this.setState({term: event.target.value});
    }
    onFormSubmit = event => {
          event.preventDefault();

          // call back from parent api
          this.props.onFormsubmit(this.state.term);
    }
    render() {
         return (
          <div className="search-bar ui ui segment">
              <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                <label>video Search</label>
                <input 
                type="text"  
                className="form-control" 
                value={this.state.term} 
                onChange={this.onInputChange}
                />
                </div>
              </form>
          </div>
        );
    }
}

export default SearchBar;