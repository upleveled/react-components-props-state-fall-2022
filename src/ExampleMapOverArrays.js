// const animalsDatabase = ['Lion', 'dog', 'turtle', 'elephant'];
// [<li>lion</li>, <li>dog</li>, <li>turtle</li>]

const fullAnimalsDatabase = [
  {
    id: 'asdasd123',
    name: 'Lion',
    icon: '🦁',
  },
  {
    id: 'asdasd1asd23',
    name: 'dog',
    icon: '🐶',
  },
  {
    id: 'asxxadsd1asd23',
    name: 'turtle',
    icon: '🐢',
  },
  {
    id: 'sda13ghsdig',
    name: 'elephant',
    icon: '🐘',
  },
];

/** this is what react is receiving after the map
 * [
 * <li key={`animal-list-item-asdasd123`}>
 * <div>🦁</div>
 * Lion
 * </li>,
 * <li key={`animal-list-item-asdasd1asd23`}>
 * <div>🐶</div>
 * dog
 * </li>
 * ...
 *
 * ]
 *
 */
export default function ExampleMapOverArrays() {
  const animalListItems = fullAnimalsDatabase.map((animal) => {
    return (
      <li key={`animal-list-item-${animal.id}`}>
        <div>{animal.icon}</div>
        {animal.name}
      </li>
    );
  });

  if (/** condition */ animalListItems.length === 0) {
    return 'there are not animals inside';
  }

  return (
    <div>
      <ul>{animalListItems}</ul>
    </div>
  );
}
