import TaskCard from "@/components/TaskCard";
import prisma from "@/lib/prisma";

async function HomePagem() {
  const tasks = await prisma.task.findMany();
  // console.log(tasks);

  return (
    <div className="container mt-3">
      <h1 className="text-3xl font-bold">Your Tasks</h1>
      <div className="grid grid-cols-3 gap-4 mt-3">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}

export default HomePagem;
