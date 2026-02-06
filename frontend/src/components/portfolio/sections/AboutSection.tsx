import { Section } from '../Section';
import { profileData } from '@/data/portfolio';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

export function AboutSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <Section id="about" title="About Me" className="bg-muted/30">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-1000 delay-100 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="bg-card rounded-lg p-8 md:p-12 shadow-sm border border-border">
          <p className="text-lg text-foreground leading-relaxed whitespace-pre-line">
            {profileData.about}
          </p>
        </div>
      </div>
    </Section>
  );
}
