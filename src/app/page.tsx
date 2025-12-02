/* Components Imports */
/* FROM SHADCN */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
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

/* FROM LUCID */
import {
	Plus,
	List,
	ListChecks,
	BadgeAlert,
	ListTodo,
	SquarePen,
	Trash,
	Sigma,
} from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

const Home = () => {
	return (
		<main className="w-full h-screen bg-gray-600 flex justify-center items-center">
			{/* Card */}
			<Card className="w-lg ">
				<CardHeader className="flex gap-2">
					<Input placeholder="Adicionar Tarefa"></Input>

					<Button variant="outline" className="cursor-pointer">
						<Plus /> Cadastrar
					</Button>
				</CardHeader>

				<CardContent>
					<Separator className="mb-4 bg-gray-200 h-0.5 rad rounded-xs" />

					{/* badges / filters container  */}
					<div className="flex gap-2">
						<Badge className="cursor-pointer" variant={"default"}>
							<List />
							Todas
						</Badge>
						<Badge className="cursor-pointer" variant={"outline"}>
							<BadgeAlert />
							Não Finalizadas
						</Badge>
						<Badge className="cursor-pointer" variant={"outline"}>
							<ListTodo />
							Concluidas
						</Badge>
					</div>

					{/* Task */}
					<div className=" mt-4 border-b">
						<div className="h-14 flex justify-between items-center border-b border-t">
							<div className="w-1 h-full bg-green-300"></div>
							<p className="flex-1 px-1 text-sm">Estudar React</p>
							<div className="flex items-center gap-2">
								<Dialog>
									<DialogTrigger asChild>
										<SquarePen size={18} className="cursor-pointer" />
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Editar tarefa</DialogTitle>
										</DialogHeader>

										<div className="flex gap-2">
											<Input placeholder="Editar"></Input>
											<Button className="cursor-poiter">Editar</Button>
										</div>
									</DialogContent>
								</Dialog>
								<Trash size={18} className="cursor-pointer" />
							</div>
						</div>
					</div>

					{/* Footer card*/}
					<div className="flex justify-between mt-4">
						<div className="flex items-center gap-1">
							<ListChecks size={18} />
							<p className="text-xs">Tarefas Concluidas (3/3)</p>
						</div>
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button
									className="text-xs h-8 cursor-pointer"
									variant={"outline"}
								>
									<Trash size={18} className="cursor-pointer" /> Limpar tarefas
									concluidas
								</Button>
							</AlertDialogTrigger>

							<AlertDialogContent>
								<AlertDialogTitle>
									Tem certeza que dejesa exluir X itens?
								</AlertDialogTitle>
								<AlertDialogFooter>
									<AlertDialogAction>Sim</AlertDialogAction>
									<AlertDialogCancel>Cancelar</AlertDialogCancel>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</div>

					{/* Progress Bar  */}
					<div className="h-2 w-full bg-gray-100 rounded-md mt-2">
						<div
							className="h-full bg-blue-500 rounded-md"
							style={{ width: "50%" }}
						></div>
					</div>
					<div></div>

					<div className="flex justify-end items-center mt-2">
						<Sigma size={18} />
						<p className="text-xs">3 Tarefas no total</p>
					</div>
				</CardContent>
			</Card>
		</main>
	);
};

export default Home;

/* Tempo do video 1:29:20 */
