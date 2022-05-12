import React, { Component } from 'react'
import axios from "axios"
export default class Search extends Component {
    search = () => {
        //获取用户输入
        console.log(this.keyWordElement.value);
        //发送axios请求
        axios.get(`https://api.github.com/search/users?q=${this.keyWordElement.value}`).then(
            (res) => { this.props.saveUsers(res.data.items) }, (error) => {
                console.log(error);
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
