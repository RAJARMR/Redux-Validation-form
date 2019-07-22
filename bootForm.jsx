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

     
 

function validateRadio(value) {
  if(!value) {
    return 'You need to check this value'
  }
}

const required = value => value ? undefined :'Required'
const maxLength = max => value => value && value.length > max ? 'Must be  15 characters or less':undefined
const maxLength15 = maxLength(15)
const minLength = min => value => value && value.length <  min ? 'Minimum 3 characters': undefined
const minLength3 = minLength(3)
const email = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
'Invalid email address' : undefined
// const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
// const checkbox = checked => checked ? undefined:'Tick the checkbox'

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


<body>
 <div className="container">
 <form onSubmit={handleSubmit(this.handleSubmit)}></form>
<div className="row ">

         <div className="col-sm-12">
             <div className="row">
			     <div className="col-xs-4">
          	         <label className="firstname">First Name :</label> </div>
		         <div className="col-xs-8">
                 <Field 
                               className="form-control "
                               name="userName"
                               component={renderField}
                               type="text"
                               placeholder="User Name"
                               validate={[ required, maxLength15 ,minLength3]}
                           />
		            
             </div>
		      </div>
		 </div>
		 
		
		 <div className="col-sm-12">
		     <div className="row">
			     <div className="col-xs-4">
		             <label className="mail" >Email :</label></div>
			     <div className="col-xs-8"	>	 
                 <Field
                             className="form-control"
                               name="Email"
                               component={renderField}
                               type="email"
                               placeholder="Email"
                               validate={[ required, email ]}
                           />
		         </div>
		     </div>
		 </div>

         

         <div className="col-sm-12">
		     <div className ="row">
                 <div className="col-xs-4 ">
			       <label className="gender">Gender:</label>
				 </div>
			 
			     <div className="col-xs-4 male">	 
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
				 </div>
				 
				 <div className="col-xs-4 female">
                 <Field 
name="sex" 
component={RadioButton} 
type="radio" 
id="radioFemale"
validate={validateRadio}
 value="female">
 Female
 </Field>
			     </div>
			
		  	 </div>
		     <div className="col-sm-12">
             <button type="submit" disabled={submitting}>submit</button>
		   </div>
		 </div>
	 </div>	 
     <form/>
     </div>
     </body>
   
 

);
}
    


}




const reduc = reduxForm({
form:'simple',
})(SimpleForm)


export default connect()(reduc);

