import Image from 'next/image';

import { HorizontalMenu } from '../ui/HorizontalMenu';
import { LinkButton } from '../ui/LinkButton';

export function ProjectsSection() {
  return (
    <section
      aria-label="projects overview"
      className="h-screen border-2 border-light px-4 md:px-16 lg:px-36"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-3xl">projects</h2>
        <HorizontalMenu />
      </div>

      <h3>Project Name</h3>
      <div className="relative aspect-square w-full">
        <Image
          fill
          alt="project image"
          className="object-cover"
          src="/placeholder-image.jpg"
        />
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        vel aspernatur deleniti ipsam tempore molestias impedit aliquid
        obcaecati! In rerum, odio quibusdam dicta quas voluptas illo iste cumque
        aliquid quaerat, non harum natus dolor omnis. Architecto obcaecati
        debitis accusamus labore, magni optio aliquid, itaque officiis sed
        delectus ipsum. Pariatur, mollitia.
      </p>

      <h3>tools used</h3>
      <div className="flex flex-wrap justify-evenly gap-8">
        <div className="relative aspect-square w-14">
          <Image fill alt="nextjs logo" src="/next.svg" />
        </div>
        <div className="relative aspect-square w-14">
          <Image fill alt="nextjs logo" src="/next.svg" />
        </div>
        <div className="relative aspect-square w-14">
          <Image fill alt="nextjs logo" src="/next.svg" />
        </div>
        <div className="relative aspect-square w-14">
          <Image fill alt="nextjs logo" src="/next.svg" />
        </div>
        <div className="relative aspect-square w-14">
          <Image fill alt="nextjs logo" src="/next.svg" />
        </div>
        <div className="relative aspect-square w-14">
          <Image fill alt="nextjs logo" src="/next.svg" />
        </div>
        <div className="relative aspect-square w-14">
          <Image fill alt="nextjs logo" src="/next.svg" />
        </div>
      </div>

      <LinkButton href="/projects">See more...</LinkButton>
    </section>
  );
}
