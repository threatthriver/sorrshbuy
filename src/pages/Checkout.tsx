import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { Lock, Check, ArrowLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { cn } from '@/lib/utils';

const steps = [
  { id: 1, name: 'Shipping' },
  { id: 2, name: 'Payment' },
  { id: 3, name: 'Review' },
];

const shippingSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  address: z.string().min(1, 'Address is required'),
  apartment: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zip: z.string().min(5, 'Invalid ZIP code'),
  country: z.string().min(1, 'Country is required'),
});

const paymentSchema = z.object({
  cardNumber: z.string().refine(val => /^[0-9]{16}$/.test(val), 'Invalid card number'),
  cardName: z.string().min(1, 'Name on card is required'),
  expiry: z.string().refine(val => /^(0[1-9]|1[0-2])\s*\/\s*([0-9]{2})$/.test(val), 'Invalid expiry date (MM/YY)'),
  cvc: z.string().refine(val => /^[0-9]{3,4}$/.test(val), 'Invalid CVC'),
});

const Checkout = () => {
  const { cartItems, isLoading } = useCart();
  const [currentStep, setCurrentStep] = useState(1);

  const shippingForm = useForm<z.infer<typeof shippingSchema>>({
    resolver: zodResolver(shippingSchema),
    defaultValues: { firstName: '', lastName: '', address: '', apartment: '', city: '', state: '', zip: '', country: '' },
  });

  const paymentForm = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: { cardNumber: '', cardName: '', expiry: '', cvc: '' },
  });

  const onShippingSubmit = (data: z.infer<typeof shippingSchema>) => {
    console.log('Shipping Info:', data);
    setCurrentStep(2);
  };

  const onPaymentSubmit = (data: z.infer<typeof paymentSchema>) => {
    console.log('Payment Info:', data);
    setCurrentStep(3);
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    // Here you would typically handle the final order submission to a backend
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 9.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-center">Checkout</h1>
          <p className="text-muted-foreground text-center mb-10">Complete your purchase securely and efficiently.</p>

          {/* Stepper */}
          <div className="flex justify-center items-center mb-12">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg',
                      currentStep > step.id ? 'bg-primary text-primary-foreground' :
                      currentStep === step.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    )}
                  >
                    {currentStep > step.id ? <Check /> : step.id}
                  </div>
                  <p className={cn('mt-2 font-semibold', currentStep >= step.id ? 'text-primary' : 'text-muted-foreground')}>{step.name}</p>
                </div>
                {index < steps.length - 1 && <div className={cn('flex-1 h-1 mx-4', currentStep > step.id ? 'bg-primary' : 'bg-muted')} />} 
              </React.Fragment>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
            {/* Forms Container */}
            <div className="bg-card p-8 rounded-xl shadow-card">
              {currentStep === 1 && <ShippingForm form={shippingForm} onSubmit={onShippingSubmit} />}
              {currentStep === 2 && <PaymentForm form={paymentForm} onSubmit={onPaymentSubmit} onBack={() => setCurrentStep(1)} />}
              {currentStep === 3 && <ReviewStep onBack={() => setCurrentStep(2)} shippingData={shippingForm.getValues()} paymentData={paymentForm.getValues()} />}
            </div>

            {/* Order Summary */}
            <div className="bg-card p-8 rounded-xl shadow-card self-start sticky top-24">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                      <div>
                        <p className="font-semibold line-clamp-1">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6 space-y-3">
                <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-muted-foreground"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
                <div className="flex justify-between text-muted-foreground"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
                <div className="flex justify-between text-lg font-bold text-foreground pt-3 border-t border-border"><span>Total</span><span>${total.toFixed(2)}</span></div>
              </div>

              {currentStep === 3 && (
                <Button size="lg" className="w-full mt-8" disabled={isLoading || cartItems.length === 0} onClick={handlePlaceOrder}>
                  <Lock className="h-5 w-5 mr-2" />
                  {isLoading ? 'Processing...' : 'Place Order'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Shipping Form Component
const ShippingForm = ({ form, onSubmit }: { form: ReturnType<typeof useForm<z.infer<typeof shippingSchema>>>, onSubmit: (data: z.infer<typeof shippingSchema>) => void }) => (
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">Shipping Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <FormField name="firstName" control={form.control} render={({ field }) => (<FormItem><FormLabel>First Name</FormLabel><FormControl><Input placeholder="John" {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField name="lastName" control={form.control} render={({ field }) => (<FormItem><FormLabel>Last Name</FormLabel><FormControl><Input placeholder="Doe" {...field} /></FormControl><FormMessage /></FormItem>)} />
      </div>
      <FormField name="address" control={form.control} render={({ field }) => (<FormItem><FormLabel>Address</FormLabel><FormControl><Input placeholder="123 Main St" {...field} /></FormControl><FormMessage /></FormItem>)} />
      <FormField name="apartment" control={form.control} render={({ field }) => (<FormItem><FormLabel>Apartment, suite, etc. (optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
      <div className="grid grid-cols-2 gap-4">
        <FormField name="city" control={form.control} render={({ field }) => (<FormItem><FormLabel>City</FormLabel><FormControl><Input placeholder="San Francisco" {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField name="state" control={form.control} render={({ field }) => (<FormItem><FormLabel>State</FormLabel><FormControl><Input placeholder="CA" {...field} /></FormControl><FormMessage /></FormItem>)} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormField name="zip" control={form.control} render={({ field }) => (<FormItem><FormLabel>ZIP Code</FormLabel><FormControl><Input placeholder="94103" {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField name="country" control={form.control} render={({ field }) => (<FormItem><FormLabel>Country</FormLabel><FormControl><Input placeholder="USA" {...field} /></FormControl><FormMessage /></FormItem>)} />
      </div>
      <Button type="submit" size="lg" className="w-full">Next: Payment</Button>
    </form>
  </Form>
);

// Payment Form Component
const PaymentForm = ({ form, onSubmit, onBack }: { form: ReturnType<typeof useForm<z.infer<typeof paymentSchema>>>, onSubmit: (data: z.infer<typeof paymentSchema>) => void, onBack: () => void }) => (
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">Payment Details</h2>
      <FormField name="cardNumber" control={form.control} render={({ field }) => (<FormItem><FormLabel>Card Number</FormLabel><FormControl><Input placeholder="•••• •••• •••• 1234" {...field} /></FormControl><FormMessage /></FormItem>)} />
      <FormField name="cardName" control={form.control} render={({ field }) => (<FormItem><FormLabel>Name on Card</FormLabel><FormControl><Input placeholder="John M. Doe" {...field} /></FormControl><FormMessage /></FormItem>)} />
      <div className="grid grid-cols-2 gap-4">
        <FormField name="expiry" control={form.control} render={({ field }) => (<FormItem><FormLabel>Expiration</FormLabel><FormControl><Input placeholder="MM / YY" {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField name="cvc" control={form.control} render={({ field }) => (<FormItem><FormLabel>CVC</FormLabel><FormControl><Input placeholder="123" {...field} /></FormControl><FormMessage /></FormItem>)} />
      </div>
      <div className="flex gap-4">
        <Button type="button" variant="outline" className="w-full" onClick={onBack}><ArrowLeft className="h-4 w-4 mr-2"/>Back to Shipping</Button>
        <Button type="submit" size="lg" className="w-full">Next: Review Order</Button>
      </div>
    </form>
  </Form>
);

// Review Step Component
const ReviewStep = ({ onBack, shippingData, paymentData }: { onBack: () => void, shippingData: z.infer<typeof shippingSchema>, paymentData: z.infer<typeof paymentSchema> }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-foreground">Review Your Order</h2>
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Shipping Address</h3>
        <p className="text-muted-foreground">{shippingData.firstName} {shippingData.lastName}</p>
        <p className="text-muted-foreground">{shippingData.address}, {shippingData.apartment}</p>
        <p className="text-muted-foreground">{shippingData.city}, {shippingData.state} {shippingData.zip}</p>
        <p className="text-muted-foreground">{shippingData.country}</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Payment Method</h3>
        <p className="text-muted-foreground">Card ending in •••• {paymentData.cardNumber.slice(-4)}</p>
      </div>
    </div>
    <Button type="button" variant="outline" className="w-full" onClick={onBack}><ArrowLeft className="h-4 w-4 mr-2"/>Back to Payment</Button>
  </div>
);

export default Checkout;
