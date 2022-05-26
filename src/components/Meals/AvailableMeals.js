import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Kulfi',
    description: 'Sweet and tasty flavoured ice-cream grnished with pistas',
    price: 50.99,
  },
  {
    id: 'm2',
    name: 'Cornatto cones',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Badam Halwa',
    description: 'Rich in taste halwa garnished with several dryfruits.',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Cup-cakes',
    description: 'Healthy...and delicious...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
