import React from 'react';
import AppHeader from '../app-header';
import PostAddForm from '../post-add-form';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search-panel';
import './app.css';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[
                {label:"going to learn", important:true ,important:false,like:false, id:1},
                {label:"react", important:false ,important:false,like:false, id:2},
                {label:"redux", important:false,important:false,like:false, id:3},
            ],
            term: '',
            filter:'all'
        }
        this.onDelete = this.onDelete.bind(this);
        this.addItem = this.addItem.bind(this);
        this.toggleImportantItem = this.toggleImportantItem.bind(this);
        this.toggleLikedItem = this.toggleLikedItem.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.updateSearchForm = this.updateSearchForm.bind(this);
        this.filterPost = this.filterPost.bind(this);
        this.onFilterselect = this.onFilterselect.bind(this);
    }
    onDelete(id){
        this.setState(({data})=>{
            const index = data.findIndex(element => element.id === id);
            const newArr  =  [...data.slice(0,index) , ...data.slice(index + 1)];

            return{
                data:newArr
            }
        })
    }
    newId = 4;
    addItem(body){
        const newItem = {
            label: body,
            important:false, 
            id : this.newId++
        }
        this.setState(({data}) =>{
           const newArr = [...data,newItem]
           return{
                data: newArr
           }
        })
    }
    toggleImportantItem(id){
        this.setState(({data})=>{
            const index = data.findIndex(element => element.id === id);
            const oldArray = data[index]
            const newItem  = {...oldArray,important : !oldArray.important}
            const newArr  =  [...data.slice(0,index) , newItem,...data.slice(index + 1)];

            return{
                data:newArr
            }
        })
    }
    toggleLikedItem(id){
        this.setState(({data})=>{
            const index = data.findIndex(element => element.id === id);
            const oldArray = data[index]
            const newItem  = {...oldArray,like : !oldArray.like}
            const newArr  =  [...data.slice(0,index) , newItem,...data.slice(index + 1)];

            return{
                data:newArr
            }
        })    
    }
    searchPost(items,term){
        if(term.length === 0){
            return items;
        }
        return items.filter((item)=>{
            return item.label.indexOf(term) > -1;
        })
    }
    updateSearchForm(term){
        this.setState({term});
    }
    filterPost(items,filter){
        if(filter === 'like'){
            return items.filter(item=>item.like);
        }else{
            return items;
        }
       
    }
    onFilterselect(filter){
        this.setState({filter});
    }
    render() {
        const {data,term,filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPost = data.length;
        const search = this.filterPost(this.searchPost(data,term),filter);
        return(
            <div  className="app">
                 <AppHeader liked={liked}  allPost={allPost} />
                 <div className="search-panel d-flex">
                    <SearchPanel updateSearchForm={this.updateSearchForm}/>
                    <PostStatusFilter 
                    onFilterselect={this.onFilterselect}
                    filter={filter} />
                 </div>
                 <PostList 
                 toggleLikedItem={this.toggleLikedItem}
                 toggleImportantItem={this.toggleImportantItem}
                 onDelete={this.onDelete}
                 posts={search}/>
                 <PostAddForm addItem={this.addItem}/>
            </div>
         )
    }
   
}
export default App;