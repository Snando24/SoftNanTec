import { FileText, Boxes, Globe, Smartphone, Bot } from 'lucide-react';

const ICONS = { FileText, Boxes, Globe, Smartphone, Bot };

const ServiceIcon = ({ name, ...props }) => {
  const Icon = ICONS[name] || FileText;
  return <Icon {...props} />;
};

export default ServiceIcon;
