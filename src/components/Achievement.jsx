import React, { Component } from 'react'
import request from 'request-promise'
import md5 from 'md5'

class Achievement extends Component {
    constructor(props){
        super(props)

        this.state={
            name:this.props.name,
            desc:this.props.desc
        }
    }

  render() {
    const {name, desc} = this.state;

    return (
        <div className="achievement">
            <h4>{name}</h4>
            <img
                src={`http://cheever.s3.amazonaws.com/${this.props.appid}/${md5(name)}.jpg`}
                alt={name}
            />
            <h5>{desc}</h5>
        </div>
    );
  }
}

export default Achievement;
