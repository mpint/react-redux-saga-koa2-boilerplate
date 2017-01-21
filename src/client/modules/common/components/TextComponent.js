import React from 'react';

const TextComponent = (props) => {
  const content = props.content || 'a component for testing';

  return (
    <div style={ props.style }>
      { content }
    </div>
  );
};

export default TextComponent;
