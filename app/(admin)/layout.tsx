import { AuthGuard } from "@/shared/providers/authProvider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthGuard>{children}</AuthGuard>;
}
