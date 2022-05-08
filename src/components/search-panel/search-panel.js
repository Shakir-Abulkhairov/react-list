import React from 'react';
import './search-panel.css';
class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.updateSearchForm = this.updateSearchForm.bind(this);
    }
    updateSearchForm(e) {
        let term = e.target.value;
        this.setState({term});
        this.props.updateSearchForm(term);
    }
    render(){
        return(
            <input
                onChange={this.updateSearchForm}
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
            />
        )
    }
}
export default SearchPanel;