import Image from "next/image";

type BrandWordmarkProps = { className?: string };

export function BrandWordmark({ className = "" }: BrandWordmarkProps) {
  return (
    <Image
      src="/logo-images/background-removed-summit-leads-logo.png"
      alt="Summit Leads Ltd"
      width={1100}
      height={500}
      priority
      unoptimized
      className={`summit-wordmark ${className}`.trim()}
    />
  );
}
