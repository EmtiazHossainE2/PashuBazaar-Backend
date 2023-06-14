export type IAddress = {
  houseNo: string;
  roadNo: string;
  location: string;
  district: string;
  emergencyContactNo: string;
};

export type IBuyer = {
  displayName: string;
  email: string;
  photoURL: string | "";
  address: IAddress[];
  phone: string | "";
};
