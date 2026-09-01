import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center py-16 px-4 animate-fade-in">
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#003527]/10 border-t-[#fea619] border-r-[#003527] animate-spin" />
        </div>
        <span className="text-[11px] font-bold tracking-widest text-[#707974] uppercase">
          Loading
        </span>
      </div>
    </div>
  );
}
