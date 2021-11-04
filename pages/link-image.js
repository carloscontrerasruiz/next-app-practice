import Link from "next/link";
import Image from "next/image";
import Mewto from "../public/mewto.jpg";

export default function Home() {
  return (
    <div>
      <p>Hola mundo</p>
      <Link href="/chanchitos">Chanchitos</Link>
      {/* <Image src="/mewto.jpg" width={400} height={400} /> */}
      <Image alt="pokemon" src={Mewto} width={400} height={400} />
    </div>
  );
}
