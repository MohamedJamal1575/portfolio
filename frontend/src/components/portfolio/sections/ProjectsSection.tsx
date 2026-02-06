import { Section } from '../Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/portfolio';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

export function ProjectsSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Key Projects & Contributions"
      className="bg-muted/30"
    >
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {projects.map((project, idx) => (
          <Card
            key={project.id}
            className={`group hover:shadow-lg transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <CardHeader className="p-0 -mt-6">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl mb-2">{project.name}</CardTitle>
              <CardDescription className="text-sm mb-4 line-clamp-7">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
