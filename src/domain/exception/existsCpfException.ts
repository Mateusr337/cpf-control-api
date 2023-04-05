import { Exception } from '../type/exception/exception';

const ExistsCpfException: Exception = {
  type: 'ExistsCpfException',
  message: 'CPF already exists.',
};

export default ExistsCpfException;
