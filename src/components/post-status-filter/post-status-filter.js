import React from 'react';
import './post-status-filter.css';
class PostStatusFilter extends React.Component{
    constructor(props) {
        super(props);
        this.buttons=[
            {name:'all',label:'Все'},
            {name:'like',label:'Понравилось'},
        ]
    }
   render() {
    const buttons = this.buttons.map(button =>{
        const {name,label} = button;
        const {filter,onFilterselect} = this.props;
        const active = filter === name;
        const clazz = active ? 'btn-info' : 'btn-outline';
        return (
            <button 
                key={name}
                type="button" 
                className={`btn ${clazz}`}
                onClick={()=>onFilterselect(name)}
                 >{label}</button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
   }
}
export default PostStatusFilter;