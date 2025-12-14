import React from 'react';
import Otp from './primaryComponent/otp';

export default function OtpLayout() {
  return (
    <div>
        <Otp
        numberOfBoxes = {4}
        maskedCharacter = {'*'}
        />
    </div>
  )
}
