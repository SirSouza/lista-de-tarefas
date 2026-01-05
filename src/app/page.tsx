/* Imports from Shadcn */
import { Badge } from "@/components/ui/badge";
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
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

/* Imports from Lucid */
import {
	SquarePlus,
	List,
	OctagonAlert,
	BadgeCheck,
	SquarePen,
	Trash,
	ListChecks,
	SquareSigma,
} from "lucide-react";

const Home = () => {
	return (
		<main
			className="w-full h-screen flex justify-center items-center"
			id="container"
		>
			<Card className="w-lg ">
				<CardHeader className="flex gap-2">
					<Input placeholder="Adicionar tarefa"></Input>
					<Button variant="default" className="cursor-pointer">
						<SquarePlus /> Cadastrar
					</Button>
				</CardHeader>

				<CardContent>
					<Separator className="mb-4" />
					<div className="flex gap-2">
						<Badge className="cursor-pointer" variant={"default"}>
							<List /> Todas
						</Badge>
						<Badge className="cursor-pointer" variant={"outline"}>
							<OctagonAlert />
							Não Finalizadas
						</Badge>
						<Badge className="cursor-pointer" variant={"outline"}>
							<BadgeCheck />
							Concluidas
						</Badge>
					</div>

					<div className="mt-4 border-b">
						{/* Task container  start*/}
						<div className=" h-14 flex justify-between items-center border-t">
							<div className="w-1 h-full bg-green-300"></div>
							<p className="flex-1 px-2 text-sm">Estudar React</p>
							<div className="flex items-center gap-2">
								<Dialog>
									<DialogTrigger asChild>
										<SquarePen size={16} className="cursor-pointer" />
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Editar Tarefa</DialogTitle>
										</DialogHeader>
										<div className="flex gap-2">
											<Input placeholder="Editar tarefa"></Input>
											<Button className="cursor-pointer">Editar</Button>
										</div>
									</DialogContent>
								</Dialog>
								<Trash size={16} className="cursor-pointer" />
							</div>
						</div>
						{/* Task container  start*/}
					</div>

					<div className="flex justify-between mt-4">
						<div className="flex gap-1 items-center">
							<ListChecks size={16} />
							<p className="text-xs">Tarefas concluídas (3/3)</p>
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
									<AlertDialogCancel>Sim</AlertDialogCancel>
									<AlertDialogAction>Cancelar</AlertDialogAction>
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
						<SquareSigma size={16} />
						<p className="text-xs">3 tarefas no total</p>
					</div>
				</CardContent>
			</Card>
		</main>
	);
};

export default Home;
