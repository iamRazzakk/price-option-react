import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "features": [
        "Access to gym facilities",
        "Locker room access",
        "Standard gym equipment",
        "Group fitness classes (limited)",
        "Access to cardio machines",
        "Free Wi-Fi"
      ],
      "price": "$29.99"
    },
    {
      "id": 2,
      "name": "Premium Membership",
      "features": [
        "Access to gym facilities",
        "Locker room access with personal lockers",
        "Full range of gym equipment",
        "Unlimited group fitness classes",
        "Personal trainer consultation",
        "Access to sauna and steam room",
        "Towel service"
      ],
      "price": "$49.99"
    },
    {
      "id": 3,
      "name": "Family Membership",
      "features": [
        "Access for the entire family",
        "Locker room access for each family member",
        "Full range of gym equipment",
        "Unlimited group fitness classes",
        "Childcare services",
        "Access to swimming pool",
        "Discounts on personal training sessions",
        "Towel service"
      ],
      "price": "$79.99"
    }
  ]

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {
          priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div>
    </div>
  );
};

export default PriceOptions;