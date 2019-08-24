import React, {Component} from 'react'

class Input extends Component {

    constructor(props) {
        super(props)

        this.state = {
            content: props.label,
            defaultLabel: props.label
        }
        
        this.handleChange = this.handleChange.bind(this)
    }
    
    // when text in input box changes
    handleChange(e){

        // run submitValue function passed down from parent
        this.props.submitValue(e.target.value, this.props.id)
        
        this.setState(
            {content:e.target.value}
        )
    }

    render() {

        return(
            <input className={'input'} type='text' placeholder='Search titles...'
                    value={this.state.content}
                    onChange={this.handleChange}
                />
        )
    }
}

export default Input