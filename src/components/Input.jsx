import React, {Component} from 'react'

class Input extends Component {

    constructor(props) {
        super(props)

        this.state = {
            content: props.label,
            defaultLabel: props.label
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleFocus(e) {
        if(e.target.value === this.state.defaultLabel){
            this.setState({
                content: ""
            })
        }
    }

    handleBlur(e) {
        if(e.target.value === ''){
            this.setState({
                content: this.state.defaultLabel
            })
        }
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
        let defaultContent = ''
        if(this.state.content === this.state.defaultLabel){
            defaultContent = 'default'
        }
        return(
            <input className={`text ${defaultContent}`}
                    value={this.state.content}
                    onChange={this.handleChange} 
                    onFocus={this.handleFocus} 
                    onBlur={this.handleBlur}
                />
        )
    }
}

export default Input