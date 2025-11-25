import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "VP of Operations",
      company: "Swiss Financial Services",
      program: "Elevate",
      quote:
        "Career Bootcamp transformed my approach to leadership. Within 6 months of completing the Elevate program, I was promoted to VP. The coaching gave me the confidence and strategic toolkit I needed to step into executive leadership.",
      rating: 5,
    },
    {
      name: "Michael K.",
      role: "Senior Manager",
      company: "Technology Firm",
      program: "Accelerate",
      quote:
        "The Accelerate program was exactly what I needed at a critical career juncture. The personalized attention and practical strategies helped me navigate a complex career transition. I'm now in a role that's perfectly aligned with my goals.",
      rating: 5,
    },
    {
      name: "Dr. Anna L.",
      role: "Chief Medical Officer",
      company: "Healthcare Organization",
      program: "Executive",
      quote:
        "As a C-suite executive, finding coaching that understands the unique pressures and complexity of senior leadership is rare. Career Bootcamp's Executive program provided the strategic support and confidential space I needed to navigate major organizational changes.",
      rating: 5,
    },
    {
      name: "Thomas R.",
      role: "Director",
      company: "Pharmaceutical Company",
      program: "Elevate",
      quote:
        "The 360-degree assessment and executive presence training were game-changers. My stakeholder relationships improved dramatically, and I successfully led my first major cross-functional initiative. The ROI on this coaching has been exceptional.",
      rating: 5,
    },
    {
      name: "Lisa B.",
      role: "Marketing Manager",
      company: "Luxury Retail",
      program: "Accelerate",
      quote:
        "Career Bootcamp helped me build a personal brand that stands out in my industry. The LinkedIn optimization and networking strategies opened doors I didn't know existed. I've received three unsolicited job offers since completing the program.",
      rating: 5,
    },
    {
      name: "David S.",
      role: "CFO",
      company: "International Corporation",
      program: "Executive",
      quote:
        "The board preparation coaching was invaluable. Career Bootcamp helped me refine my strategic communication and executive presence. I'm now on two boards and feel fully equipped to contribute at the highest levels of organizational leadership.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Success Stories</h1>
            <p className="text-lg md:text-xl opacity-90">
              Real results from professionals who transformed their careers with Career Bootcamp
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">85%</div>
              <div className="text-muted-foreground">
                Advanced to senior positions within 12 months
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">
                Would recommend to colleagues
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">40%</div>
              <div className="text-muted-foreground">
                Average salary increase
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-8 space-y-4">
                    <Quote className="h-10 w-10 text-accent/20" />
                    
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>

                    <p className="text-muted-foreground italic">
                      "{testimonial.quote}"
                    </p>

                    <div className="pt-4 border-t border-border">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </div>
                      <div className="text-xs text-accent font-medium mt-2">
                        {testimonial.program} Program
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Featured <span className="text-accent">Case Studies</span>
            </h2>

            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">From Manager to VP in 18 Months</h3>
                  <span className="text-accent font-semibold">Elevate Program</span>
                </div>
                <p className="text-muted-foreground">
                  <strong>Challenge:</strong> Mid-level manager feeling stuck, uncertain about path to senior leadership.
                </p>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Comprehensive leadership development through the Elevate program, including 360-degree feedback, executive presence training, and strategic stakeholder management.
                </p>
                <p className="text-muted-foreground">
                  <strong>Result:</strong> Promoted to Director within 6 months, then to VP 12 months later. 45% salary increase and expanded scope of responsibility across three departments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Successful Career Pivot</h3>
                  <span className="text-accent font-semibold">Accelerate Program</span>
                </div>
                <p className="text-muted-foreground">
                  <strong>Challenge:</strong> Professional seeking to transition from finance to technology sector, lacking network and unclear positioning.
                </p>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Career strategy development, personal brand repositioning, targeted networking plan, and interview preparation through Accelerate program.
                </p>
                <p className="text-muted-foreground">
                  <strong>Result:</strong> Successfully transitioned to senior role at leading tech company. Leveraged transferable skills while building new technical competencies. 30% salary increase.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Board-Ready Executive</h3>
                  <span className="text-accent font-semibold">Executive Program</span>
                </div>
                <p className="text-muted-foreground">
                  <strong>Challenge:</strong> C-suite executive wanting to expand influence through board positions, needing strategic positioning and board-specific skills.
                </p>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Board preparation coaching, governance training, strategic network development, and executive brand refinement through Executive program.
                </p>
                <p className="text-muted-foreground">
                  <strong>Result:</strong> Secured two non-executive director positions within 10 months. Expanded professional influence and created additional revenue streams.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
