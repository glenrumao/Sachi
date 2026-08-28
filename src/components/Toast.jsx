import { useShop } from '../context/ShopContext';
import './Toast.css';

export default function Toast() {
  const { toast } = useShop();
  if (!toast) return null;
  return (
    <div className="toast" role="status">
      {toast}
    </div>
  );
}
