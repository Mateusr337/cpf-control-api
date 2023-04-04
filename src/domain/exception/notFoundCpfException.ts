import { Exception } from "domain/type/exception/exception";

const notFoundCpfException: Exception = {
  type: "NotFoundCpfException",
  message: "CPF not found",
};

export default notFoundCpfException;
