import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function LavaHead({ size }: { size: number }) {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image src="/logo.png" height={size} width={size} alt="LavaHead logo" />
      <p className="text-[44px]">LavaHead</p>
    </div>
  );
}
