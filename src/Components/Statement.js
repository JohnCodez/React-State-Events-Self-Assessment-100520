import React from 'react'
import { yes , no} from '../objects'

class Statement extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            status: 'no',
            text: no['no-statement'],
            image: no['no-image']
        }
    }

    click = () => {
        if(this.state.status == 'no'){
            this.setState({status: 'yes', text: yes['yes-statement'], image: yes['yes-image']})
        } else {
            this.setState({status: 'no', text: no['no-statement'], image: no['no-image']})
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <img onClick={this.click} src={this.state.image} />
            </div>
        )
    }
}

export default Statement