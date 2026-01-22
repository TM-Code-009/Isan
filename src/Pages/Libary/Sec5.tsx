import { HiOutlineDownload } from "react-icons/hi";



export const Sec5 = () => {
return (
<section className="bg-sky-500 py-20">
<div className="max-w-5xl mx-auto px-4 text-center text-white">
<div className="w-14 h-14 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
<HiOutlineDownload className="text-2xl" />
</div>


<h2 className="text-3xl font-semibold mb-4">
Need Help Accessing Resources?
</h2>


<p className="text-white/90 max-w-3xl mx-auto mb-8">
Our library is continuously updated with new materials. Members have full access to all downloadable resources, research papers, and educational content.
</p>


<div className="flex flex-wrap justify-center gap-4 mb-6">
<button className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-xl font-medium">
Become a Member
</button>
<button className="border border-white hover:bg-white hover:text-sky-500 transition px-6 py-3 rounded-xl font-medium">
Contact Library Team
</button>
</div>


<p className="text-sm text-white/90">
Questions about our resources? Email us at {" "}
<a
href="mailto:isan.isan@yahoo.com"
className="underline font-medium"
>
isan.isan@yahoo.com
</a>
</p>
</div>
</section>
);
};