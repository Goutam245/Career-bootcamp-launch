import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Target, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We set the highest standards for coaching quality and client outcomes.",
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "Your success is our success. We're invested in your journey every step of the way.",
    },
    {
      icon: Users,
      title: "Individuality",
      description: "Every career is unique. We tailor our approach to your specific goals and challenges.",
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Trust, confidentiality, and ethical practice are the foundation of everything we do.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              About Career Bootcamp
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Switzerland's leading boutique for executive and career coaching
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              Our <span className="text-accent">Mission</span>
            </h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                Career Bootcamp was founded on a simple but powerful belief: exceptional professionals deserve exceptional coaching. In a world of generic career advice and cookie-cutter programs, we saw the need for something different—a boutique coaching practice that combines Swiss precision with personalized attention.
              </p>
              <p>
                Today, we're proud to be Switzerland's leading boutique for executive and career coaching, trusted by ambitious professionals and senior leaders across diverse industries. Our approach isn't about quick fixes or one-size-fits-all solutions. It's about deep partnership, strategic thinking, and sustainable career transformation.
              </p>
              <p>
                Whether you're accelerating your career trajectory, elevating into senior leadership, or navigating complex executive challenges, we bring the expertise, tools, and commitment to help you achieve breakthrough results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Our <span className="text-accent">Values</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-8 space-y-4">
                    <value.icon className="h-10 w-10 text-accent" />
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              Our <span className="text-accent">Approach</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl font-bold text-accent">01</div>
                  <h3 className="text-xl font-bold">Strategic</h3>
                  <p className="text-muted-foreground">
                    We go beyond tactical advice to help you develop comprehensive career strategies that align with your long-term vision.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl font-bold text-accent">02</div>
                  <h3 className="text-xl font-bold">Personalized</h3>
                  <p className="text-muted-foreground">
                    Every client receives a tailored coaching experience designed around their unique goals, strengths, and challenges.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl font-bold text-accent">03</div>
                  <h3 className="text-xl font-bold">Results-Driven</h3>
                  <p className="text-muted-foreground">
                    We measure success by your outcomes—promotions, raises, new opportunities, and career satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              Our <span className="text-accent">Expertise</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div className="bg-background p-6 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="font-semibold">Years Experience</div>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="font-semibold">Professionals Coached</div>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">85%</div>
                <div className="font-semibold">Career Advancement Rate</div>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">95%</div>
                <div className="font-semibold">Client Satisfaction</div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-background rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Industry Experience</h3>
              <p className="text-muted-foreground mb-4">
                Our team has coached professionals across a wide range of industries, including:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  • Finance & Banking<br />
                  • Technology & IT<br />
                  • Pharmaceuticals
                </div>
                <div>
                  • Consulting<br />
                  • Manufacturing<br />
                  • Retail & Luxury
                </div>
                <div>
                  • Professional Services<br />
                  • Healthcare<br />
                  • Non-Profit & Public Sector
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
