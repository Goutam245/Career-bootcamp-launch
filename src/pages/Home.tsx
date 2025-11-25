import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Building, CheckCircle, Globe, Shield, Target, TrendingUp, Users, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const programs = [
    {
      title: "Accelerate",
      tagline: "Fast-Track Your Career Growth",
      description: "For ambitious professionals ready to accelerate their career trajectory with focused, strategic coaching.",
      duration: "3 months | 10 sessions",
      highlights: ["Career strategy", "Personal branding", "Networking mastery", "Interview preparation"],
      path: "/programs/accelerate",
      ideal: "Mid-level professionals, 5-12 years experience",
    },
    {
      title: "Elevate",
      tagline: "Rise to Leadership Excellence",
      description: "Transform into the leader you're meant to be with comprehensive executive development coaching.",
      duration: "6 months | 15 sessions",
      highlights: ["Leadership skills", "Executive presence", "Strategic thinking", "Team management"],
      path: "/programs/elevate",
      ideal: "Senior managers, directors, aspiring VPs",
    },
    {
      title: "Executive",
      tagline: "C-Suite & Senior Leadership",
      description: "Exclusive coaching for executives navigating complex leadership challenges and driving organizational success.",
      duration: "12 months | 20+ sessions",
      highlights: ["Board readiness", "Organizational impact", "Legacy building", "Crisis leadership"],
      path: "/programs/executive",
      ideal: "VPs, C-suite executives, board members",
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Clients Coached", sublabel: "Across 15+ industries" },
    { icon: TrendingUp, value: "85%", label: "Career Advancement", sublabel: "Within 12 months" },
    { icon: Award, value: "15+", label: "Years Experience", sublabel: "In executive coaching" },
    { icon: Target, value: "95%", label: "Client Satisfaction", sublabel: "Would recommend us" },
  ];

  const differentiators = [
    {
      icon: Shield,
      title: "Boutique Excellence",
      description: "We're not a coaching factory. Every client receives personalized attention from our expert team, with strategies tailored to your unique goals and challenges. You're not a number—you're a valued partner.",
    },
    {
      icon: Globe,
      title: "Swiss Precision, Global Reach",
      description: "Combining Swiss quality and precision with proven international coaching methodologies. Our clients span continents, but all receive the same meticulous attention to detail and commitment to excellence.",
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Over 500 professionals coached to career breakthroughs. From mid-level managers to C-suite executives across major Swiss and international corporations. Our results speak for themselves.",
    },
    {
      icon: Zap,
      title: "Results-Driven Approach",
      description: "We measure success by your outcomes: promotions, salary increases, new opportunities, and career satisfaction. Our comprehensive methodology ensures sustainable, long-term career transformation.",
    },
    {
      icon: Building,
      title: "Industry Expertise",
      description: "Deep experience across finance, technology, pharmaceuticals, consulting, and professional services. We understand the unique challenges and opportunities in your sector.",
    },
    {
      icon: Users,
      title: "Holistic Development",
      description: "From career strategy and personal branding to leadership development and executive presence—we cover all dimensions of professional success. Comprehensive coaching for comprehensive results.",
    },
  ];

  const industries = [
    "Finance & Banking",
    "Technology & IT",
    "Pharmaceuticals & Healthcare",
    "Management Consulting",
    "Manufacturing & Engineering",
    "Luxury & Retail",
    "Professional Services",
    "Energy & Utilities",
    "Media & Communications",
    "Non-Profit & Public Sector",
  ];

  const testimonialHighlights = [
    {
      quote: "Career Bootcamp transformed my approach to leadership. Within 6 months, I was promoted to VP.",
      author: "Sarah M.",
      role: "VP of Operations, Swiss Financial Services",
    },
    {
      quote: "The Executive program provided the strategic support I needed to navigate major organizational changes.",
      author: "Dr. Anna L.",
      role: "Chief Medical Officer, Healthcare Organization",
    },
    {
      quote: "The personalized attention and practical strategies helped me navigate a complex career transition perfectly.",
      author: "Michael K.",
      role: "Senior Manager, Technology Firm",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-slate-dark to-primary text-primary-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent text-sm font-semibold mb-4 animate-fade-in">
              Switzerland's Leading Career Coaching Boutique
            </div>
            <h1 className="text-5xl md:text-4xl lg:text-8xl font-bold leading-tight animate-fade-in">
              Elevate Your Career to
              <span className="block text-accent mt-2">Executive Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Strategic coaching for ambitious professionals and executives who refuse to settle for ordinary. Transform your career with Switzerland's premier coaching boutique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in">
              <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-8">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="otline" className="text-lg h-14 px-8 border-primary-foreground/30 hover:bg-primary-foreground/10">
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3 group hover:scale-105 transition-transform">
                <div className="flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm font-semibold">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Your Career Deserves <span className="text-accent">Exceptional Coaching</span>
            </h2>
            <div className="text-lg text-muted-foreground space-y-4 leading-relaxed">
              <p>
                In a world of generic career advice and cookie-cutter programs, Career Bootcamp stands apart. We're Switzerland's leading boutique for executive and career coaching—a trusted partner for ambitious professionals and senior leaders across diverse industries.
              </p>
              <p>
                Our approach isn't about quick fixes or one-size-fits-all solutions. It's about deep partnership, strategic thinking, and sustainable career transformation. Whether you're accelerating your career trajectory, elevating into senior leadership, or navigating complex executive challenges, we bring the expertise, tools, and commitment to help you achieve breakthrough results.
              </p>
              <p className="font-semibold text-foreground pt-4">
                Over 500 professionals have transformed their careers with Career Bootcamp. You could be next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your <span className="text-accent">Success Path</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Three distinct programs designed for different career stages. Each meticulously crafted to accelerate your professional growth with proven methodologies and personalized strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-emerald-light" />
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-accent font-semibold">{program.tagline}</p>
                    <p className="text-xs text-muted-foreground mt-2">{program.duration}</p>
                  </div>
                  <p className="text-muted-foreground">{program.description}</p>
                  <div className="pt-2">
                    <p className="text-xs font-semibold text-muted-foreground mb-3">IDEAL FOR:</p>
                    <p className="text-sm">{program.ideal}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-3">KEY OUTCOMES:</p>
                    <ul className="space-y-2">
                      {program.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Link to={program.path}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/programs">
                Compare All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
              Why Leading Professionals Choose
              <span className="block text-accent mt-2">Career Bootcamp</span>
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
              Six pillars of excellence that distinguish us as Switzerland's premier career coaching boutique
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group">
                  <CardContent className="p-8 space-y-4">
                    <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <item.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted Across <span className="text-accent">Industries</span>
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              Our coaching expertise spans diverse sectors and organizational contexts
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-background px-4 py-3 rounded-lg text-sm font-medium hover:border-accent border-2 border-transparent transition-colors">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              What Our <span className="text-accent">Clients Say</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonialHighlights.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 space-y-6">
                    <div className="text-6xl text-accent/20 font-serif">"</div>
                    <p className="text-muted-foreground italic leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="pt-4 border-t border-border">
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link to="/testimonials">
                  Read More Success Stories
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              How It <span className="text-accent">Works</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: "01", title: "Free Consultation", desc: "30-minute call to discuss your goals and challenges" },
                { num: "02", title: "Program Selection", desc: "We recommend the best fit based on your needs" },
                { num: "03", title: "Strategic Coaching", desc: "Regular sessions with personalized strategies" },
                { num: "04", title: "Career Breakthrough", desc: "Achieve promotions, transitions, or new opportunities" },
              ].map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="text-5xl font-bold text-accent">{step.num}</div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-accent via-accent to-emerald-light text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl opacity-95 leading-relaxed">
              Join hundreds of professionals who've achieved career breakthroughs with our proven coaching framework. Book your free consultation today—no pressure, just an honest conversation about your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-8">
                <Link to="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg h-14 px-8 border-accent-foreground/30 bg-accent-foreground/10 hover:bg-accent-foreground/20">
                <Link to="/faq">Common Questions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
