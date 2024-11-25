import { ToastProvider } from "@/components/ui/toast";

export function AppToastProvider({ children }: { children: React.ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
