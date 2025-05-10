
import { useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Package2, Truck, Navigation } from "lucide-react";

// Mock order statuses and their corresponding steps
const ORDER_STATUSES = {
  "processing": 1,
  "shipped": 2,
  "out_for_delivery": 3,
  "delivered": 4
};

// Mock order data - in a real app, this would come from a database
const mockOrders = {
  "SB123456": {
    id: "SB123456",
    date: "2025-05-05",
    status: "shipped",
    items: [
      { id: 1, name: "Royal Enfield Continental GT 650", quantity: 1, price: 310000 }
    ],
    estimatedDelivery: "2025-05-12",
    shippingAddress: "123 Main St, Mumbai, Maharashtra, 400001",
    trackingNumber: "IND827364519",
    total: 310000
  },
  "SB654321": {
    id: "SB654321",
    date: "2025-05-08",
    status: "processing",
    items: [
      { id: 6, name: "KTM 390 Duke", quantity: 1, price: 290000 },
      { id: 9, name: "Yamaha YZF R15", quantity: 1, price: 165000 }
    ],
    estimatedDelivery: "2025-05-15",
    shippingAddress: "456 Park Ave, Delhi, 110001",
    trackingNumber: "IND927483651",
    total: 455000
  }
};

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderId.trim()) {
      toast.error("Please enter an order number");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      const foundOrder = mockOrders[orderId as keyof typeof mockOrders];
      
      if (foundOrder) {
        setOrder(foundOrder);
        toast.success("Order found!");
      } else {
        toast.error("Order not found. Please check your order number and try again.");
        setOrder(null);
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Enter Order Details</CardTitle>
                <CardDescription>
                  Enter your order number to track its current status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTrack} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="orderId" className="text-sm font-medium leading-none">
                      Order Number
                    </label>
                    <Input
                      id="orderId"
                      placeholder="e.g. SB123456"
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Searching..." : "Track Order"}
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    For demo purposes, try: SB123456 or SB654321
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            {order ? (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Order #{order.id}</CardTitle>
                      <CardDescription>
                        Placed on {new Date(order.date).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {order.status.replace("_", " ")}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Order Status Tracker */}
                  <div className="space-y-3">
                    <h3 className="font-semibold">Tracking Status</h3>
                    
                    <div className="relative">
                      <div className="flex justify-between mb-2">
                        <div className="text-xs">Processing</div>
                        <div className="text-xs">Shipped</div>
                        <div className="text-xs">Out for Delivery</div>
                        <div className="text-xs">Delivered</div>
                      </div>
                      
                      <div className="h-2 bg-muted rounded-full">
                        <div 
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ 
                            width: `${(ORDER_STATUSES[order.status as keyof typeof ORDER_STATUSES] / 4) * 100}%` 
                          }}
                        ></div>
                      </div>
                      
                      <div className="flex justify-between mt-2">
                        <Package2 className={`h-5 w-5 ${ORDER_STATUSES[order.status as keyof typeof ORDER_STATUSES] >= 1 ? 'text-primary' : 'text-muted-foreground'}`} />
                        <Truck className={`h-5 w-5 ${ORDER_STATUSES[order.status as keyof typeof ORDER_STATUSES] >= 2 ? 'text-primary' : 'text-muted-foreground'}`} />
                        <Truck className={`h-5 w-5 ${ORDER_STATUSES[order.status as keyof typeof ORDER_STATUSES] >= 3 ? 'text-primary' : 'text-muted-foreground'}`} />
                        <Navigation className={`h-5 w-5 ${ORDER_STATUSES[order.status as keyof typeof ORDER_STATUSES] >= 4 ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Shipping Address</h3>
                      <p className="text-muted-foreground">{order.shippingAddress}</p>
                      
                      <h3 className="font-semibold mt-4 mb-2">Estimated Delivery</h3>
                      <p className="text-muted-foreground">
                        {new Date(order.estimatedDelivery).toLocaleDateString()}
                      </p>
                      
                      <h3 className="font-semibold mt-4 mb-2">Tracking Number</h3>
                      <p className="text-muted-foreground">{order.trackingNumber}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Order Summary</h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[50%]">Product</TableHead>
                            <TableHead>Qty</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {order.items.map((item: any) => (
                            <TableRow key={item.id}>
                              <TableCell className="font-medium">{item.name}</TableCell>
                              <TableCell>{item.quantity}</TableCell>
                              <TableCell className="text-right">₹{item.price.toLocaleString()}</TableCell>
                            </TableRow>
                          ))}
                          <TableRow>
                            <TableCell colSpan={2} className="font-bold">Total</TableCell>
                            <TableCell className="text-right font-bold">₹{order.total.toLocaleString()}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="h-full flex items-center justify-center p-12 bg-card border rounded-lg">
                <div className="text-center">
                  <Package2 className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Order Selected</h3>
                  <p className="text-muted-foreground">
                    Enter your order number to track your shipment
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrackOrder;
