import { CMR2SVG } from '@/components/decorative/CMR2SVG';
import { Section } from '@/components/sections/Section';
import { SectionParagraph } from '@/components/ui/SectionParagraph';
import { alienatedSVGPath } from '@/data/svgPaths';

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Section className="flex flex-col items-center">
        <SectionParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At porro
          aperiam adipisci provident est nulla, laudantium cumque et dolore
          cupiditate amet dignissimos enim rem maxime!
        </SectionParagraph>
        <CMR2SVG
          animationSpeed={10}
          characterRotation="0"
          characterSpacing={0.08}
          className="block w-full fill-light-darker text-[5px] dark:text-dark-lighter lg:w-1/2"
          pathShape={alienatedSVGPath}
          text=" kamil bażanow "
          textRepetition={9}
          viewBox="0 0 200 200"
        />
        <SectionParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At porro
          aperiam adipisci provident est nulla, laudantium cumque et dolore
          cupiditate amet dignissimos enim rem maxime!
        </SectionParagraph>
        <SectionParagraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus ducimus at earum eum quam quasi architecto dolor, quos
          unde consequuntur. Delectus obcaecati consequatur qui perspiciatis
          rerum eum dolorum ipsum nam est repellat, ipsam autem cumque enim quae
          tempora voluptate sit quos at minus, libero voluptates distinctio?
          Animi, ullam debitis accusamus quos labore quibusdam, porro iusto
          veritatis possimus repellendus quia maxime dolorem culpa laboriosam
          fugiat? Alias, deleniti aspernatur incidunt exercitationem dignissimos
          corporis, debitis nostrum sapiente reprehenderit ipsa vel quidem natus
          sunt veritatis, mollitia quasi assumenda? Neque sed dolorum veritatis,
          dicta nostrum ea rem nisi. Nam harum ea doloribus sed consectetur
          sequi vitae dolorum temporibus similique laboriosam ex nobis, magni
          voluptatem, autem accusamus aliquid culpa beatae quidem iusto
          pariatur! Eius recusandae maiores consectetur distinctio eos iure ex
          totam explicabo at sapiente, molestias possimus sint. Commodi ipsam
          sequi placeat ipsa, qui velit facere autem eaque ea quo, ex adipisci.
          Repellat voluptates quos illum porro nostrum, ratione tenetur eaque
          eos dolores animi deleniti pariatur commodi libero quidem magnam ea
          deserunt ducimus eveniet. Quo, maxime dolor quos temporibus modi sit
          quis ab, excepturi eligendi ut veritatis mollitia quaerat, quod
          doloremque sunt soluta ullam. Amet autem voluptatibus deleniti, iste,
          nobis ducimus reprehenderit, ad alias consectetur doloribus
          doloremque! Deserunt tenetur eum illo fugit enim expedita saepe
          tempora cum, ducimus incidunt, autem nulla? Quos dolores ab recusandae
          deserunt assumenda dicta ducimus sunt obcaecati, tempora error magnam
          corporis magni consequatur explicabo architecto harum facere
          blanditiis provident asperiores sed. Harum omnis soluta quidem
          asperiores, ipsam autem rerum. Distinctio sit voluptates neque quae
          recusandae tempore odio doloremque quaerat illo velit eligendi, sunt,
          accusantium, beatae nemo non praesentium accusamus maiores deserunt
          aliquid totam autem! Modi, enim quaerat atque similique reprehenderit
          eveniet facilis accusamus dolore laboriosam obcaecati, porro neque
          dolorum illum ducimus. Hic, neque iste iure nulla delectus odit
          architecto quibusdam? Eum, accusamus.
        </SectionParagraph>
      </Section>
    </main>
  );
}
