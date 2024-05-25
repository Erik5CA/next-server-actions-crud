import Link from "next/link";
import { ModeToggle } from "./theme-toggle-button";
import { buttonVariants } from "./ui/button";
import { Plus } from "lucide-react";

function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between py-6 bg-black">
      <Link href="/">
        <h1 className="text-3xl font-bold ">NextActionsCRUD</h1>
      </Link>
      <div className="flex gap-x-2 items-center">
        <Link
          href="/new"
          className={`flex gap-2 ${buttonVariants({ variant: "secondary" })}`}
        >
          Create Task
          <Plus />
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
