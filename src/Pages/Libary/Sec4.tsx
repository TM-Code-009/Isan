import { HiOutlineDownload } from "react-icons/hi";
import img from "../../assets/Chat.png"


export const Sec4 = () => {
const resources = [
{
title: "Life Group Insurance Policy",
desc: "Details on the financial protection offered to members' families.",
},
{
title: "Welfare Purse Guidelines",
desc: "Information on how to access financial assistance during periods of hardship.",
},
];


return (
<section className="max-w-6xl mx-auto px-4 py-20">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold">Member Welfare Resources</h2>
<p className="text-gray-500 mt-2">
Documents related to the social support structures of the association.
</p>
</div>


<div className="grid md:grid-cols-2 gap-6">
{resources.map((item, i) => (
<div
key={i}
className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
>
<div className="w-10 h-10 rounded-lg bg-sky-500 text-white flex items-center justify-center mb-4">
<img src={img} alt="" width={22} height={22} />
</div>
<h3 className="font-semibold text-lg mb-2">{item.title}</h3>
<p className="text-sm text-gray-600 mb-4">{item.desc}</p>
<button className="flex items-center gap-2 text-sky-500 text-sm font-medium hover:underline">
Download Guide <HiOutlineDownload />
</button>
</div>
))}
</div>
</section>
);
};