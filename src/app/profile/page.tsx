import { auth } from "@/auth";

export default async function Profile() {
  const session = await auth();

  const handleCreatePost = () => {
    // Aquí puedes redirigir al usuario a la página de creación de posts
    router.push("/create-post");
  };


  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p>Nombre: {user.name}</p>
      <p>Correo electrónico: {user.email}</p>
      <p>Fecha de nacimiento: {user.dateOfBirth}</p>
      {/* Agrega más campos de información del usuario según sea necesario */}
      <button onClick={handleCreatePost}>Crear Nuevo Post</button>
    </div>
  );
}
