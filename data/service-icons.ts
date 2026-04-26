import {
  BarChart3,
  Building2,
  Code2,
  CreditCard,
  Globe,
  Paintbrush,
  PenTool,
  Search,
  Share2,
  Shield,
  ShoppingBag,
  Store,
  SwatchBook,
} from "lucide-react";

export const SERVICE_ICON_MAP = {
  barChart3: BarChart3,
  building2: Building2,
  code2: Code2,
  creditCard: CreditCard,
  globe: Globe,
  paintbrush: Paintbrush,
  penTool: PenTool,
  search: Search,
  share2: Share2,
  shield: Shield,
  shoppingBag: ShoppingBag,
  store: Store,
  swatchBook: SwatchBook,
};

export type ServiceIconName = keyof typeof SERVICE_ICON_MAP;
