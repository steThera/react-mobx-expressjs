import MobxReactForm from 'mobx-react-form';

class Form extends MobxReactForm {

  onSuccess(form) {
    // get field values
    console.log('Form Values!', form.values());
  }

  onError(form) {
    // get all form errors
    console.log('All form errors', form.errors());
    // invalidate the form with a custom error message
    form.invalidate('This is a generic error message!');
  }
}

export default Form;
