import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Programs = () => {
  const programs = [
    {
      id: "accelerate",
      title: "Accelerate",
      tagline: "Fast-Track Your Career Growth",
      duration: "3 months",
      sessions: "10 sessions",
      description:
        "Designed for ambitious professionals ready to accelerate their career trajectory with focused, strategic coaching.",
      ideal: "Mid-level professionals, high potentials, career changers",
      outcomes: [
        "Clear 3-5 year career roadmap",
        "Compelling personal brand",
        "Strategic networking plan",
        "Enhanced executive presence",
        "Negotiation confidence",
        "Leadership skill development",
      ],
      includes: [
        "10 one-on-one coaching sessions",
        "Career assessment & strategy",
        "Personal branding workshop",
        "LinkedIn profile optimization",
        "Interview preparation",
        "Email & messaging support",
      ],
      path: "/programs/accelerate",
    },
    {
      id: "elevate",
      title: "Elevate",
      tagline: "Rise to Leadership Excellence",
      duration: "6 months",
      sessions: "15 sessions",
      description:
        "Transform into the leader you're meant to be with comprehensive executive development coaching.",
      ideal: "Senior managers, directors, aspiring VPs",
      outcomes: [
        "Executive leadership capabilities",
        "Strategic influence skills",
        "High-impact communication",
        "Team leadership excellence",
        "Board-ready executive presence",
        "Political savvy & stakeholder management",
      ],
      includes: [
        "15 one-on-one coaching sessions",
        "360-degree leadership assessment",
        "Executive presence training",
        "Strategic communication coaching",
        "Crisis management preparation",
        "Ongoing support & resources",
      ],
      path: "/programs/elevate",
    },
    {
      id: "executive",
      title: "Executive",
      tagline: "C-Suite & Senior Leadership",
      duration: "12 months",
      sessions: "20+ sessions",
      description:
        "Exclusive coaching for executives navigating complex leadership challenges and driving organizational success.",
      ideal: "VPs, C-suite executives, board members",
      outcomes: [
        "Organizational transformation leadership",
        "Board-level strategic thinking",
        "Executive team dynamics mastery",
        "Legacy & succession planning",
        "Complex stakeholder management",
        "Personal & professional integration",
      ],
      includes: [
        "20+ one-on-one coaching sessions",
        "Executive assessment suite",
        "Board preparation & coaching",
        "Crisis & change leadership",
        "Executive team facilitation",
        "24/7 priority support",
      ],
      path: "/programs/executive",
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
              Our Coaching Programs
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Three distinct paths to career excellence. Choose the program that matches your ambition and career stage.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <Card
                key={program.id}
                className="max-w-6xl mx-auto border-2 hover:border-accent transition-colors"
              >
                <CardHeader className="bg-secondary">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-3xl mb-2">{program.title}</CardTitle>
                      <p className="text-accent font-medium">{program.tagline}</p>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <div className="bg-background px-4 py-2 rounded-md">
                        <div className="font-semibold">{program.duration}</div>
                        <div className="text-muted-foreground">Duration</div>
                      </div>
                      <div className="bg-background px-4 py-2 rounded-md">
                        <div className="font-semibold">{program.sessions}</div>
                        <div className="text-muted-foreground">Sessions</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8 space-y-8">
                  <div>
                    <p className="text-lg mb-2">{program.description}</p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Ideal for:</span> {program.ideal}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Key Outcomes</h3>
                      <ul className="space-y-2">
                        {program.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">What's Included</h3>
                      <ul className="space-y-2">
                        {program.includes.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button asChild size="lg" className="flex-1">
                      <Link to="/contact">
                        Start {program.title}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="flex-1">
                      <Link to={program.path}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Not Sure Which Program Is Right?
            </h2>
            <p className="text-lg text-muted-foreground">
              Book a free consultation and we'll help you choose the perfect path for your career goals.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
