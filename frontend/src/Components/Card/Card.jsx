import React from 'react'
import "../Card/Card.css"
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <Link to={`/book/${props.id}`}>
        <div className='card'>
            <div className='card-img'>
                <img src={props.image} alt="" />
            </div>
            <div>
                <p>{props.title}</p>
                <table>
                    <tbody>
                    <tr>
                        <td>Edisi</td>
                        <td>:</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>No. Panggil</td>
                        <td>:</td>
                        <td>321 SUT</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Link>
  )
}

export default Card