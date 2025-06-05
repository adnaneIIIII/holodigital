import Image from "next/image";
import { formatCurrency } from "@/lib/utils";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
    color?: string;
  };
}

export default function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex items-center py-2">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
        <div className="h-full w-full relative">
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            className="h-full w-full object-cover object-center"
            sizes="64px"
          />
        </div>
      </div>

      <div className="ml-4 flex-1">
        <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{item.color}</p>
      </div>

      <div className="text-right">
        <p className="text-sm font-medium text-gray-900 mb-1">
          {formatCurrency(item.price)}
        </p>
        <p className="text-sm text-gray-500">{item.quantity}x</p>
      </div>
    </div>
  );
}
