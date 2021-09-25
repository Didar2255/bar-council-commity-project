import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Member.css'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Member = (props) => {
    const { img, name, address, salary, designation, job_exprience } = props.member
    return (
        <div className="col-md-4">
            <div class="col card shadow">
                <div class="card h-100 cart-body text-white">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">Name : {name}</h4>
                        <h5>Desination : <small>{designation}</small></h5>
                        <p>Work Exprience : {job_exprience}</p>
                        <p>Salary : <small>{salary}</small></p>
                        <p>Home Address : {address}</p>
                        <button className='button' onClick={() => props.hendelButton(props.member)}> <FontAwesomeIcon icon={faInfoCircle} /> See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Member;