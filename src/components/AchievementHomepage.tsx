'use client';

import { GraduationCap, Users, ClipboardList, Star, FileText } from 'lucide-react';

const achievements = [
  { id: 1, icon: GraduationCap, count: '400+', label: 'Students Assisted', color: 'from-green-400 to-blue-500' },
  { id: 2, icon: Users, count: '800+', label: '1-on-1 Counselling', color: 'from-purple-400 to-indigo-500' },
  { id: 3, icon: ClipboardList, count: '1900+', label: 'MBBS Admissions', color: 'from-orange-400 to-red-500' },
  { id: 4, icon: Star, count: '1900+', label: 'MD & MS Admissions', color: 'from-yellow-400 to-amber-500' },
  { id: 5, icon: FileText, count: '1000+', label: 'BAMS Admissions', color: 'from-teal-400 to-cyan-500' },
];

export default function AchievementsSection() {
  return (
    <section className="w-full bg-gray-800 py-16 px-6 text-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
        Our Achievements as <span className="text-blue-400">Medical Education Consultants</span>
      </h2>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {achievements.map(({ id, icon: Icon, count, label, color }) => (
          <div
            key={id}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-xl border border-gray-700 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {/* Icon with Gradient */}
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gradient-to-r ${color}`}
            >
              <Icon size={36} className="text-white" />
            </div>

            {/* Count & Label */}
            <p className="text-4xl font-bold text-white">{count}</p>
            <p className="text-lg text-gray-300">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
