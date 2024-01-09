export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 text-center">
      <h1 className="text-6xl font-bold">Oops...</h1>
      <h2 className="mb-4 text-xl">Something went wrong when fetching data</h2>
      <p className="text-lg">Error: {message}</p>
    </div>
  );
};
