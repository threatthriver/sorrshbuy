import { motion } from 'framer-motion';
import { Zap, Sparkles, Wand2 } from 'lucide-react';

const features = [
  { 
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Blazing-Fast Experience',
    description: 'We\'ve supercharged our site for faster load times and a smoother, more responsive feel.'
  },
  { 
    icon: <Sparkles className="h-8 w-8 text-secondary" />,
    title: 'Polished New Look',
    description: 'Enjoy a cleaner, more modern design with updated product cards and slick animations.'
  },
  { 
    icon: <Wand2 className="h-8 w-8 text-accent" />,
    title: 'Smarter Navigation',
    description: 'Getting around is easier than ever with our new mobile menu and improved search.'
  }
];

const FeatureAnnouncement = () => {
  return (
    <div className="bg-card py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Fresh Features, Better Shopping</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We've been busy making SorrshaBuy even better for you. Check out what's new!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center items-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureAnnouncement;
