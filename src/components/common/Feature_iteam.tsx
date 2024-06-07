interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Feature_iteam({ title, description, icon }: Props) {
  return (
    <div className="feature-item flex flex-col items-center">
      <div className=" bg-zinc-700 rounded-full p-2">{icon}</div>
      <h3 className="font-semibold mt-3">{title}</h3>
      <p className="opacity-90 text-sm">{description} </p>
    </div>
  );
}

export default Feature_iteam;
