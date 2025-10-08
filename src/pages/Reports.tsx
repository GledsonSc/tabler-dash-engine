import { Layout } from "@/components/layout/Layout";
import { StatCard } from "@/components/dashboard/StatCard";
import { FileText, TrendingUp, Users, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reports = () => {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Relatórios</h1>
          <p className="text-muted-foreground mt-1">Análises e estatísticas do sistema</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            title="Total de Vendas"
            value="1.234"
            icon={TrendingUp}
            trend={{ value: "+12.5%", isPositive: true }}
            color="primary"
          />
          <StatCard
            title="Clientes Ativos"
            value="856"
            icon={Users}
            trend={{ value: "+8.2%", isPositive: true }}
            color="success"
          />
          <StatCard
            title="Produtos Vendidos"
            value="3.421"
            icon={Package}
            trend={{ value: "+15.3%", isPositive: true }}
            color="info"
          />
          <StatCard
            title="Relatórios Gerados"
            value="89"
            icon={FileText}
            color="warning"
          />
        </div>

        {/* Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="stat-card hover:scale-105 transition-transform cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Relatório de Vendas</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Análise completa das vendas por período
                </p>
                <Button variant="outline" size="sm">Gerar Relatório</Button>
              </div>
            </div>
          </div>

          <div className="stat-card hover:scale-105 transition-transform cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-success" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Relatório de Clientes</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Perfil e comportamento dos clientes
                </p>
                <Button variant="outline" size="sm">Gerar Relatório</Button>
              </div>
            </div>
          </div>

          <div className="stat-card hover:scale-105 transition-transform cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-info/10 flex items-center justify-center flex-shrink-0">
                <Package className="h-6 w-6 text-info" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Relatório de Estoque</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Movimentação e status dos produtos
                </p>
                <Button variant="outline" size="sm">Gerar Relatório</Button>
              </div>
            </div>
          </div>

          <div className="stat-card hover:scale-105 transition-transform cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-warning" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Relatório Financeiro</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Fluxo de caixa e lucratividade
                </p>
                <Button variant="outline" size="sm">Gerar Relatório</Button>
              </div>
            </div>
          </div>

          <div className="stat-card hover:scale-105 transition-transform cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Relatório de Performance</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  KPIs e métricas de desempenho
                </p>
                <Button variant="outline" size="sm">Gerar Relatório</Button>
              </div>
            </div>
          </div>

          <div className="stat-card hover:scale-105 transition-transform cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-success" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Relatório Personalizado</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Crie relatórios sob medida
                </p>
                <Button variant="outline" size="sm">Criar Novo</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
