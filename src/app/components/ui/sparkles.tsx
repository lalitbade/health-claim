interface SparklesProps {
    className?: string;
  }
  
  export function SparklesCore({ className }: SparklesProps) {
    return <div className={`w-full h-full bg-blue-500 ${className}`}>Sparkles Placeholder</div>;
  }
  