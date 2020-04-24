import React, {Component} from 'react';
import HomeCard from '../UI/HomeCard'

export default class Home extends Component{
    
    jaction(){
           
        alert('teste');
    }

    homeCardReleases ={
        title: 'Releases',
        text: 'Cillum Lorem reprehenderit id occaecat voluptate. Officia ipsum in ex amet deserunt do qui veniam. Esse amet qui sint est aute officia voluptate commodo eiusmod occaecat. Irure id enim duis duis magna sint pariatur nostrud do qui pariatur. Incididunt laborum eu proident .',
        image: 'https://image.shutterstock.com/image-photo/analyzing-gathering-statistical-data-growth-600w-1124867465.jpg',
        action: () => {alert('Releases Clicked')}
    }
    homeCardBacklog ={
        title: 'Backlog',
        text: 'Cillum Lorem reprehenderit id occaecat voluptate. Officia ipsum in ex amet deserunt do qui veniam. Esse amet qui sint est aute officia voluptate commodo eiusmod occaecat. Irure id enim duis duis magna sint pariatur nostrud do qui pariatur. Incididunt laborum eu proident .',
        image: 'https://image.shutterstock.com/image-photo/business-colleagues-discussing-future-priorities-600w-1209762514.jpg',
        action: () => {alert('Backlog Clicked')}
    }
    homeCardSprints ={
        title: 'Sprints',
        text: 'Cillum Lorem reprehenderit id occaecat voluptate. Officia ipsum in ex amet deserunt do qui veniam. Esse amet qui sint est aute officia voluptate commodo eiusmod occaecat. Irure id enim duis duis magna sint pariatur nostrud do qui pariatur. Incididunt laborum eu proident .',
        image: 'https://image.shutterstock.com/image-photo/back-view-mens-feet-on-600w-684725344.jpg',
        action: () => {alert('Sprints Clicked')}
    }

    render(){

        return(
            <div className="container text-center">
                    <div className="row">
                        <HomeCard title={this.homeCardReleases.title}
                            text ={this.homeCardReleases.text}
                            image={this.homeCardReleases.image}
                            action={this.homeCardReleases.action} />
                        <HomeCard {...this.homeCardBacklog} />
                        <HomeCard {...this.homeCardSprints} />
                    </div>
            </div>
        )
    }
}