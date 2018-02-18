import React from 'react';

export const Note = (props) => {
    return (
        <div>
            <div className="card-body">
                {props.edit
                ?
                <textarea
                className="form-input"
                value={props.content}
                rows="6"
                onChange={props.handleReasonChange}
                />
                :<p>{props.content}</p>
                }
            </div>
            <div className="card-footer btn-right">
            {props.edit
            ? <SaveButton updatePerson={props.updatePerson} />
            : <EditButton toggleEdit={props.toggleEdit} />
            }
            </div>
        </div>
    )
}

const EditButton = (props) => {
    return (
        <button onClick={props.toggleEdit} className="btn btn-primary">
        Edit
        </button>
    )
}

const SaveButton = (props) => {
    return (
        <button onClick={props.updatePerson} className="btn btn-primary">
        Save
        </button>
    )
}