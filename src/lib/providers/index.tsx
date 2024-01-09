import ComponentProvider from "./ComponentProvider";
import TanstackProvider from "./TanstackProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TanstackProvider>
      <ComponentProvider>{children}</ComponentProvider>
    </TanstackProvider>
  );
}
