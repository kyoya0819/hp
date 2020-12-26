import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import route from './../../Route';

import NoImage from './../../images/no-image.svg';

interface Props {
    idNum: number,
    data: {
        title: string,
        image: string[]
    }
}

export default class CreateCard extends Component<Props> {
    render() {
        return (
            <li>
                <Link to={route('create:id', {id: this.props.idNum})}>
                    <div>
                        { this.props.data.image.length > 0
                            ? <img src={'/images/' + this.props.data.image[0]} alt={this.props.data.title} />
                            : <img src={NoImage} alt="No Image" />
                        }
                    </div>
                    <p>{this.props.data.title}</p>
                </Link>
            </li>
        );
    }
}