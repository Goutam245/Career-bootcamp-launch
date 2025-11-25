import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, Linkedin, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Resources = () => {
  const blogPosts = [
    {
      title: "5 Signs You're Ready for Executive Coaching",
      category: "Career Development",
      excerpt:
        "Discover the key indicators that signal it's time to invest in professional coaching to accelerate your career.",
      date: "March 15, 2024",
    },
    {
      title: "Building Executive Presence: A Strategic Guide",
      category: "Leadership",
      excerpt:
        "Learn the essential components of executive presence and how to develop this critical leadership quality.",
      date: "March 10, 2024",
    },
    {
      title: "Navigating Career Transitions in Switzerland",
      category: "Job Search",
      excerpt:
        "Practical strategies for successfully transitioning between roles, companies, and industries in the Swiss market.",
      date: "March 5, 2024",
    },
    {
      title: "The Art of Strategic Networking",
      category: "Professional Growth",
      excerpt:
        "Transform networking from a chore into a powerful career acceleration tool with these proven strategies.",
      date: "February 28, 2024",
    },
  ];

  const guides = [
    {
      icon: FileText,
      title: "Career Strategy Workbook",
      description:
        "A comprehensive guide to mapping your 3-5 year career trajectory with actionable exercises.",
    },
    {
      icon: TrendingUp,
      title: "Salary Negotiation Guide",
      description:
        "Master the art of negotiation with our step-by-step framework for securing the compensation you deserve.",
    },
    {
      icon: BookOpen,
      title: "Executive Presence Checklist",
      description:
        "Assess and develop your executive presence with this detailed self-evaluation tool.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Resources Hub</h1>
            <p className="text-lg md:text-xl opacity-90">
              Expert insights, practical guides, and career development resources
            </p>
          </div>
        </div>
      </section>

      {/* LinkedIn Newsletter */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="h-20 w-20 bg-accent rounded-full flex items-center justify-center">
                      <Linkedin className="h-10 w-10 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-grow text-center md:text-left space-y-4">
                    <h2 className="text-3xl font-bold">
                      Subscribe to Our LinkedIn Newsletter
                    </h2>
                    <p className="text-muted-foreground">
                      Get weekly career insights, leadership tips, and exclusive coaching advice delivered directly to your LinkedIn feed.
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-accent hover:bg-accent/90"
                    >
                      <a
                        href="https://www.linkedin.com/company/careerbootcamp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Subscribe on LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Latest <span className="text-accent">Insights</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-sm text-accent font-medium">
                      {post.category}
                    </div>
                    <h3 className="text-2xl font-bold">{post.title}</h3>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">
                        {post.date}
                      </span>
                      <Button variant="ghost" size="sm">
                        Read More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free Guides */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Free <span className="text-accent">Downloads</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 space-y-4 text-center">
                    <div className="flex justify-center">
                      <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center">
                        <guide.icon className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{guide.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {guide.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      Download Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready for Personalized Guidance?
            </h2>
            <p className="text-lg text-muted-foreground">
              Move beyond general advice. Get tailored coaching designed specifically for your career goals.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
