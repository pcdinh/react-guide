import React from 'react';

// () => () without return
// () => {} with return
// Using {message} as a destructered argument allows me to
// assign parameters to this component when rendering it
const HelloElement = ({message}) => (
  <h1>{message}</h1>
)

export { HelloElement };
