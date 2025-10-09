import { 
  MdDashboard,
  MdPeople,
  MdInventory,
  MdPerson,
  MdLocalOffer,
  MdAccountBalance,
  MdPersonOutline,
  MdBarChart,
  MdGroup,
  MdSettings,
  MdLock,
  MdReceipt,
  MdAttachMoney,
} from "react-icons/md";

const iconMap = {
  dashboard: MdDashboard,
  team: MdPeople,
  product: MdInventory,
  agent: MdPerson,
  promotion: MdLocalOffer,
  bank: MdAccountBalance,
  customer: MdPersonOutline,
  report: MdBarChart,
  user: MdPerson,
  users: MdGroup,
  role: MdSettings,
  permission: MdLock,
  receipt: MdReceipt,
  transactions: MdAttachMoney,
};

export default function Icon({ name, className = "w-5 h-5" }) {
  const IconComponent = iconMap[name] || iconMap.dashboard;
  return <IconComponent className={className} />;
}
