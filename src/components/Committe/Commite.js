import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';

const Commite = () => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        fetch('./committee.JSON')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return (
        <div className='container my-5' >
            <div className="row">
                <div className="col-md-9">
                    <div className="row g-4">
                        {members.map(member => <Member
                            key={member.id}
                            member={member}
                        ></Member>)}
                    </div>
                </div>
                <div className="col-md-3">
                    <h2>This from cart</h2>
                </div>
            </div>
        </div>
    );
};

export default Commite;