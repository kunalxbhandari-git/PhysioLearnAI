import { redirect } from "next/navigation";

// Middleware sends unauthenticated visitors to /gate; authenticated ones land here.
export default function RootPage() {
  redirect("/dashboard");
}
