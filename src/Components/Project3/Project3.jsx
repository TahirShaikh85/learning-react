import React, { useState, useEffect } from 'react';
import Loading from './Loading';

const Project3 = () => {
    const [user, setUser] = useState([]);
    const [loading,setLoading] = useState(true);

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        setUser(await response.json())
        setLoading(false)
    }

    useEffect(() => {
        getUsers();
    }, [])

    if(loading){
        return <Loading/>
    }
    return (
        <div className="container">
            <h1 className='text-center my-5'>GitHub Users</h1>
            <div className="row ">
                {user.map((currElem) => {
                    return (
                        <div className="col-md-4" key={currElem.id}>
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={currElem.avatar_url} className="img-fluid img-avt" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{currElem.login}</h5>
                                            <p className="card-text">Some.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Project3