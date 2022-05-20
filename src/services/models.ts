export type Address = {
  number: string;
  street: string;
  zip: string;
  city: string;
  country: string;
}

export type BusinessType = {
  id: string;
  name: string;
  description: string;
  phone: string;
  image: string;
  email: string;
  address: Address;
};
