import OrderPollingView from "./OrderPollingView";

async function getInitialOrder(id: string) {
  const res = await fetch(`http://localhost:3000/api/orders/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

interface OrderPageProps {
  params: Promise<{ id: string }>;
}

export default async function OrderPage({ params }: OrderPageProps) {
  const { id } = await params;
  const initialData = await getInitialOrder(id);

  return <OrderPollingView orderId={id} initialData={initialData} />;
}