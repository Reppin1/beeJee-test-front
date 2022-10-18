import { useDispatch } from 'react-redux';

const useTypedDispatch = () => useDispatch<any>();

export { useTypedDispatch };
