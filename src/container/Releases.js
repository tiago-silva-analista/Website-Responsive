import React, { Component } from 'react';
import ReleaseForm from './../UI/ReleaseForm';

export default class Releases extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            releases: [{
                id: 1,
                releaseName: 'Release 1',
                releaseDate: '01-01-2020',
                releaseDescription: 'Nulla enim amet quis excepteur id aliqua aliqua.'

            },
            {
                id: 2,
                releaseName: 'Release 2',
                releaseDate: '01-02-2020',
                releaseDescription: 'Nulla enim amet quis excepteur id aliqua aliqua.'

            },
            {
                id: 3,
                releaseName: 'Release 3',
                releaseDate: '01-03-2020',
                releaseDescription: 'Nulla enim amet quis excepteur id aliqua aliqua.'

            },
            {
                id: 4,
                releaseName: 'Release 4',
                releaseDate: '01-04-2020',
                releaseDescription: 'Nulla enim amet quis excepteur id aliqua aliqua.'

            }]
        }
    }
    handleSubmit(e,{name,date,description}){
        e.preventDefault();
        var state = this.state ;
        
        var myRelease ={
            id: state.releases.length + 1,
            releaseName: name,
            releaseDate: date,
            releaseDescription: description
        }

        this.setState({releases: state.releases.concat(myRelease)})

    }


    handleDelete(id){
        var myReleases = this.state.releases;
        myReleases.splice(id, 1)
        this.setState({releases: myReleases});
    }

    render() {
        return (            
            <div className="card text-center" style={{width: "90%", marginLeft:"3%",marginRigth:"3%",marginTop:"1%"}}>
                <ReleaseForm submitHandler={this.handleSubmit} />
                <h1>Releases</h1>
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Date</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.releases.map((release, index) => {
                                const onClickRemove = (e) => {
                                    this.handleDelete(index);
                                }
                                return (
                                    <tr>
                                        <th scope="row">{release.id}</th>
                                        <td>{release.releaseName}</td>
                                        <td>{release.releaseDescription}</td>
                                        <td>{release.releaseDate}</td>
                                        <td><button type="button" onClick={onClickRemove} className="btn btn-danger btn-sm">Remove</button></td>
                                    </tr>)
                            })}
                    </tbody>
                </table>
            </div>
        )
    }
}