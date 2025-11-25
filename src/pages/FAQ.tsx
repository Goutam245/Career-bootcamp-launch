import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqCategories = [
    {
      category: "General Questions",
      faqs: [
        {
          question: "What makes Career Bootcamp different from other coaching services?",
          answer: "Career Bootcamp combines Swiss precision with boutique personalization. Unlike large coaching franchises, we maintain a selective client base to ensure every individual receives personalized attention. Our coaches have extensive corporate experience, our methodology is proven across 500+ successful clients, and we focus exclusively on mid-to-senior level career advancement.",
        },
        {
          question: "Who are your typical clients?",
          answer: "Our clients are ambitious professionals at various career stages: mid-level professionals seeking advancement (Accelerate), senior managers transitioning to executive roles (Elevate), and C-suite executives navigating complex leadership challenges (Executive). Common industries include finance, technology, pharmaceuticals, consulting, and professional services.",
        },
        {
          question: "How do I know which program is right for me?",
          answer: "We recommend booking a free consultation where we'll discuss your current situation, goals, and challenges. Based on that conversation, we'll recommend the program that best fits your needs. Generally: Accelerate for career acceleration and pivots, Elevate for leadership development, and Executive for C-suite coaching.",
        },
        {
          question: "Do you work with clients outside Switzerland?",
          answer: "Yes! While we're based in Zurich, we work with professionals globally through virtual coaching sessions. Our clients span Europe, North America, Asia, and beyond. Virtual coaching is equally effective and offers maximum scheduling flexibility.",
        },
      ],
    },
    {
      category: "Program Details",
      faqs: [
        {
          question: "How are coaching sessions delivered?",
          answer: "Sessions are conducted via secure video conferencing (Zoom, Teams) or in-person at our Zurich office, based on your preference. Each session is 60 minutes and scheduled at mutually convenient times. We accommodate different time zones and busy executive schedules.",
        },
        {
          question: "What's the time commitment outside of sessions?",
          answer: "Expect to spend 2-4 hours per week on homework, reflection exercises, networking activities, and implementing strategies. The exact commitment varies by program and individual goals, but consistent engagement between sessions is key to achieving results.",
        },
        {
          question: "Can I pause or reschedule sessions?",
          answer: "Yes, we understand that professional schedules can be unpredictable. You can reschedule sessions with 24 hours' notice. For extended breaks (travel, major projects), we can pause the program and resume when you're ready, within reasonable timeframes.",
        },
        {
          question: "What if I need to discontinue the program?",
          answer: "While we're confident in the value we provide, we understand circumstances change. If you need to discontinue, we'll work with you on a case-by-case basis. We want every client to feel the investment is worthwhile.",
        },
      ],
    },
    {
      category: "Investment & Logistics",
      faqs: [
        {
          question: "What's the investment for each program?",
          answer: "Program fees vary based on duration and depth: Accelerate (3 months, 10 sessions), Elevate (6 months, 15 sessions), and Executive (12 months, 20+ sessions). We provide detailed pricing during your free consultation. Payment plans are available.",
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment options including upfront payment and installment plans. We want to make our programs accessible to committed professionals while maintaining our boutique quality.",
        },
        {
          question: "Is coaching tax-deductible?",
          answer: "In many cases, yes—especially if coaching is career-related and you're employed or self-employed. We provide detailed invoices for tax purposes. Consult with your tax advisor regarding your specific situation.",
        },
        {
          question: "Do you work with companies for group coaching?",
          answer: "Yes, we offer corporate packages for leadership development, succession planning, and organizational change. Contact us to discuss custom corporate programs tailored to your company's needs.",
        },
      ],
    },
    {
      category: "Results & Success",
      faqs: [
        {
          question: "How quickly will I see results?",
          answer: "Clarity and confidence typically emerge within 2-3 sessions. Tangible career movement (interviews, offers, promotions) usually occurs within 3-6 months, though timing depends on market conditions, industry, and individual circumstances. Long-term results compound over time.",
        },
        {
          question: "What's your success rate?",
          answer: "85% of Accelerate and Elevate clients advance to more senior positions within 12 months. 95% report high satisfaction with the coaching experience. 78% achieve salary increases of 20% or more within 18 months. These results reflect committed clients who fully engage in the process.",
        },
        {
          question: "Do you guarantee specific outcomes?",
          answer: "While we can't guarantee specific results (promotions, salary increases depend on many external factors), we guarantee our commitment to your success. If you engage fully with the process, you will gain clarity, confidence, strategy, and the tools needed to accelerate your career.",
        },
        {
          question: "What happens after the program ends?",
          answer: "You'll have a comprehensive career strategy and practical skills that serve you for years. Many clients maintain relationships with their coaches for check-ins or additional sessions as needed. Some transition to longer programs as their needs evolve.",
        },
      ],
    },
    {
      category: "Getting Started",
      faqs: [
        {
          question: "What's the first step?",
          answer: "Book a free 30-minute consultation through our contact form. During this call, we'll discuss your goals, challenges, and whether our programs are a good fit. There's no pressure—just an honest conversation about how we can help.",
        },
        {
          question: "How quickly can I start?",
          answer: "Typically within 1-2 weeks of your consultation, depending on coach availability and your schedule. We maintain a selective client base to ensure quality, so occasionally there may be a brief waiting list.",
        },
        {
          question: "What do I need to prepare before starting?",
          answer: "Nothing extensive—just come with an open mind and commitment to the process. Before your first session, we'll send a brief questionnaire to help us understand your background and goals. We handle the rest.",
        },
        {
          question: "Is there a confidentiality agreement?",
          answer: "Absolutely. All coaching conversations are strictly confidential. We never share client information, situations, or progress with anyone without explicit permission. Your trust is paramount.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-slate-dark text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Everything you need to know about Career Bootcamp and our coaching programs
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold mb-8 text-accent">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`category-${categoryIndex}-item-${faqIndex}`}
                      className="bg-card border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-2 border-accent">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold">Still Have Questions?</h2>
              <p className="text-lg text-muted-foreground">
                Can't find the answer you're looking for? Book a free consultation and we'll address all your questions personally.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
