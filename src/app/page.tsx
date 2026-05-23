import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { MockUser } from "@/lib/data";
import TopBar from "@/components/TopBar";
import SchedulingTabs from "@/components/SchedulingTabs";

export default async function Home() {
  const store = await cookies();
  const auth = store.get("sisvagasAuth");

  if (!auth) redirect("/login");

  const user = JSON.parse(auth.value) as MockUser;

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopBar user={user} />
      <main className="flex-1 overflow-hidden flex flex-col">
        <SchedulingTabs />
      </main>
    </div>
  );
}
