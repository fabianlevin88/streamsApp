import React                 from 'react';
import {  Field, reduxForm } from 'redux-form';
import { connect }           from 'react-redux';
import { createStream }      from '../../actions'

const validate = formValues => {
    const errors = {};

    if(!formValues.title) {
        errors.title = "You must provide a title"
    }

    if(!formValues.description) {
        errors.description = "You must provide a description"
    }

    return errors;
};

class StreamCreate extends React.Component {

    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        
        const className = `field ${meta.touched && meta.error ? 'error' : ''}`

        return (
            <div className={className} >
                <label>{label}</label>
                <input {...input} placeholder={label} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.createStream(formValues)
    }

    render() {
        return(
            <div className="ui container">
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <h1>Create a stream</h1> 
                    <Field name="title" component={this.renderInput} label="Enter title" />
                    <Field name="description" component={this.renderInput} label="Enter description" />
                    <button className="ui button primary submit">Submit</button>
                </form>
            </div>
            
        );
    }
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);