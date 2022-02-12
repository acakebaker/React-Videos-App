import './SearchBar.css';

import React from 'react';

class SearchBar extends React.Component {
   state = { term: '' };

   // Function that sets the state 'term' to the value of the input field.
   onInputChange = (event) => this.setState({ term: event.target.value });

   // Function for when the form is submitted.
   onFormSubmit = (event) => {
      event.preventDefault();  // Stops the page from refreshing.

      this.props.onTermSubmit(this.state.term);
   };

   render () {
      return (
            <form onSubmit={this.onFormSubmit} className="search-field">
               <div className="">
                  <input 
                     className="input-field"
                     type="text" 
                     value={this.state.term} 
                     onChange={this.onInputChange} 
                     placeholder="Search for a video..."
                  />
               </div>
            </form>
      );
   }
}

export default SearchBar;