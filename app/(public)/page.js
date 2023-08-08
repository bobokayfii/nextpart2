"use client"
import Link from "next/link";
import { request } from "@/server/request";
import Slick from "@/components/Slick";

async function getData() {
  try {
    return request("category");
  } catch (err) {
    console.log(err);
  }
}
async function getLast() {
  try {
    return request("last-products");
  } catch (err) {
    console.log(err);
  }
}
export default async function Home() {
  const { data: categories } = await getData();
  const { data: latestProducts } = await getLast();

  return (
    <main className="container">
      <h1>Songgi qoshilgan mahsulotlar</h1>
      <div className="slick">
      <Slick latest={latestProducts}/>
      </div>
      <h1>Mahsulotlar kategoriyasi</h1>
      <div className="cards">
        {categories?.map((ctg) => (
          <div key={ctg._id}>
            <Link href={`category/${ctg._id}`}>
              <div className="card">
                <img
                  style={{ height: "300px", width: "400px" }}
                  src={ctg.image.url}
                  alt=""
                />
                {ctg.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
