export interface ITeacherDTO {
  id: string;
  name: string;
  phone: string;
  birthDate: string;
  document: string;
  identity: string;
  price: number;
  address: {
    zipCode: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: number;
    complement?: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    other?: string;
  };
  login: {
    email: string;
    password?: string;
  };
  createdAt: string;
}
