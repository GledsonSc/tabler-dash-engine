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

const products = [
  { id: "1", name: "Produto A", category: "Eletrônicos", price: "R$ 299,00", stock: 45, status: "Ativo" },
  { id: "2", name: "Produto B", category: "Vestuário", price: "R$ 89,00", stock: 120, status: "Ativo" },
  { id: "3", name: "Produto C", category: "Alimentos", price: "R$ 25,00", stock: 8, status: "Baixo Estoque" },
  { id: "4", name: "Produto D", category: "Livros", price: "R$ 45,00", stock: 67, status: "Ativo" },
  { id: "5", name: "Produto E", category: "Eletrônicos", price: "R$ 1.299,00", stock: 0, status: "Esgotado" },
  { id: "6", name: "Produto F", category: "Decoração", price: "R$ 159,00", stock: 34, status: "Ativo" },
];

const Products = () => {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Produtos</h1>
            <p className="text-muted-foreground mt-1">Gerencie seu catálogo de produtos</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Produto
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar produtos..." className="pl-9" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtros
          </Button>
        </div>

        {/* Products Table */}
        <div className="table-container">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Estoque</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">#{product.id}</TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className="font-semibold">{product.price}</TableCell>
                  <TableCell>{product.stock} unidades</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        product.status === "Ativo"
                          ? "bg-success/10 text-success"
                          : product.status === "Baixo Estoque"
                          ? "bg-warning/10 text-warning"
                          : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {product.status}
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

export default Products;
