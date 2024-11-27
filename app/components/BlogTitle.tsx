import Image from "next/image";

export default async function BlogTitle({ id }: { id: string }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}tags/slug/${id}`).then((res) => res.json());
  console.log(res);

  return (
    <div className="flex items-center space-x-4 p-4">
      <div className=" w-32 h-32 relative rounded-full overflow-hidden bg-red4">
        <Image className=" object-cover" alt={res.name} src={res.image} fill />
      </div>
      <div className="flex items-start gap-1 flex-col">
        <h3 className=" text-lg lg:text-xl  font-medium  text-red6">{res.name}</h3>
        <p className=" max-w-full md:max-w-2xl text-sm md:text-base font-medium  text-red6">{res.description}</p>
      </div>
    </div>
  );
}
