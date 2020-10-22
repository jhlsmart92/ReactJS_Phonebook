import React, {
    Component
} from 'react';

class PhoneForm extends Component {
    input = React.createRef();

    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value //in lhs, input name, in rhs, input value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); //prevent refreshing when click submit button
        this.props.onCreate(this.state); // send the state to parents
        this.setState({ // initialize the state to none
            name: '',
            phone: '',
        })
        this.input.current.focus();
    }

    render() {
        return ( <
            form onSubmit = {
                this.handleSubmit
            } >
            <
            input name = "name"
            placeholder = "이름"
            onChange = {
                this.handleChange
            }
            value = {
                this.state.name
            }
            / >    <
            input name = "phone"
            placeholder = "전화번호"
            onChange = {
                this.handleChange
            }
            value = {
                this.state.phone
            }
            ref = { this.input }
            / >   <
            button type = "submit" > submit < /button> <
            div > {
                this.state.name
            } {
                this.state.phone
            } <
            /div> < /
            form >
        );
    }
}

export default PhoneForm;
