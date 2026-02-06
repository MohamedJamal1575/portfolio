import { Section } from '../Section';
import { experience } from '@/data/portfolio';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';

export function ExperienceSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <Section
      id="experience"
      title="Professional Experience"
      subtitle="Enterprise-grade applications I've worked"
    >
      <div ref={ref} className="max-w-6xl mx-auto space-y-12">
        {experience.map((exp, idx) => (
          <div
            key={exp.id}
            className={`bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border hover:shadow-md transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Title */}
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {idx + 1}. {exp.title}
            </h3>

            {/* Problem */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-destructive" />
                <h4 className="text-lg font-semibold text-foreground">Problem</h4>
              </div>
              <p className="text-foreground/90 leading-relaxed pl-7">
                {exp.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-accent" />
                <h4 className="text-lg font-semibold text-foreground">Solution</h4>
              </div>
              <p className="text-foreground/90 leading-relaxed pl-7">
                {exp.solution}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                Key Highlights
              </h4>
              <ul className="space-y-2 pl-7">
                {exp.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="flex items-start gap-3 text-foreground/90"
                  >
                    <span className="text-accent mt-1.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="text-lg font-semibold text-foreground">Impact</h4>
              </div>
              <ul className="space-y-2 pl-7">
                {exp.impact.map((item, iIdx) => (
                  <li
                    key={iIdx}
                    className="flex items-start gap-3 text-foreground/90"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
