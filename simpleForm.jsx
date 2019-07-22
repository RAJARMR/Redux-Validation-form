import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';


const renderField = ({ input, label, type,  meta: { touched, error,  } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && (error && <span>{error}</span>) }
      </div>
    </div>
)
    const RadioButton = ({ input, id, children ,meta: { touched, error,  }}) =>
    <div>
        <input
          {...input}
          id={id}
          type="radio"/>
        <label htmlFor={id}>{children}</label>
        {touched && (error && <span>{error}</span>) }
      </div>

const required = value => value ? undefined :'Required'
const maxLength = max => value => value && value.length > max ? 'Must be  15 characters or less':undefined
const maxLength15 = maxLength(15)
const minLength = min => value => value && value.length <  min ? 'Minimum 3 characters': undefined
const minLength3 = minLength(3)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
//const checkbox = checked => checked ? undefined:'Tick the checkbox'
 const validateRadio = value => value ? !value : 'Choose the gender'

 
class SimpleForm extends React.Component{
    constructor(props){
        super(props);


        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit (values){
              console.log('Submission received!', values);
               
              if(values )
              {
                    this.props.dispatch({
                        type:'SEND_URL',
                        values
                    });

                    
                }
                    
                }

    render(){
        const { handleSubmit, submitting } = this.props;
           return (


               <form onSubmit={handleSubmit(this.handleSubmit)}>
                   <div>
                       <label>User Name</label>
                       <div>
                           <Field
                               name="userName"
                               component={renderField}
                               type="text"
                               placeholder="User Name"
                               validate={[ required, maxLength15 ,minLength3]}
                           />
                       </div>
                   </div>
                   <div>
                       <label>Email</label>
                       <div>
                           <Field
                               name="Email"
                               component={renderField}
                               type="email"
                               placeholder="Email"
                               validate={[ required, email ]}
                           />
                       </div>
                   </div>
                   <div>
                       <label>Phone no:</label>
                       <div>
                           <Field
                           name="number"
                           component={renderField}
                           type="text"
                           placeholder="Phone no"
                           validate={[required,number]}
                         
                           />
                       </div>
                   </div>


                            <label>Gender:</label> 
                            <Field 
                            name="sex" 
                            component={RadioButton} 
                            type="radio" 
                            id="radioMale" 
                            value="male"
                            validate={validateRadio}
                            >
                            Male
                            </Field>

                            <Field 
                            name="sex" 
                            component={RadioButton} 
                            type="radio" 
                            id="radioFemale"
                            validate={validateRadio}
                            value="female">
                            Female
                            </Field>

                   {/* <div>
                       <label>I Agree:  </label>
                           <div>
                           <Field
                               name="employed"
                               id="employed"
                               component={renderField}
                               type="checkbox"
                               validate={[checkbox ]}
                           />
                           </div>
                         
                           
                       </div> */}
                   <div>
                       <button type="submit" disabled={submitting}>submit</button>
                   </div>
               </form>   
             
           );
       }
           
       

    }

   


const reduc = reduxForm({
    form:'simple',
})(SimpleForm)

     
export default connect()(reduc);
  



       
