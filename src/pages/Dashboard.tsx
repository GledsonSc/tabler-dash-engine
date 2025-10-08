import { Layout } from "@/components/layout/Layout";
import { StatCard } from "@/components/dashboard/StatCard";
import { ShoppingCart, Users, Package, DollarSign, TrendingUp, Activity } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const recentSales = [
  { id: "1", customer: "João Silva", product: "Produto A", value: "R$ 250,00", status: "Concluído" },
  { id: "2", customer: "Maria Santos", product: "Produto B", value: "R$ 180,00", status: "Pendente" },
  { id: "3", customer: "Pedro Costa", product: "Produto C", value: "R$ 320,00", status: "Concluído" },
  { id: "4", customer: "Ana Oliveira", product: "Produto D", value: "R$ 95,00", status: "Concluído" },
  { id: "5", customer: "Carlos Souza", product: "Produto E", value: "R$ 410,00", status: "Em processamento" },
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Bem-vindo ao seu painel administrativo</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Vendas Totais"
            value="R$ 45.231"
            icon={ShoppingCart}
            trend={{ value: "+20.1% este mês", isPositive: true }}
            color="primary"
          />
          <StatCard
            title="Clientes"
            value="2.350"
            icon={Users}
            trend={{ value: "+15% este mês", isPositive: true }}
            color="success"
          />
          <StatCard
            title="Produtos"
            value="856"
            icon={Package}
            trend={{ value: "+5 novos", isPositive: true }}
            color="info"
          />
          <StatCard
            title="Caixa Atual"
            value="R$ 12.458"
            icon={DollarSign}
            trend={{ value: "+8.2% hoje", isPositive: true }}
            color="warning"
          />
        </div>

        {/* Recent Sales Table */}
        <div className="table-container">
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Vendas Recentes</h2>
            <p className="text-sm text-muted-foreground mt-1">Últimas transações realizadas</p>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Produto</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentSales.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell className="font-medium">#{sale.id}</TableCell>
                  <TableCell>{sale.customer}</TableCell>
                  <TableCell>{sale.product}</TableCell>
                  <TableCell className="font-semibold">{sale.value}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        sale.status === "Concluído"
                          ? "bg-success/10 text-success"
                          : sale.status === "Pendente"
                          ? "bg-warning/10 text-warning"
                          : "bg-info/10 text-info"
                      }`}
                    >
                      {sale.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Ver detalhes
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="stat-card text-center cursor-pointer hover:scale-105 transition-transform">
            <TrendingUp className="h-8 w-8 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold text-foreground mb-1">Nova Venda</h3>
            <p className="text-sm text-muted-foreground">Registrar nova transação</p>
          </div>
          <div className="stat-card text-center cursor-pointer hover:scale-105 transition-transform">
            <Users className="h-8 w-8 mx-auto mb-3 text-success" />
            <h3 className="font-semibold text-foreground mb-1">Novo Cliente</h3>
            <p className="text-sm text-muted-foreground">Cadastrar cliente</p>
          </div>
          <div className="stat-card text-center cursor-pointer hover:scale-105 transition-transform">
            <Activity className="h-8 w-8 mx-auto mb-3 text-info" />
            <h3 className="font-semibold text-foreground mb-1">Relatórios</h3>
            <p className="text-sm text-muted-foreground">Ver análises detalhadas</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
