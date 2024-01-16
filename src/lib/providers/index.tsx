import AuthProvider from "./AuthProvider";
import ComponentProvider from "./ComponentProvider";
import TanstackProvider from "./TanstackProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <TanstackProvider>
        <ComponentProvider>{children}</ComponentProvider>
      </TanstackProvider>
    </AuthProvider>
  );
}
