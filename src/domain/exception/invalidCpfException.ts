import { Exception } from "domain/type/exception/exception";

const invalidCpfException: Exception = {
  type: "InvalidCpfException",
  message: "CPF is not valid.",
};

export default invalidCpfException;
