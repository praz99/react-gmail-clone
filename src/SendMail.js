import React from 'react';
import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import './SendMail.css';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className="sendMail__close" onClick={() => dispatch(closeSendMessage())} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('to', { required: true })}
          placeholder="To"
          type="text"
        />
        {errors.to && <p className="sendMail__error">To is required!</p>}
        <input
          {...register('subject', { required: true })}
          placeholder="Subject"
          type="text"
        />
        {errors.subject && <p className="sendMail__error">Subject is required!</p>}
        <input
          {...register('message', { required: true })}
          placeholder="Message..."
          className="sendMail__message"
          type="text"
        />
        {errors.message && <p className="sendMail__error">Message is required!</p>}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail;
