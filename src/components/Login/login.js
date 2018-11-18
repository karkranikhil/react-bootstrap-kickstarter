import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import  * as validation from '../../utils/validations'
import './login.css'
const maxLength15 = validation.maxLength(15)
const minLength2 = validation.minLength(2)
const renderField = ({
    input,
    label,
    sublabel,
    sublabelClassName,
    type,
    className,
    meta: { touched, error, warning }
  }) => (

    <div>
      <label>{label}<span className={sublabelClassName}> {sublabel}</span></label>
      <div>
        <input {...input} className={className} placeholder={label} type={type} />
        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span className="text-warning">{warning}</span>))}
      </div>
    </div>
  )

class Login extends Component{
    
    handleSubmit=()=>{
        this.props.history.replace( '/test' );
    }
    render(){
        console.log(this.props)
        const {handleSubmit, pristine, reset, submitting } = this.props
        return (
            <div id="login-parent">
                <div className="formBorder">
                 <h1>Login</h1>   
                <form id="form_login" onSubmit={handleSubmit(this.handleSubmit)}>
                    <div className="form-group">
                        <Field
                            name="email"
                            sublabel="*"
                            sublabelClassName="text-danger"
                            className="form-control"
                            type="email"
                            component={renderField}
                            label="Email address"
                            validate={[validation.required, validation.email]}
                        />
                    </div>
                    <div className="form-group">
                        <Field
                            name="password"
                            type="password"
                            className="form-control"
                            sublabelClassName="text-danger" 
                            sublabel="*"
                            component={renderField}
                            label="Password"
                            validate={[validation.required, minLength2,maxLength15]}
                        />
                    </div>
                    
                    <div className="text-center">
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </div>
                    
                </form>
                </div>
            </div>
        )
    }
}
const validate = values => {
    const errors = {};
    const requiredFields = [
     'firstName',
     'lastName',
     'email',
    ];
    requiredFields.forEach(field => {
     if (!values[field]) {
       errors[field] = 'Required';
     }
    });
    if (
     values.email &&
     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
     errors.email = 'Invalid email address';
    }
    return errors;
  }
  export default connect(null, null)(reduxForm({
    enableReinitialize: true,
    touchOnChange: true,
    destroyOnUnmount: false,
    keepDirtyOnReinitialize: true,
    form: 'login',
    validate
  })(Login))