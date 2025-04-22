import React from "react";

const CourseCardSkeleton = () => {
  return (
    <div className="shadow rounded-md p-2 bg-white">
      <div className="space-y-3 animate-pulse">
        {/* Image skeleton */}
        <div className="rounded-md overflow-hidden h-64 bg-gray-200" />
        
        {/* Content skeleton */}
        <div className="flex flex-col gap-3 p-1 relative">
          {/* User image skeleton */}
          <div className="w-16 absolute -top-12 right-5">
            <div className="w-[60px] h-[60px] rounded-full bg-gray-200 border-4 border-white" />
          </div>

          {/* Category skeleton */}
          <div className="h-4 bg-gray-200 rounded w-1/4" />
          
          {/* Title skeleton */}
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          
          {/* Rating skeleton */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-gray-200" />
            ))}
          </div>

          {/* Footer skeleton */}
          <div className="flex items-end justify-between">
            <div className="flex gap-2">
              {/* Lessons count skeleton */}
              <div className="h-5 bg-gray-200 rounded w-20" />
              {/* Duration skeleton */}
              <div className="h-5 bg-gray-200 rounded w-20" />
            </div>
            {/* Price skeleton */}
            <div className="flex flex-col gap-1">
              <div className="h-4 bg-gray-200 rounded w-16" />
              <div className="h-6 bg-gray-200 rounded w-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;