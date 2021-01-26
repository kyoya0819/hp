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
                        <img src={ this.props.data.image.length > 0 ? '/images/' + this.props.data.image[0] : NoImage } alt={this.props.data.title} />
                    </div>
                    <p>{this.props.data.title}</p>
                </Link>
            </li>
        );
    }
}
