"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import EditTask from "@/components/Edit-task";
import {
	SquarePlus,
	Trash,
	ListChecks,
	SquareSigma,
	LoaderCircle,
} from "lucide-react";
import { getTasks } from "@/actions/get-task-from-db";
import { useEffect, useState } from "react";
import { Tasks } from "@/generated/prisma";
import { NewTask } from "@/actions/add-task";
import { deleteTask } from "@/actions/deleteTask";
import { toast } from "sonner";
import { updateTaskStatus } from "@/actions/toggle-done";
import Filter from "@/components/filter";
import { FilterType } from "@/components/filter";
import { deletedCompletedTasks } from "@/actions/clearCompletedTasks";
import { ModeToggle } from "@/components/ModeToggle";

const Home = () => {
	const [taskList, setTaskList] = useState<Tasks[]>([]);
	const [task, setTask] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [currentFilter, setCurrentFilter] = useState<FilterType>("all");
	const [filteredTasks, setFilteredTasks] = useState<Tasks[]>([]);
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleAddtask();
		}
	};

	const handleGetTasks = async () => {
		try {
			const tasks = await getTasks();

			if (!tasks) return;
			setTaskList(tasks);
		} catch (error) {
			throw error;
		}
	};

	const handleAddtask = async () => {
		setLoading(true);
		try {
			if (task.length === 0 || !task) {
				toast.error("Insira uma Tarefa");
				setLoading(false);
				return;
			}

			const myNewTask = await NewTask(task);
			if (!myNewTask) return;

			setTask("");
			toast.success("Tarefa adicionada com sucesso");
			await handleGetTasks();
		} catch (error) {
			throw error;
		}
		setLoading(false);
	};

	const handleDeleteTask = async (id: string) => {
		try {
			if (!id) return;
			const deletedTaks = await deleteTask(id);
			if (!deletedTaks) return;
			await handleGetTasks();
			toast.warning("Tarefa deletada com sucesso");
		} catch (error) {
			throw error;
		}
	};

	const handleToggleTask = async (taskId: string) => {
		const prevousTaks = [...taskList];
		try {
			setTaskList((prev) => {
				const updatedTaskList = prev.map((task) => {
					if (task.id === taskId) {
						return {
							...task,
							done: !task.done,
						};
					} else {
						return task;
					}
				});

				return updatedTaskList;
			});
			await updateTaskStatus(taskId);
		} catch (error) {
			setTaskList(prevousTaks);
			throw error;
		}
	};

	const clearCompletedTasks = async () => {
		const deletedTasks = await deletedCompletedTasks();

		if (!deletedTasks) return;
		setTaskList(deletedTasks);
	};

	useEffect(() => {
		handleGetTasks();
	}, []);

	useEffect(() => {
		switch (currentFilter) {
			case "all":
				setFilteredTasks(taskList);
				break;
			case "pending":
				const pendingTaks = taskList.filter((task) => !task.done);
				setFilteredTasks(pendingTaks);
				break;
			case "completed":
				const conplededTasks = taskList.filter((task) => task.done);
				setFilteredTasks(conplededTasks);
		}
	}, [currentFilter, taskList]);

	return (
		<main
			className="w-full h-screen flex justify-center items-center"
			id="container"
		>
			<Card className="w-lg ">
				<CardHeader className="flex gap-2">
					<Input
						placeholder="Adicionar tarefa"
						onChange={(e) => setTask(e.target.value)}
						value={task}
						onKeyDown={handleKeyDown}
					></Input>
					<Button
						variant="default"
						className="cursor-pointer"
						onClick={handleAddtask}
					>
						{loading ? <LoaderCircle className="animate-spin" /> : <SquarePlus />}
						Cadastrar
					</Button>
				</CardHeader>
				<CardContent>
					<Separator className="mb-4" />
					<Filter
						currentFilter={currentFilter}
						setCurrentFilter={setCurrentFilter}
					/>

					<div className="mt-4 border-b">
						{taskList.length === 0 && (
							<p className="text-center text-gray-500 py-2">
								Nenhuma tarefa cadastrada.
							</p>
						)}
						{/* Task container  start*/}
						{filteredTasks.map((task) => (
							<div
								className=" h-14 flex justify-between items-center border-t"
								key={task.id}
							>
								<div
									className={`${
										task.done ? "w-1 h-full bg-green-300" : "w-1 h-full bg-red-400"
									}`}
								></div>
								<p
									className={`flex-1 px-2 text-sm cursor-pointer hover:text-gray-500 ${
										task.done ? "line-through text-gray-600" : ""
									}`}
									onClick={() => handleToggleTask(task.id)}
								>
									{task.task}
								</p>
								<div className="flex items-center gap-2">
									<EditTask task={task} handleGetTasks={handleGetTasks} />
									<span title="Deletar tarefa?">
										<Trash
											size={16}
											className="cursor-pointer"
											onClick={() => handleDeleteTask(task.id)}
										/>
									</span>
								</div>
							</div>
						))}
						{/* Task container  end*/}
					</div>

					<div className="flex justify-between mt-4">
						<div className="flex gap-1 items-center">
							<ListChecks size={16} />
							<p className="text-xs">
								Tarefas concluídas ({taskList.filter((task) => task.done).length}/
								{taskList.length})
							</p>
						</div>

						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button className="text-xs h-7 cursor-pointer" variant={"outline"}>
									<Trash size={16} />
									Limpar Tarefas concluídas
								</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>
										Tem certeza que deseja excluir x itens?
									</AlertDialogTitle>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel
										className="cursor-pointer"
										onClick={clearCompletedTasks}
									>
										Sim
									</AlertDialogCancel>
									<AlertDialogAction className="cursor-pointer">
										Cancelar
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</div>
					<div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
						<div
							className="h-full  bg-blue-500 rounded-md"
							style={{
								width: `${
									(taskList.filter((task) => task.done).length / taskList.length) * 100
								}%`,
							}}
						></div>
					</div>
					<div className=" flex justify-between py-2 mt-2">
						<div>
							<ModeToggle></ModeToggle>
						</div>
						<div className="flex justify-end items-center mt-2 gap-2">
							<SquareSigma size={16} />
							<p className="text-xs">{taskList.length} tarefas no total</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</main>
	);
};

export default Home;
