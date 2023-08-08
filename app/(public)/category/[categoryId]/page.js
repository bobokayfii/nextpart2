"use client";

import { request } from '@/server/request';
import { useParams } from 'next/navigation';
import "./productsP.scss"
export default async function CategoryPage() {
  const {categoryId} = useParams();
  async function getData() {
    try {
      return request(`product?category=${categoryId}`);
    } catch (err) {
      console.log(err);
    }
  }
  const { data } = await getData();
  console.log(data.products);
  const prod=data.products;
  console.log(data);
  return (
    <main className="cards container">
      {prod?.map((ctg) => (
        <div key={ctg._id}>
            <div className="card">
              <img
                style={{ height: "300px", width: "400px" }}
                src={ctg.image.url}
                alt=""
              />
              {ctg.title}
            </div>
        </div>
      ))}
    </main>
  );
}