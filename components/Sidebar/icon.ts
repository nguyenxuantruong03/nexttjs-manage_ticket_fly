import {
  Accessibility,
  Armchair,
  BadgeCheck,
  Bath,
  Bed,
  BedDouble,
  Bell,
  Blocks,
  BookA,
  BookOpen,
  Building,
  Building2,
  Bus,
  CarTaxiFront,
  ChartPie,
  CircleDollarSign,
  ClipboardCheck,
  Clock,
  ClockArrowDown,
  DoorOpen,
  Eye,
  FileText,
  Folder,
  Gift,
  Hotel,
  Image,
  LayoutGrid,
  Leaf,
  MapPinHouseIcon,
  MapPinned,
  Mountain,
  Network,
  Plane,
  PlaneLanding,
  Receipt,
  Search,
  Shield,
  ShieldCheck,
  Ship,
  Sofa,
  Soup,
  Star,
  Tag,
  User,
  UserCog,
  Users,
  Utensils,
  UtensilsCrossed,
} from "lucide-react";

export const SIDEBARCONTENTICONS = {
  user: User,
  plane: Plane,
  bus: Bus,
  car_taxi_front: CarTaxiFront,
  hotel: Hotel,
  yacht: Ship,
  plane_landing: PlaneLanding,
  chart_pie: ChartPie,
  user_cog: UserCog,
  circle_dollar_sign: CircleDollarSign,

  building_2: Building2,
  building: Building,

  map_pin_house: MapPinHouseIcon,
  map_pinned: MapPinned,

  search: Search,
  clock: Clock,
  book_a: BookA,

  // =====================
  // HOTEL
  // =====================

  badge_check: BadgeCheck,

  star: Star,

  leaf: Leaf,

  bed: Bed,
  bed_double: BedDouble,

  door_open: DoorOpen,

  bath: Bath,

  mountain: Mountain,

  image: Image,

  layout_grid: LayoutGrid,

  accessibility: Accessibility,

  utensils: Utensils,

  utensils_crossed: UtensilsCrossed,

  soup: Soup,

  bell: Bell,

  gift: Gift,

  file_text: FileText,

  receipt: Receipt,

  shield_check: ShieldCheck,
  folder: Folder,
  blocks: Blocks,
  shield: Shield,
  armchair: Armchair,
  ship: Ship,
  clipboard_check: ClipboardCheck,
  users: Users,
  sofa: Sofa,
  clock_alert: ClockArrowDown,
  network: Network,
  book_open: BookOpen,
  tags: Tag,
} as const;
