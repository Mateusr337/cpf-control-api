export default function isValidCpf(cpf: string) {
  if (typeof cpf !== 'string') return false;
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
  const cpfSplit = cpf.split('').map((el) => +el);
  const rest = (count: number) =>
    ((cpfSplit.slice(0, count - 12).reduce((sum: number, el: number, index: number) => sum + el * (count - index), 0) *
      10) %
      11) %
    10;
  return rest(10) === cpfSplit[9] && rest(11) === cpfSplit[10];
}
