import React from 'react'
import PropTypes from 'prop-types';

function Alert(props) {
    return (
        <>
            {
                <div className={`alert alert-${props.type} alert-dismissible`} role="alert">
                    <div>{props.message}</div>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
        </>
    )
}


// Set Prop Types
Alert.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string
}

export default Alert;