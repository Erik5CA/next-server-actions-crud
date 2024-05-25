import { Button } from "./ui/button";
import { removeTask } from "@/actions/task-actions";
import { Trash2 } from "lucide-react";

function ButtonDeleteTask({ taskId }: { taskId: number }) {
  return (
    <form action={removeTask}>
      <input type="hidden" name="taskId" value={taskId} />
      <Button
        variant="outline"
        className="flex gap-2 bg-red-600 hover:bg-red-400"
      >
        <Trash2 size={18} />
        <p>Delete</p>
      </Button>
    </form>
  );
}

export default ButtonDeleteTask;
