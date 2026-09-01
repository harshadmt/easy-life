import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4">
      <div className="relative flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-[#003527]/20 border-t-[#fea619] border-r-[#003527] animate-spin" />
        <p className="text-xs font-bold uppercase tracking-wider text-[#003527] animate-pulse">
          Loading Easy Life Manager...
        </p>
      </div>
    </div>
  );
}
