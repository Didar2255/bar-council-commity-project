import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Member.css'


const Member = (props) => {
    const { img, name, address, salary, designation, job_exprience, age } = props.member
    return (
        <div className="col-md-4">
            <div className="col card shadow border border-0">
                <div className="card h-100 cart-body  ">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">Name : {name}</h4>
                        <h5>Desination : <small>{designation}</small></h5>
                        <p>Work Exprience : {job_exprience}</p>
                        <p>Age : {age}</p>
                        <p>Salary : <small>{salary}</small></p>
                        <p>Home Address : {address}</p>
                        <button className='button' onClick={() => props.hendelButton(props.member)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Member;