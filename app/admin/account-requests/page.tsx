import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import UserRoleCard from "@/components/admin/UserRoleCard";

const Page = () => {
  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Demande d'ouverture de compte</h2>
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <p>Table</p>
      </div>

      <div>
        <UserRoleCard />
      </div>
    </section>
  );
};

export default Page;
