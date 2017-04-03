var reactJoiForm = require('react-joi-forms');
var JoiForm = reactJoiForm.JoiForm;
var FormSection = reactJoiForm.FormSection;
 
var ContactForm = React.createClass({
    schema: [
        Joi.string().label('Name').required().tags('personal-info'),
        Joi.string().label('Phone Number').required().tags('personal-info'),
 
        Joi.string().email().label('Street Address').required().tags('address'),
        Joi.string().label('City').required().tags('address'),
    ],
    onSubmit(validationErrors, formValues) {
        // formValues = { 
        //  name: 'test@test.com', 
        //  phoneNumber: '18005551212', 
        //  streetAddress: 'where I live', 
        //  city: 'city where I live', 
        // } 
        // Send formValues to an action to send via your API 
    },
    render() {
        return (
            <JoiForm schema={this.schema} onSubmit={this.onSubmit}>
                <div className="some-complex-form-layout">
                    <FormSection tag="personal-info" />
                </div>
                <div className="some-other-form-layout">
                    <FormSection tag="address" />
                </div>
            </JoiForm>    
        );
    }
});