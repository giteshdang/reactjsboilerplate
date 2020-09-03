import React from 'react';
import pure from 'recompose/pure';

export const TechnicalSupportMessage = () => {
    return (
        <span className='catch-message'>Something went wrong, please contact our technical support team</span>
    );
};

export default pure(TechnicalSupportMessage);
