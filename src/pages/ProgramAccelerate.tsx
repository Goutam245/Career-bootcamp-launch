import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check, Clock, Target, TrendingUp, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProgramAccelerate = () => {
  const modules = [
    {
      week: "Weeks 1-2",
      title: "Career Assessment & Strategy",
      description: "Deep dive into your current situation, strengths, values, and long-term aspirations",
      topics: ["Career history analysis", "Strengths assessment", "Values clarification", "Goal setting framework"],
    },
    {
      week: "Weeks 3-4",
      title: "Personal Brand Development",
      description: "Craft a compelling professional identity that differentiates you in the market",
      topics: ["Brand positioning", "Value proposition", "Professional narrative", "LinkedIn optimization"],
    },
    {
      week: "Weeks 5-6",
      title: "Strategic Networking",
      description: "Build a powerful network that opens doors and accelerates opportunities",
      topics: ["Network mapping", "Relationship building strategies", "Coffee meeting framework", "Follow-up systems"],
    },
    {
      week: "Weeks 7-8",
      title: "Job Search & Interview Mastery",
      description: "Navigate the market with confidence and ace every interview",
      topics: ["Hidden job market access", "Application strategy", "Interview preparation", "Salary negotiation"],
    },
    {
      week: "Weeks 9-10",
      title: "Career Transition & Next Steps",
      description: "Successfully transition into your next role and set yourself up for long-term success",
      topics: ["Offer evaluation", "Onboarding strategy", "90-day plan", "Continued growth framework"],
    },
  ];

  const faqs = [
    {
      question: "Who is the Accelerate program designed for?",
      answer: "Accelerate is ideal for ambitious mid-level professionals (5-12 years experience), high-potential employees looking to advance faster, career changers seeking to pivot industries, and professionals who've plateaued and need strategic direction.",
    },
    {
      question: "How quickly will I see results?",
      answer: "Most clients report increased clarity and confidence within the first 2-3 sessions. Career movement (interviews, offers, promotions) typically occurs within 3-6 months, though timing varies based on market conditions and individual circumstances.",
    },
    {
      question: "What's the time commitment?",
      answer: "The program includes 10 one-on-one sessions (60 minutes each) over 3 months, plus 2-3 hours per week for homework, networking activities, and application tasks. We design the schedule around your availability.",
    },
    {
      question: "Is this program right if I don't know what I want?",
      answer: "Absolutely. Career clarity is often the first outcome. Through our assessment process and strategic exercises, we help you gain crystal-clear direction on your next move and long-term trajectory.",
    },
    {
      question: "What makes Accelerate different from other career coaching?",
      answer: "We combine Swiss precision with personalized attention. You're not a number—you receive tailored strategies, direct accountability, and ongoing support. Plus, our track record speaks for itself: 85% of clients advance to more senior positions within 12 months.",
    },
    {
      question: "Can I do this program while employed full-time?",
      answer: "Yes, the program is specifically designed for working professionals. We schedule sessions at convenient times and provide practical strategies you can implement without disrupting your current role.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-slate-dark to-primary text-primary-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-6 py-2 bg-accent/20 rounded-full text-accent text-sm font-semibold mb-4 animate-fade-in">
              3-Month Intensive Program
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
              Accelerate
              <span className="block text-accent mt-2">Your Career Growth</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in">
              For ambitious professionals ready to fast-track their career trajectory with focused, strategic coaching
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/contact">
                  Start Your Acceleration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg border-primary-foreground/30 hover:bg-primary-foreground/10">
                <Link to="/testimonials">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <Card className="text-center">
                <CardContent className="p-6 space-y-2">
                  <Clock className="h-8 w-8 mx-auto text-accent" />
                  <div className="text-2xl font-bold">3 Months</div>
                  <div className="text-sm text-muted-foreground">Program Duration</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6 space-y-2">
                  <Users className="h-8 w-8 mx-auto text-accent" />
                  <div className="text-2xl font-bold">10 Sessions</div>
                  <div className="text-sm text-muted-foreground">One-on-One Coaching</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6 space-y-2">
                  <Target className="h-8 w-8 mx-auto text-accent" />
                  <div className="text-2xl font-bold">100% Custom</div>
                  <div className="text-sm text-muted-foreground">Tailored Strategy</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6 space-y-2">
                  <TrendingUp className="h-8 w-8 mx-auto text-accent" />
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm text-muted-foreground">Career Advancement</div>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The Accelerate program is designed for ambitious professionals who are ready to take their careers to the next level. Whether you're seeking a promotion, planning a career pivot, or looking to break through a plateau, this intensive 3-month coaching program provides the strategic framework, practical tools, and personalized support you need to accelerate your career growth.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Through 10 one-on-one sessions with your dedicated coach, you'll develop a crystal-clear career strategy, build a powerful personal brand, master strategic networking, and gain the confidence to navigate complex career transitions. This isn't generic advice—it's a custom-built roadmap designed specifically for your unique situation, goals, and aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Program Curriculum</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              A structured 10-week journey to career acceleration
            </p>

            <div className="space-y-6">
              {modules.map((module, index) => (
                <Card key={index} className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-accent">{index + 1}</span>
                      </div>
                      <div className="flex-grow space-y-4">
                        <div>
                          <div className="text-sm text-accent font-semibold mb-1">{module.week}</div>
                          <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                          <p className="text-muted-foreground">{module.description}</p>
                        </div>
                        <div>
                          <div className="text-sm font-semibold mb-2">Key Topics:</div>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {module.topics.map((topic, i) => (
                              <div key={i} className="flex items-center text-sm">
                                <Check className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                                <span>{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">What's Included</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-bold">Core Coaching</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>10 one-on-one coaching sessions (60 minutes each)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive career assessment & diagnostics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Personalized 3-5 year career roadmap</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Custom workbooks & reflection exercises</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-bold">Brand & Visibility</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Personal brand positioning workshop</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>LinkedIn profile complete optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Professional narrative development</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Executive biography & pitch coaching</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-bold">Job Search & Interviews</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Strategic job search planning</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Interview preparation & practice sessions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Salary negotiation strategy & scripts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Resume & cover letter review</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-bold">Ongoing Support</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Email & messaging support between sessions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Resource library access (templates, guides)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Strategic networking introductions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>30-day post-program check-in</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Everything you need to know about the Accelerate program
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-accent to-emerald-light text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-lg opacity-95">
              Join hundreds of professionals who've fast-tracked their careers with our proven coaching framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg border-accent-foreground/30 bg-accent-foreground/10 hover:bg-accent-foreground/20">
                <Link to="/programs">View All Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramAccelerate;
