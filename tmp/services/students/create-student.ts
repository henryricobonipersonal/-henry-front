import type { IStudentDTO } from '@/dtos/student-dto';
import { httpClient } from '@/services/http-client';

type ICreateStudentDTO = Omit<IStudentDTO, 'id' | 'createdAt'>;

export async function create({
  name,
  phone,
  birthDate,
  document,
  identity,
  address,
  socials,
  login,
}: ICreateStudentDTO): Promise<IStudentDTO> {
  const { data } = await httpClient.post('/students', {
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
