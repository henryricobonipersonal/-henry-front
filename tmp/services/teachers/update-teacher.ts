import type { ITeacherDTO } from '@/dtos/teacher-dto';
import { httpClient } from '@/services/http-client';

type IUpdateTeacherDTO = Partial<Omit<ITeacherDTO, 'id' | 'createdAt'>> & {
  id: string;
};

export async function update({
  id,
  name,
  phone,
  birthDate,
  document,
  identity,
  price,
  address,
  socials,
  login,
}: IUpdateTeacherDTO): Promise<ITeacherDTO> {
  const { data } = await httpClient.patch(`/teachers/${id}`, {
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
