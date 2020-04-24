import React from 'react';

const ReleaseForm = ({submitHandler}) => {
    let _releasename, _releaseDate, _releaseDescription;

    const handleSubmit = (e) =>{        
        console.log('ReleaseForm -> handleSubmit');
        submitHandler(e,{
            name:_releasename.value,
            date:_releaseDate.value,
            description:_releaseDescription.value
        });

        cleanForm();
    }

    const cleanForm = () => {
            _releaseDate='';
            _releaseDescription='';
            _releasename = '';
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-inline">
                <label htmlFor="inlineFormInput2" className="sr-only">Name</label>
                <input type="text" ref={input => _releasename = input} className="form-control mb-2 mr-sm-2" placeholder="Set the name" id="inlineFormInputName2"/>

                <label htmlFor="inlineFormInputDescription" className="sr-only">Description</label>
                <input type="text" ref={input => _releaseDescription = input} className="form-control mb-2 mr-sm-2" placeholder="Set the Description" id="inlineFormInputDescription"/>

                <label htmlFor="inlineFormInputGroupDescription" className="sr-only">Date</label>
                <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                    </div>
                    <input type="date" ref={input => _releaseDate = input} placeholder="Set the Date" className="form-control" id="inlineFormInputGroupDescription"/>
                </div>


                <div className="form-check mb-2 mr-sm-2">
                    <input type="checkbox" id="inlineFormCheck" className="form-check-input"/>
                    <label htmlFor="inlineFormCheck" className="form-check-label">
                        Remember me
                    </label>
                </div>

                <button type="submit" className="btn btn-primary mb-2">
                    Save
                </button>

            </form>
        </div>
    )
}

export default ReleaseForm;