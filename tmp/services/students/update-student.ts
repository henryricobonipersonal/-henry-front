import type { IStudentDTO } from '@/dtos/student-dto';
import { httpClient } from '@/services/http-client';

type IUpdateStudentDTO = Partial<Omit<IStudentDTO, 'id' | 'createdAt'>> & {
  id: string;
};

export async function update({
  id,
  name,
  phone,
  birthDate,
  document,
  identity,
  address,
  socials,
  login,
}: IUpdateStudentDTO): Promise<IStudentDTO> {
  const { data } = await httpClient.patch(`/students/${id}`, {
    name,
    phone,
    birthDate,
    document,
    identity,
    address,
    socials,
    login,
  });

  return {
    id: data.id,
    name: data.name,
    phone: data.phone,
    birthDate: data.birthDate,
    document: data.document,
    identity: data.identity,
    address: data.address,
    socials: data.socials,
    login: data.login,
    createdAt: data.createdAt,
  };
}
