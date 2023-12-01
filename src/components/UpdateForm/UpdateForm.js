import { Formik } from 'formik';
import { object, string, number } from 'yup';
import { BsPersonPlusFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { updateContact } from 'redux/contacts/operations';

import { Label, StyledForm, Input, ErrorMsg, Btn } from './UpdateForm.styled';

const contactSchema = object().shape({
  name: string().required('Please enter name'),
  number: number()
    .typeError('Please enter only numbers')
    .required('Please enter phone number'),
});

export const UpdateForm = ({ id, currentName, currentNumber, onClose }) => {
  const dispatch = useDispatch();
  const initialValues = {
    name: currentName,
    number: currentNumber,
  };

  const onUpdateContact = (contactId, newData) => {
    console.log(contactId);
    console.log(newData);
    dispatch(updateContact(contactId, newData));
    toast.success(`Contact ${newData.name} was updated!`);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={(values, { resetForm }) => {
        onUpdateContact(id, values);
        resetForm();
      }}
    >
      <StyledForm autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input id="currentName" type="text" name="name" />
          <ErrorMsg name="currentName" component="span" />
        </Label>
        <Label htmlFor="number">
          <span>Number</span>
          <Input id="currentNumber" type="tel" name="number" />
          <ErrorMsg name="currentNumber" component="span" />
        </Label>
        <Btn type="submit">
          <BsPersonPlusFill size={32} />
          Update contact
        </Btn>
        <Btn type="button" onClick={onClose}>
          <BsPersonPlusFill size={32} />
          Cancel
        </Btn>
      </StyledForm>
    </Formik>
  );
};
