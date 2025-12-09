/* FROM SHADCN */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

/* FROM LUCID UI */
import { SquarePlus } from "lucide-react";
import { List } from "lucide-react";
import { ListX } from "lucide-react";
import { ListTodo } from "lucide-react";
import { SquarePen } from "lucide-react";
import { Trash2 } from "lucide-react";
import { ListChecks } from "lucide-react";
import { SquareSigma } from "lucide-react";

const Home = () => {
	return (
		<main className="w-full h-screen bg-gray-200 flex justify-center items-center">
			{/*  */}
			<Card className="w-lg ">
				<CardHeader className="flex gap-2">
					<Input placeholder="Adicionar Tarefa"></Input>
					<Button variant="default" className="cursor-pointer">
						{" "}
						<SquarePlus /> Cadastrar
					</Button>
				</CardHeader>

				<CardContent>
					<Separator className="mb-4" />
					<div className="flex gap-2">
						<Badge className="cursor-pointer" variant="default">
							<List /> Todas
						</Badge>
						<Badge className="cursor-pointer" variant="outline">
							{" "}
							<ListX />
							Não Finalizadas
						</Badge>
						<Badge className="cursor-pointer" variant="outline">
							{" "}
							<ListTodo /> Concluidas
						</Badge>
					</div>

					<div className="mt-4 border-b">
						<div className="h-14 flex justify-between items-center  border-t">
							<div className="w-1 h-full bg-green-300"></div>
							<p className="flex-1 px-2 text-sm">Estudar React e JS</p>
							<div className="flex gap-2">
								<Dialog>
									<DialogTrigger asChild>
										<SquarePen size={17} className="cursor-pointer" />
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Editar tarefa</DialogTitle>
										</DialogHeader>
										<div className="flex gap-2">
											<Input placeholder="Editar tarefa" />
											<Button className="cursor-pointer">Editar</Button>
										</div>
									</DialogContent>
								</Dialog>
								<Trash2 size={17} className="cursor-pointer" />
							</div>
						</div>
					</div>

					<div className="flex  justify-between mt-4">
						<div className="flex items-center">
							<ListChecks size={16} />
							<p className="text-xs">Tarefas concluidas (3/3)</p>
						</div>
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button
									className="cursor-pointer text-xs h-7"
									variant={"outline"}
								>
									<Trash2 size={17} className="cursor-pointer" />
									Limpar tarefas concluidas
								</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>
										Tem certeza que deseja excluir X itens
									</AlertDialogTitle>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogAction>Sim</AlertDialogAction>
									<AlertDialogCancel>Cancelar</AlertDialogCancel>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</div>

					<div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
						<div
							className="h-full  bg-blue-500 rounded-md"
							style={{ width: "50%" }}
						></div>
					</div>
					<div className="flex justify-end items-center mt-2 gap-2">
						<SquareSigma size={17} />
						<p className="text-xs">3 tarefas no total</p>
					</div>
				</CardContent>
			</Card>
		</main>
	);
};
export default Home;
