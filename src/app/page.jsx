import { Button } from "@/components/ui/button";
import { a } from "@/lib/constant";
import getData from "@/lib/getData";
import Section1 from "@/sections/home/Section1";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data = await getData(
    "/wp-json/okhub/v1/product/allProduct?limit=400&order=desc&page=1"
  );
  console.log(data);
  return (
    <main className="container lg:text-ellipsis">
      <Button className="text-foundation-green-dark-hover">{a}</Button>
      <Image
        className="size-[10rem]"
        src={"/home/banner.jpg"}
        alt="banner"
        width={350}
        height={256}
        priority
      />
      <div className="w-[1000px] h-[500px] bg-[linear-gradient(180deg,#F27073_0%,#CC373B_100%)]"></div>
      <div className="size-[10rem] bg-[rgba(65,54,54,1)]"></div>
      <div className="h-screen relative">
        <Image
          className="size-full object-cover"
          src={"/home/test.jpg"}
          alt="afaf"
          fill
          sizes="200vw"
        />
      </div>
      <ul className="group [&_.class-test]:text-black">
        <li className="group-hover:text-red-400">giasgdua</li>
        <li className="group/item">
          <div className="group-hover/item:text-green-500">ajsgdas</div>
          <div className="group/abc">
            <div>abc</div>
            <div className="group-hover/abc:text-yellow-400">fasfqewfef</div>
            <Link href="" className="text-blue-600 class-test">
              link test
            </Link>
          </div>
        </li>
        <li className="group/item">
          <div className="group-hover/item:text-yellow-400">ajsgdas</div>
        </li>
        <li>giasgdua</li>
        <li>giasgdua</li>
      </ul>
      <div className="h-screen"></div>
      <Section1 data={data} />
    </main>
  );
}
