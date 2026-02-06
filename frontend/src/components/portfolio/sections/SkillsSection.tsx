import { Section } from '../Section';
import { Badge } from '@/components/ui/badge';
import { skillCategories } from '@/data/portfolio';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

export function SkillsSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="Technologies I work with to build modern web applications"
    >
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-1000 delay-100 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="space-y-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.category}
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
