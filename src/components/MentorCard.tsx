import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Star, Play } from 'lucide-react';
import { Mentor } from '../types';
import { mentorTypeLabels } from '../data/mentors';

interface MentorCardProps {
  mentor: Mentor;
  compact?: boolean;
}

export default function MentorCard({ mentor, compact = false }: MentorCardProps) {
  const navigate = useNavigate();

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(mentor.rating));

  return (
    <div className="card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Photo + video overlay */}
      <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
        <img
          src={mentor.photo}
          alt={mentor.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="w-12 h-12 bg-orange-500/90 hover:bg-orange-500 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-colors">
            <Play size={18} className="text-white ml-0.5" fill="white" />
          </button>
        </div>

        {/* Availability badge */}
        {mentor.availability === 'available' && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Available
            </span>
          </div>
        )}

        {/* Price badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm">
            From ${mentor.basePrice}
          </span>
        </div>

        {/* Type badge */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-orange-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
            {mentorTypeLabels[mentor.mentorType]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Name + rating */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display font-bold text-slate-900 text-base leading-tight">
            {mentor.name}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star size={12} className="text-amber-400 fill-amber-400" />
            <span className="text-xs font-semibold text-slate-700">{mentor.rating}</span>
            <span className="text-xs text-slate-400">({mentor.reviewCount})</span>
          </div>
        </div>

        {/* Role */}
        <p className="text-xs text-slate-500 mb-3 line-clamp-2 leading-relaxed">
          {mentor.currentRole}
        </p>

        {/* Location + turnaround */}
        <div className="flex items-center gap-4 mb-3">
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <MapPin size={11} />
            {mentor.location}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <Clock size={11} />
            {mentor.standardTurnaround}
          </span>
        </div>

        {/* Best for tags */}
        {!compact && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {mentor.bestFor.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="tag bg-orange-50 text-orange-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => navigate(`/mentor/${mentor.id}`)}
            className="flex-1 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg py-2.5 transition-colors"
          >
            View Profile
          </button>
          <button
            onClick={() => navigate(`/mentor/${mentor.id}#request`)}
            className="flex-1 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg py-2.5 transition-colors shadow-sm shadow-orange-500/20"
          >
            Request a PepClip
          </button>
        </div>
      </div>
    </div>
  );
}
