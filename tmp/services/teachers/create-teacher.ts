import type { ITeacherDTO } from '@/dtos/teacher-dto';
import { httpClient } from '@/services/http-client';

type ICreateTeacherDTO = Omit<ITeacherDTO, 'id' | 'createdAt'>;

export async function create({
  name,
  phone,
  birthDate,
  document,
  identity,
  price,
  address,
  socials,
  login,
}: ICreateTeacherDTO): Promise<ITeacherDTO> {
  const { data } = await httpClient.post('/teachers', {
    name,
    phone,
    birthDate,
    document,
    identity,
    price,
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
    price: data.price,
    address: data.address,
    socials: data.socials,
    login: data.login,
    createdAt: data.createdAt,
  };
}
