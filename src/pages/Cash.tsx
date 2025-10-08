import { Layout } from "@/components/layout/Layout";
import { StatCard } from "@/components/dashboard/StatCard";
import { DollarSign, TrendingUp, TrendingDown, Calendar } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  { id: "1", date: "15/10/2024 14:30", type: "Entrada", description: "Venda #001", value: "R$ 1.250,00" },
  { id: "2", date: "15/10/2024 11:20", type: "Saída", description: "Fornecedor ABC", value: "R$ 890,00" },
  { id: "3", date: "14/10/2024 16:45", type: "Entrada", description: "Venda #002", value: "R$ 2.340,00" },
  { id: "4", date: "14/10/2024 10:15", type: "Entrada", description: "Venda #003", value: "R$ 567,00" },
  { id: "5", date: "13/10/2024 15:30", type: "Saída", description: "Aluguel", value: "R$ 3.500,00" },
  { id: "6", date: "13/10/2024 09:00", type: "Entrada", description: "Venda #004", value: "R$ 780,00" },
];

const Cash = () => {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Caixa</h1>
          <p className="text-muted-foreground mt-1">Acompanhe o fluxo de caixa</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            title="Saldo Atual"
            value="R$ 12.458"
            icon={DollarSign}
            color="primary"
          />
          <StatCard
            title="Entradas do Mês"
            value="R$ 45.231"
            icon={TrendingUp}
            trend={{ value: "+20.1%", isPositive: true }}
            color="success"
          />
          <StatCard
            title="Saídas do Mês"
            value="R$ 32.773"
            icon={TrendingDown}
            trend={{ value: "-5.2%", isPositive: true }}
            color="destructive"
          />
          <StatCard
            title="Média Diária"
            value="R$ 1.508"
            icon={Calendar}
            color="info"
          />
        </div>

        {/* Transactions Table */}
        <div className="table-container">
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Movimentações Recentes</h2>
            <p className="text-sm text-muted-foreground mt-1">Últimas transações registradas</p>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Data/Hora</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead className="text-right">Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">#{transaction.id}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        transaction.type === "Entrada"
                          ? "bg-success/10 text-success"
                          : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {transaction.type}
                    </span>
                  </TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell className={`text-right font-semibold ${
                    transaction.type === "Entrada" ? "text-success" : "text-destructive"
                  }`}>
                    {transaction.type === "Entrada" ? "+" : "-"} {transaction.value}
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

export default Cash;
