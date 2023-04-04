import bcrypt from "bcrypt";
import handlerError from "./handlerError";

function encode(data: string) {
  const encrypted = bcrypt.hashSync(data, 10);
  return encrypted;
}

async function match(data: string, hash: string) {
  const match = await bcrypt.compare(data, hash);
  if (!match) throw handlerError.unauthorizedError();
  return match;
}

export default {
  encode,
  match,
};
