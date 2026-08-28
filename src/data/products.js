// NOTE: this is placeholder data standing in for the Django product API.
// Shape mirrors what /api/products/?category=... should return, so swapping
// the mock for a real fetch() later is a drop-in change (see Product.jsx).

export const categories = {
  womenswear: ['All', 'Saree', 'Indowestern', 'Salwar'],
  menswear: ['All', 'Sherwani', 'Indowestern', 'Kurta'],
};

const sareeNames = [
  'Ivory Zardozi Saree',
  'Blush Chikankari Saree',
  'Champagne Threadwork Saree',
  'Rose Gold Organza Saree',
  'Pearl Mukaish Saree',
  'Sand Dust Embroidered Saree',
];

const sherwaniNames = [
  'Ivory Bandhgala Sherwani',
  'Champagne Threadwork Sherwani',
  'Pearl Mukaish Kurta Set',
  'Sand Zardozi Sherwani',
  'Rose Gold Nehru Jacket Set',
  'Blush Chikankari Kurta',
];

function buildProducts(names, categoryTags) {
  return names.map((name, i) => ({
    id: `${categoryTags[0]}-${i + 1}`,
    name,
    category: categoryTags[i % categoryTags.length] === 'All' ? categoryTags[1] : categoryTags[i % categoryTags.length],
    price: 18500 + i * 2200,
  }));
}

export const productsByGender = {
  womenswear: buildProducts(sareeNames, ['Saree', 'Indowestern', 'Salwar']),
  menswear: buildProducts(sherwaniNames, ['Sherwani', 'Indowestern', 'Kurta']),
};
