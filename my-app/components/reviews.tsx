const reviews = [
	{
		name: "Puuujeeeee",
		rating: "★★★★★",
		text: "Mash goy huvtas bailee, dahij avnaa",
	},
	{
		name: "Baynaa",
		rating: "★★★★★",
		text: "Ih goy website bna",
	},
    {
		name: "Itgel",
		rating: "★★★★★",
		text: "Galzuu",
	},
     {
		name: "Anand",
		rating: "★★★★★",
		text: "Dajgui shuu",
	},
     {
		name: "BigTemuulen",
		rating: "★★★★★",
		text: "Tom size baigaa yu",
	},
    {
		name: "CEO Bayr",
		rating: "★",
		text: "TOO EXPENSIVE",
	},
    {
		name: "CELEBRITY LHAM",
		rating: "★",
		text: "POOR QUALITY, NO LIMITED EDITION",
	},
    
];

export default function Reviews() {
	return (
		<section id="reviews" className="space-y-5 pt-5">
			{reviews.map((review, index) => (
				<div key={review.name} className={index > 0 ? "border-t pt-5" : ""}>
					<p className="font-semibold">
						{review.name} <span className="ml-2 text-yellow-400">{review.rating}</span>
					</p>
					<p className="mt-2 text-gray-500">{review.text}</p>
				</div>
			))}
		</section>
	);
}
