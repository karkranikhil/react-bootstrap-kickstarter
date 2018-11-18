import React from 'react';
import { connect } from 'react-redux';
import store from '../store'
import Demo from '../demo'
const Test =()=> {
    console.log(store.getState())
    store.subscribe(()=>{
        console.log('susbscribe', store.getState())
    })
    return (
        <>
        <h1>Welcome to TEST</h1>
        <Demo/>
        </>
    )
}


export default connect(null, null)(Test);