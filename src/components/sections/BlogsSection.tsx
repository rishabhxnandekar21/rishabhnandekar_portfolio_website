import { useRef } from "react";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blogPosts, type BlogPost } from "@/data/portfolio-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export function BlogsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const hasPosts = blogPosts.length > 0;

  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Blog & <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical articles, tutorials, and insights from my learning journey
          </p>
        </motion.div>

        {hasPosts ? (
          /* Blog Posts Carousel */
          <motion.div
            className="relative px-4 md:px-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {blogPosts.map((post, index) => (
                  <CarouselItem
                    key={post.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <BlogCard post={post} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-card/80 border-border hover:bg-card hover:text-primary interactive" />
              <CarouselNext className="right-0 bg-card/80 border-border hover:bg-card hover:text-primary interactive" />
            </Carousel>
          </motion.div>
        ) : (
          /* Empty State */
          <EmptyBlogState isInView={isInView} />
        )}
      </div>
    </section>
  );
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      className="group h-full"
      variants={itemVariants}
    >
      <a
        href={post.url || "#"}
        className="block h-full rounded-xl overflow-hidden bg-card border border-border/50 card-hover interactive"
      >
        {/* Post Image */}
        {post.imageUrl && (
          <div className="aspect-video overflow-hidden bg-muted">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}

        {/* Post Info */}
        <div className="p-5">
          {/* Category */}
          <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
            {post.category}
          </Badge>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Read more */}
          <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
            Read More
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </a>
    </motion.div>
  );
}

function EmptyBlogState({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      className="max-w-lg mx-auto text-center py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
    >
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
        <BookOpen className="w-10 h-10 text-primary" />
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Coming Soon</h3>
      
      <p className="text-muted-foreground mb-8 leading-relaxed">
        I'm working on some exciting articles about web development, technology trends, 
        and my learning experiences. Check back soon for technical blogs, tutorials, 
        and insights!
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <Badge variant="secondary" className="px-3 py-1">
          React Tutorials
        </Badge>
        <Badge variant="secondary" className="px-3 py-1">
          TypeScript Tips
        </Badge>
        <Badge variant="secondary" className="px-3 py-1">
          System Design
        </Badge>
        <Badge variant="secondary" className="px-3 py-1">
          Career Advice
        </Badge>
      </div>
    </motion.div>
  );
}
