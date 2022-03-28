import React from 'react';
import { FiHelpCircle } from 'react-icons/fi';

type HelpProps = {
  message: string,
  id: string
}

const Help = ({
  message,
  id
}: HelpProps) => {
  return (
    <div className="tooltip" data-tip={message} id={id}>
      <span className={'ml-1'}><FiHelpCircle fontSize={18} /></span>
    </div>
  )
}

export default Help;
