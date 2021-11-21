import React, { Component } from 'react'
import axios from 'axios'
import PersonInfo from './PersonInfo'

export default class PersonList extends Component 
{
    //Define state default values
    constructor(props){
        super(props)

        this.state = {
            persons: []

        }
    
    }

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <h1 className="centre">User List</h1>
                {
                    this.state.persons.map(u => (
                        <>
                            <PersonInfo person={u}/>
                        </>
                    ))
                }
            </div>
        )
    }

}