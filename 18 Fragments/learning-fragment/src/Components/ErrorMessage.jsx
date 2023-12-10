/* eslint-disable react/prop-types */
const ErrorMessage = ({ names }) => {
  return <>{names.length === 0 && <h1>I am Looking for Friends</h1>}</>;
};

export default ErrorMessage;
