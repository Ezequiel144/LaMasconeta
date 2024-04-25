import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      lastName: string;
      email: string;
      image?: string;
      phone: string;
      gender: string;
    } & DefaultSession["user"];
  }
}
