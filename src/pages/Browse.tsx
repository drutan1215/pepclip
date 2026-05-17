import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, Star, ChevronDown } from 'lucide-react';
import MentorCard from '../components/MentorCard';
import { mentors, mentorTypeLabels } from '../data/mentors';
import { MentorType } from '../types';

const categoryLabels: Record<string, string> = {
  'sports-motivation': 'Sports Motivation',
  'confidence': 'Confidence',
  'school-trouble': 'School Trouble',
  'school-motivation': 'School Motivation',
  'work-ethic': 'Work Ethic',
  'discipline': 'Discipline',
  'character-choices': 'Character & Choices',
  'better-choices': 'Better Choices',
  'vaping-drugs': 'Vaping / Drugs',
  'big-game': 'Big Game',
  'college-application': 'College Application',
  'test-motivation': 'Test Motivation',
  'job-interview': 'Job Interview',
  'general-encouragement': 'General Encouragement',
};

const mentorTypes: MentorType[] = [
  'local-coach', 'local-athlete', 'college-athlete', 'pro-athlete',
  'business-professional', 'teacher-educator', 'military-veteran', 'overcome-challenges',
];

const categoryMatches: Record<string, string[]> = {
  discipline: ['discipline', 'work-ethic'],
  'school-motivation': ['school-motivation', 'test-motivation'],
  'job-interview': ['job-interview', 'career'],
};

type ActiveFilter = {
  key: 'category' | 'type' | 'price' | 'rating' | 'zip';
  label: string;
};

const localScore = (mentorZip: string, selectedZip: string) => {
  if (!selectedZip) return 0;
  if (mentorZip === selectedZip) return 4;
  if (mentorZip.slice(0, 3) === selectedZip.slice(0, 3)) return 3;
  if (mentorZip.slice(0, 2) === selectedZip.slice(0, 2)) return 2;
  if (mentorZip[0] === selectedZip[0]) return 1;
  return 0;
};

export default function Browse() {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || '';
  const initialType = searchParams.get('type') || '';
  const initialZip = searchParams.get('zip') || '';
  const isMatched = searchParams.get('matched') === 'true';

  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState(initialCat);
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedZip, setSelectedZip] = useState(initialZip);
  const [maxPrice, setMaxPrice] = useState(500);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('best-match');
  const [showFilters, setShowFilters] = useState(false);

  const activeFilters: ActiveFilter[] = [];
  if (selectedCat) activeFilters.push({ key: 'category', label: categoryLabels[selectedCat] || selectedCat });
  if (selectedType) activeFilters.push({ key: 'type', label: mentorTypeLabels[selectedType] || selectedType });
  if (selectedZip) activeFilters.push({ key: 'zip', label: `Near ${selectedZip}` });
  if (maxPrice < 500) activeFilters.push({ key: 'price', label: `Under $${maxPrice}` });
  if (minRating > 0) activeFilters.push({ key: 'rating', label: `${minRating}★+` });

  const filtered = useMemo(() => {
    let result = mentors.filter(m => {
      if (search && !m.name.toLowerCase().includes(search.toLowerCase()) &&
          !m.currentRole.toLowerCase().includes(search.toLowerCase()) &&
          !m.bio.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedCat) {
        const matches = categoryMatches[selectedCat] || [selectedCat];
        if (!matches.some(cat => m.categories.includes(cat))) return false;
      }
      if (selectedType && m.mentorType !== selectedType) return false;
      if (m.basePrice > maxPrice) return false;
      if (m.rating < minRating) return false;
      return true;
    });

    if (sortBy === 'price-asc') result = [...result].sort((a, b) => a.basePrice - b.basePrice);
    else if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.basePrice - a.basePrice);
    else if (sortBy === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'turnaround') result = [...result].sort((a, b) => a.basePrice - b.basePrice);
    else {
      result = [...result].sort((a, b) => {
        const locationRank = localScore(b.zipCode, selectedZip) - localScore(a.zipCode, selectedZip);
        if (locationRank !== 0) return locationRank;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
    }

    return result;
  }, [search, selectedCat, selectedType, selectedZip, maxPrice, minRating, sortBy]);

  const clearFilter = (key: ActiveFilter['key']) => {
    if (key === 'category') setSelectedCat('');
    if (key === 'type') setSelectedType('');
    if (key === 'zip') setSelectedZip('');
    if (key === 'price') setMaxPrice(500);
    if (key === 'rating') setMinRating(0);
  };

  const clearAll = () => {
    setSelectedCat('');
    setSelectedType('');
    setSelectedZip('');
    setMaxPrice(500);
    setMinRating(0);
    setSearch('');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Page header */}
      <div className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isMatched && (
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-green-300 text-sm font-medium">Showing mentors matched to your answers</span>
            </div>
          )}
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-2">
            {isMatched ? 'Here are voices that may connect with them.' : 'Browse Mentors'}
          </h1>
          <p className="text-slate-400">
            {filtered.length} mentor{filtered.length !== 1 ? 's' : ''} found
            {selectedCat ? ` for "${categoryLabels[selectedCat] || selectedCat}"` : ''}
            {selectedZip ? ` near ${selectedZip}` : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + sort bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, sport, background..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 text-sm"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border font-medium text-sm transition-colors sm:hidden ${
              showFilters ? 'bg-orange-500 text-white border-orange-500' : 'bg-white border-slate-200 text-slate-700'
            }`}
          >
            <SlidersHorizontal size={16} />
            Filters {activeFilters.length > 0 && `(${activeFilters.length})`}
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3 pr-9 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/30 cursor-pointer"
            >
              <option value="best-match">Best Match</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Active filter chips */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {activeFilters.map(filter => (
              <span key={filter.key} className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 border border-orange-200 text-xs font-medium px-3 py-1.5 rounded-full">
                {filter.label}
                <X size={12} className="cursor-pointer" onClick={() => clearFilter(filter.key)} />
              </span>
            ))}
            <button onClick={clearAll} className="text-xs text-slate-500 hover:text-slate-700 underline underline-offset-2">
              Clear all
            </button>
          </div>
        )}

        <div className="flex gap-8">
          {/* Sidebar filters — desktop always visible, mobile toggleable */}
          <aside className={`w-64 shrink-0 ${showFilters ? 'block' : 'hidden'} sm:block`}>
            <div className="bg-white rounded-2xl border border-slate-100 p-5 sticky top-32">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-bold text-slate-900">Filters</h3>
                {activeFilters.length > 0 && (
                  <button onClick={clearAll} className="text-xs text-orange-500 hover:text-orange-600 font-medium">
                    Clear all
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Topic</h4>
                <div className="space-y-1.5">
                  {Object.entries(categoryLabels).map(([val, label]) => (
                    <label key={val} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCat === val}
                        onChange={() => setSelectedCat(selectedCat === val ? '' : val)}
                        className="w-4 h-4 accent-orange-500"
                      />
                      <span className={`text-sm transition-colors ${selectedCat === val ? 'text-orange-600 font-medium' : 'text-slate-600 group-hover:text-slate-900'}`}>
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mentor Type */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Mentor Type</h4>
                <div className="space-y-1.5">
                  {mentorTypes.map(t => (
                    <label key={t} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="radio"
                        name="mentorType"
                        checked={selectedType === t}
                        onChange={() => setSelectedType(selectedType === t ? '' : t)}
                        className="w-4 h-4 accent-orange-500"
                      />
                      <span className={`text-sm transition-colors ${selectedType === t ? 'text-orange-600 font-medium' : 'text-slate-600 group-hover:text-slate-900'}`}>
                        {mentorTypeLabels[t]}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                  Max Price: <span className="text-orange-500">${maxPrice}</span>
                </h4>
                <input
                  type="range"
                  min={25}
                  max={500}
                  step={25}
                  value={maxPrice}
                  onChange={e => setMaxPrice(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>$25</span>
                  <span>$500+</span>
                </div>
              </div>

              {/* Rating */}
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Min Rating</h4>
                <div className="flex gap-2">
                  {[0, 4, 4.5, 4.8].map(r => (
                    <button
                      key={r}
                      onClick={() => setMinRating(r)}
                      className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border transition-colors ${
                        minRating === r
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'border-slate-200 text-slate-600 hover:border-orange-300'
                      }`}
                    >
                      {r === 0 ? 'Any' : <><Star size={10} /> {r}+</>}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">No mentors found</h3>
                <p className="text-slate-500 mb-6">Try adjusting your filters or search terms.</p>
                <button onClick={clearAll} className="btn-primary">Clear Filters</button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map(mentor => (
                  <MentorCard key={mentor.id} mentor={mentor} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
