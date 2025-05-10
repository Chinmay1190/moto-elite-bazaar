
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle2, ShoppingBag } from "lucide-react";

const CheckoutSuccess = () => {
  // Generate a random order ID
  const orderId = `SB${Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")}`;

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-2xl mx-auto bg-card rounded-lg border p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-24 w-24 text-green-500" />
          </div>

          <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
          
          <p className="text-lg mb-8">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>

          <div className="bg-secondary/30 rounded-lg p-6 mb-8">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Order Number:</span>
              <span>{orderId}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Estimated Delivery:</span>
              <span>
                {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()} - {new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </span>
            </div>
          </div>

          <p className="mb-8">
            A confirmation email with order details has been sent to your registered email address.
            You can track your order status in the "My Orders" section.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/track-order">
              <Button variant="outline" className="w-full sm:w-auto">
                Track Order
              </Button>
            </Link>
            <Link to="/">
              <Button className="w-full sm:w-auto">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutSuccess;
