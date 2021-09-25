import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
import './Commite.css'

const Commite = () => {
    const [members, setMembers] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./committee.JSON')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    const seeDetails = (member) => {
        const details = [...cart, member]
        setCart(details)
    }

    return (
        <div className='container my-5' >
            <div className="row">
                <div className="col-md-9">
                    <div className="row g-4">
                        {members.map(member => <Member
                            hendelButton={seeDetails}
                            key={member.id}
                            member={member}
                        ></Member>)}
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Commite;