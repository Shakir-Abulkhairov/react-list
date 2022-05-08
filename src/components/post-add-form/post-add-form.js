import React from 'react';
import './post-add-form.css';
class PostAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onAddForm = this.onAddForm.bind(this);
    }
    onValueChange(e){
        this.setState({text: e.target.value});
    }
    onAddForm(e){
        e.preventDefault();
        this.props.addItem(this.state.text);
        this.setState({text:''});
    }
    render() {
        return (
            <form 
                onSubmit={this.onAddForm}
                className="bottom-panel d-flex">
               <input 
                    value={this.state.text}
                    onChange={this.onValueChange}
                    type="text"
                    placeholder="о чем вы думаете сейчас?"
                    className="form-control new-post-label"
                />
                <button
                      type="submit"
                      className="btn btn-outline-secondary">
                          Добавить
                      </button>
    
            </form>
        )
    }
}
export default PostAddForm;