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

const customers = [
  { id: "1", name: "João Silva", email: "joao@email.com", phone: "(11) 99999-9999", city: "São Paulo", purchases: 12 },
  { id: "2", name: "Maria Santos", email: "maria@email.com", phone: "(21) 98888-8888", city: "Rio de Janeiro", purchases: 8 },
  { id: "3", name: "Pedro Costa", email: "pedro@email.com", phone: "(31) 97777-7777", city: "Belo Horizonte", purchases: 15 },
  { id: "4", name: "Ana Oliveira", email: "ana@email.com", phone: "(41) 96666-6666", city: "Curitiba", purchases: 5 },
  { id: "5", name: "Carlos Souza", email: "carlos@email.com", phone: "(51) 95555-5555", city: "Porto Alegre", purchases: 20 },
  { id: "6", name: "Lucia Ferreira", email: "lucia@email.com", phone: "(61) 94444-4444", city: "Brasília", purchases: 3 },
];

const Customers = () => {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Clientes</h1>
            <p className="text-muted-foreground mt-1">Gerencie sua base de clientes</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Cliente
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar clientes..." className="pl-9" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtros
          </Button>
        </div>

        {/* Customers Table */}
        <div className="table-container">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Cidade</TableHead>
                <TableHead>Compras</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">#{customer.id}</TableCell>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.city}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {customer.purchases} compras
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

export default Customers;
