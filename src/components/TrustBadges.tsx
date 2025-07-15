
import { Shield, Truck, RotateCcw, CreditCard } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Secure Payment",
      description: "256-bit SSL encryption"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $99"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day return policy"
    },
    {
      icon: CreditCard,
      title: "Trusted Payments",
      description: "Multiple payment options"
    }
  ];

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-card">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <IconComponent className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{badge.title}</h4>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
