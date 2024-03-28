import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            erorMessage: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts1')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ erorMessage: "Error Retriving Data" })
            })
    }
    render() {
        const { posts, erorMessage } = this.state
        return (
            <div>
                PostList
                {
                    posts.length ?
                        posts.map(post => <div key={post.id} > {post.title} </div>) : null
                }
                {
                    erorMessage ? <div> {erorMessage} </div> : null
                }
            </div>
        )
    }
}

export default PostList