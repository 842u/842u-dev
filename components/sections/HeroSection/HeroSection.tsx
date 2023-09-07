import { LinkButton } from '@/components/ui/LinkButton';

export function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-4 md:px-16 lg:px-36">
      <h1 className="divide-x-2  text-5xl  md:text-7xl lg:text-5xl">
        <span className="pr-2">kamil</span>
        <span className="pl-2">bażanow</span>
      </h1>

      <p
        className="py-12 text-justify text-lg md:py-24 md:text-2xl lg:max-w-[50vw] lg:text-xl"
        data-testid="hero-description"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ea
        dignissimos, iste quidem ducimus quis facere voluptatibus quasi cum quod
        repudiandae, atque et tenetur id ex tempora nobis pariatur aliquid
        placeat? Ipsa dolore eos assumenda numquam nostrum quibusdam velit alias
        consequatur, quisquam minima dignissimos consequuntur deleniti quo
        itaque fugit quia?
      </p>

      <LinkButton href="/about">about me</LinkButton>
    </section>
  );
}
