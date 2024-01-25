import { Navbar } from '../components/Navbar';
import { NewProducts } from '../components/NewProducts';
import { MainProducts } from '../components/MainProducts';

export function Home() {
  return (
    <div>
      <div className="bg-[#40BFFF]">
        <section>
          <Navbar />
        </section>
      </div>
      <section className="">
        <NewProducts />
      </section>
      <section className="">
        <MainProducts />
      </section>
    </div>
  );
}
