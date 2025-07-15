import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollText, Shield, CreditCard, Truck } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: December 15, 2024
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <div className="bg-card p-8 rounded-xl shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <ScrollText className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to SorrshaBuy. These Terms of Service ("Terms") govern your use of our website, 
                  products, and services. By accessing or using SorrshaBuy, you agree to be bound by these Terms. 
                  If you do not agree to these Terms, please do not use our services.
                </p>
              </div>
            </section>
            
            {/* User Accounts */}
            <section className="mb-12">
              <div className="bg-card p-8 rounded-xl shadow-card">
                <h2 className="text-2xl font-semibold text-foreground mb-6">User Accounts</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Account Creation</h3>
                    <p>To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account credentials.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Account Responsibilities</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Provide accurate and complete information</li>
                      <li>Keep your account information updated</li>
                      <li>Maintain the security of your password</li>
                      <li>Notify us immediately of any unauthorized access</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Orders and Payments */}
            <section className="mb-12">
              <div className="bg-card p-8 rounded-xl shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">Orders and Payments</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Order Processing</h3>
                    <p>All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Pricing and Payment</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>All prices are in USD and subject to change</li>
                      <li>Payment is due at the time of order</li>
                      <li>We accept major credit cards and PayPal</li>
                      <li>Taxes and shipping costs are additional</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Shipping and Delivery */}
            <section className="mb-12">
              <div className="bg-card p-8 rounded-xl shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <Truck className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">Shipping and Delivery</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Shipping Policy</h3>
                    <p>We ship to addresses within the United States and select international locations. Shipping times vary by location and service level.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Delivery Terms</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Risk of loss transfers upon delivery to carrier</li>
                      <li>Delivery dates are estimates, not guarantees</li>
                      <li>Recipient is responsible for providing accurate address</li>
                      <li>Additional charges may apply for remote locations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Returns and Refunds */}
            <section className="mb-12">
              <div className="bg-card p-8 rounded-xl shadow-card">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Returns and Refunds</h2>
                <div className="text-muted-foreground">
                  <p className="mb-4">
                    We offer a 30-day return policy for most items. Items must be in original condition 
                    with original packaging. Some restrictions apply for certain product categories.
                  </p>
                  <p>
                    Refunds are processed within 3-5 business days after we receive your return. 
                    Return shipping costs are the responsibility of the customer unless the return 
                    is due to our error.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Privacy and Data */}
            <section className="mb-12">
              <div className="bg-card p-8 rounded-xl shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">Privacy and Data Protection</h2>
                </div>
                <div className="text-muted-foreground">
                  <p className="mb-4">
                    Your privacy is important to us. Our Privacy Policy explains how we collect, 
                    use, and protect your personal information. By using our services, you consent 
                    to the collection and use of your information as described in our Privacy Policy.
                  </p>
                  <p>
                    We implement appropriate security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Prohibited Uses */}
            <section className="mb-12">
              <div className="bg-card p-8 rounded-xl shadow-card">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Prohibited Uses</h2>
                <div className="text-muted-foreground">
                  <p className="mb-4">You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts. Prohibited activities include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violating any local, state, national, or international law</li>
                    <li>Transmitting or procuring the sending of advertising or promotional material</li>
                    <li>Impersonating or attempting to impersonate the company, employees, or other users</li>
                    <li>Using the service in any way that could disable or impair the service</li>
                    <li>Attempting to gain unauthorized access to any part of the service</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Limitation of Liability */}
            <section className="mb-12">
              <div className="bg-card p-8 rounded-xl shadow-card">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Limitation of Liability</h2>
                <div className="text-muted-foreground">
                  <p className="mb-4">
                    To the fullest extent permitted by law, SorrshaBuy shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, including without limitation, 
                    loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                  <p>
                    Our total liability to you for all claims arising out of or relating to the use of 
                    or any inability to use any portion of the service shall not exceed the amount you 
                    actually paid us in the twelve (12) months prior to the claim.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Contact Information */}
            <section className="bg-muted/30 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <div className="text-muted-foreground">
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <p>Email: legal@sorrshbuy.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Commerce Street, New York, NY 10001</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;