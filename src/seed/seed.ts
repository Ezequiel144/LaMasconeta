import bcryptjs from "bcryptjs";

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
}

interface SeedData {
  users: SeedUser[];
}

export const initialData: SeedData = {
  users: [
    {
      email: "mauri@mauri.com",
      name: "Mauricio",
      password: bcryptjs.hashSync("123123", 10),
      role: "admin",
    },
    {
      email: "reina@reina.com",
      name: "Reina",
      password: bcryptjs.hashSync("123123", 10),
      role: "user",
    },
    {
      email: "luna@luna.com",
      name: "Luna",
      password: bcryptjs.hashSync("123123", 10),
      role: "user",
    },
  ],
};
