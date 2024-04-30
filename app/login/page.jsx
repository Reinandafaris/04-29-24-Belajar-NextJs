export default function LoginPage() {
  return (
    <form
      action=""
      className="flex min-h-screen justify-center items-center bg-yellow-300 flex-col gap-4"
    >
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}
