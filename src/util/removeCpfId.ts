import { RestrictedCpf } from '@prisma/client';

export default function removeCpfId(cpfList: Array<RestrictedCpf>): Omit<RestrictedCpf, 'id'>[] {
  cpfList.map((restrictedCpf: any) => delete restrictedCpf.id);
  return cpfList;
}
