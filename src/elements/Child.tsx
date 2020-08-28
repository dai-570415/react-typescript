import React from 'react';

type Props = {
    number: string;
    message: string;
    children: React.ReactNode;
}

const Child: React.FC<Props> = ({number, children, message}) => {
    return (
      <p>{ number }: { message } { children }</p>
    );
}

export default Child;