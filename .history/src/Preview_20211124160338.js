import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export default function Preview() {
    const history = useHistory()
    useEffect(() => {
        if(!image) {
            history.replace()
        }
    }, [])
    return (
        <div>
            <img src={image} />
        </div>
    )
}
