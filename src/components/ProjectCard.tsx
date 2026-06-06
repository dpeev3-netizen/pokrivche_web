import { Link } from 'react-router-dom';
import { MapPin, Play } from 'lucide-react';
import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const isVideo = !!project.video && !project.image;

  return (
    <Link
      to="/proekti"
      className="group relative block aspect-[4/3] rounded-brand overflow-hidden border border-white/5 hover:border-primary/40 transition-colors"
    >
      {isVideo ? (
        <video
          src={project.video}
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <img
          src={project.image}
          alt={`${project.title} — ${project.location}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* Always-on bottom gradient to ground the photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent pointer-events-none" />

      {/* Hover gradient — deeper, makes overlay text legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Play badge for video projects */}
      {project.video && (
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-full shadow-lg">
          <Play className="w-3 h-3 fill-white" />
          Видео
        </div>
      )}

      {/* Sliding overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
          {project.serviceLabel}
        </span>
        <h3 className="font-heading font-bold text-white text-lg leading-tight mt-1">
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-white/70 uppercase tracking-wider font-bold mt-2">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          {project.location}
        </div>
      </div>
    </Link>
  );
}
