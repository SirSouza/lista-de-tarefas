"use client";
import { SquarePen } from "lucide-react";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Tasks } from "@/generated/prisma";
import { useState } from "react";
import { toast } from "sonner";
import { editTask } from "@/actions/editTask";

type TasksProps = {
	task: Tasks;
	handleGetTasks: () => void;
};

const EditTask = ({ task, handleGetTasks }: TasksProps) => {
	const [editedTask, setEditedTask] = useState(task.task);

	const handleEditTask = async () => {
		try {
			if (editedTask !== task.task) {
				toast.success("Tarefa editada com sucesso");
			} else {
				toast.error("Tarefa não alterada");
				return;
			}

			await editTask({
				idTask: task.id,
				newTask: editedTask,
			});
			handleGetTasks();
		} catch (error) {
			throw error;
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<span title={"Editar tarefa?"}>
					<SquarePen size={16} className="cursor-pointer" />
				</span>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Editar Tarefa</DialogTitle>
				</DialogHeader>
				<div className="flex gap-2">
					<Input
						placeholder="Editar tarefa"
						value={editedTask}
						onChange={(e) => setEditedTask(e.target.value)}
					/>
					<DialogClose asChild>
						<Button className="cursor-pointer" onClick={handleEditTask}>
							Editar
						</Button>
					</DialogClose>
				</div>
			</DialogContent>
		</Dialog>
	);
};
export default EditTask;
