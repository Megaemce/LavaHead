import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function LavaHead() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image src="/logo.png" height={150} width={150} alt="LavaHead logo" />
      <p className="text-[44px]">LavaHead</p>
    </div>
  );
}
