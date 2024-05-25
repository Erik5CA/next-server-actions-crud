import { TaskForm } from "@/app/new/TaskForm";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

async function TaskPageEdit({ params }: { params: { id: string } }) {
  const id = params.id;

  const task = await prisma.task.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!task) redirect("/");

  return (
    <div className="flex justify-center items-center mt-5">
      <TaskForm task={task} />
    </div>
  );
}

export default TaskPageEdit;
