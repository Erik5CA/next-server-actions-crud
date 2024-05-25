import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Task } from "@prisma/client";
import clsx from "clsx";
import ButtonDeleteTask from "./ButtonDeleteTask";
import Link from "next/link";
import { Pencil } from "lucide-react";
function TaskCard({ task }: { task: Task }) {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>{task.name}</CardTitle>
        <Badge
          variant="outline"
          className={clsx({
            "bg-red-600/20 text-red-600 border-red-600":
              task.priority === "urgent",
            "bg-orange-600/20 text-orange-600 border-orange-600":
              task.priority === "high",
            "bg-yellow-600/20 text-yellow-600 border-yellow-600":
              task.priority === "medium",
            "bg-green-600/20 text-green-600 border-green-600":
              task.priority === "low",
          })}
        >
          {task.priority}
        </Badge>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
        <span className="text-slate-500">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </CardContent>
      <CardFooter className="flex gap-x-2 justify-end">
        <ButtonDeleteTask taskId={task.id} />
        <Link
          href={`/tasks/${task.id}/edit`}
          className={`flex gap-2 ${buttonVariants({
            variant: "outline",
          })} bg-blue-600 hover:bg-blue-800`}
        >
          <Pencil size={18} />
          <p>Edit</p>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
