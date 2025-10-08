import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const sales = [
  { id: "001", date: "15/10/2024", customer: "João Silva", total: "R$ 1.250,00", status: "Concluído", payment: "Cartão" },
  { id: "002", date: "15/10/2024", customer: "Maria Santos", total: "R$ 890,00", status: "Pendente", payment: "PIX" },
  { id: "003", date: "14/10/2024", customer: "Pedro Costa", total: "R$ 2.340,00", status: "Concluído", payment: "Boleto" },
  { id: "004", date: "14/10/2024", customer: "Ana Oliveira", total: "R$ 567,00", status: "Concluído", payment: "Cartão" },
  { id: "005", date: "13/10/2024", customer: "Carlos Souza", total: "R$ 3.120,00", status: "Cancelado", payment: "PIX" },
  { id: "006", date: "13/10/2024", customer: "Lucia Ferreira", total: "R$ 780,00", status: "Concluído", payment: "Dinheiro" },
  { id: "007", date: "12/10/2024", customer: "Roberto Lima", total: "R$ 1.456,00", status: "Em processamento", payment: "Cartão" },
];

const Sales = () => {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Vendas</h1>
            <p className="text-muted-foreground mt-1">Gerencie todas as vendas do sistema</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nova Venda
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar vendas..." className="pl-9" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtros
          </Button>
        </div>

        {/* Sales Table */}
        <div className="table-container">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Pagamento</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sales.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell className="font-medium">#{sale.id}</TableCell>
                  <TableCell>{sale.date}</TableCell>
                  <TableCell>{sale.customer}</TableCell>
                  <TableCell className="font-semibold">{sale.total}</TableCell>
                  <TableCell>{sale.payment}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        sale.status === "Concluído"
                          ? "bg-success/10 text-success"
                          : sale.status === "Pendente"
                          ? "bg-warning/10 text-warning"
                          : sale.status === "Cancelado"
                          ? "bg-destructive/10 text-destructive"
                          : "bg-info/10 text-info"
                      }`}
                    >
                      {sale.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="sm">Editar</Button>
                    <Button variant="ghost" size="sm">Ver</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Sales;
