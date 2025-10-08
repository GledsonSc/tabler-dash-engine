import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  Package, 
  Wallet, 
  FileText,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Vendas", path: "/vendas", icon: ShoppingCart },
  { name: "Clientes", path: "/clientes", icon: Users },
  { name: "Produtos", path: "/produtos", icon: Package },
  { name: "Caixa", path: "/caixa", icon: Wallet },
  { name: "Relatórios", path: "/relatorios", icon: FileText },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={`bg-sidebar border-r border-sidebar-border h-screen fixed left-0 top-0 transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
          {!collapsed && (
            <h1 className="text-lg font-semibold text-sidebar-foreground">
              Sistema Admin
            </h1>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded hover:bg-sidebar-hover transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="h-5 w-5 text-sidebar-foreground" />
            ) : (
              <ChevronLeft className="h-5 w-5 text-sidebar-foreground" />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-hover"
                }`
              }
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span className="text-sm font-medium">{item.name}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        {!collapsed && (
          <div className="px-4 py-3 border-t border-sidebar-border">
            <p className="text-xs text-muted-foreground">
              Versão 1.0.0
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};
