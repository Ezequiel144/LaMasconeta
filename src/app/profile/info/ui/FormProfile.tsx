"use client";
import { UserProfile } from "@/interfaces";
import { useForm } from "react-hook-form";

interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  image?: string | undefined;
  phone: string;
  gender: string;
}

interface FormProfileProps {
  user: User | undefined;
}

export const FormProfile = ({ user }: FormProfileProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      ...user,
    },
  });
  if (!user) {
    return <div>Espere</div>;
  }

  return (
    <div>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};
