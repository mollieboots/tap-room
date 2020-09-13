import { v4 } from 'uuid';

const masterTapList = [
  {
    brewery: "pFriem",
    name: "Pilsner",
    abv: "4.9%",
    ibu: "35",
    flavorProfile: "Crisp, Snappy, Floral Hops",
    price: 5,
    id: v4()
  },
  {
    brewery: "Ninkasi",
    name: "Dawn of the Red",
    abv: "7.0%",
    ibu: "66",
    flavorProfile: "Sweet, tropical tang gives way to a hoppy finish",
    price: 5,
    id: v4()
  },
  {
    brewery: "Ancestry",
    name: "Irish Red Ale",
    abv: "5.4%",
    ibu: "21",
    flavorProfile: "A light bodied, malty ale with caramel and a touch of roast.",
    price: 5,
    id: v4()
  },
  {
    brewery: "Stoup",
    name: "American Pale Ale",
    abv: "5.6%",
    ibu: "N/A",
    flavorProfile: "Cascade and Citra dry-hopped",
    price: 5,
    id: v4()
  },
];

export function getTapList() {
  return masterTapList;
}