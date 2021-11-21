import React from 'react'
import axios from 'axios'


export default function PersonInfo(props) {
    return (
        <div>
            <div className="info">
                <h3>{props.person.name.title} {props.person.name.first} {props.person.name.last} - {props.person.login.uuid}</h3>
                <table>
                    <tr>
                        <td>
                            <tr rowSpan="8">
                                <img src={props.person.picture.large}/>
                            </tr>
                            <tr className="centre">
                                <button>Details</button>
                            </tr>
                        </td>
                        <td>
                            <tr>User Name: {props.person.login.username}</tr>
                            <tr>Gender: {props.person.gender}</tr>
                            <tr>Time Zone Description: {props.person.location.timezone.description}</tr>
                            <tr>Address: {props.person.location.street.number} {props.person.location.street.name}, {props.person.location.city}, {props.person.location.state}, {props.person.location.country} - {props.person.location.postcode}</tr>
                            <tr>Email: {props.person.email}</tr>
                            <tr>Birth Date and Age: {props.person.dob.date} ({props.person.dob.age})</tr>
                            <tr>Register: {props.person.registered.date}</tr>
                            <tr>Phone#: {props.person.phone}</tr>
                            <tr>Cell#: {props.person.cell}</tr>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
