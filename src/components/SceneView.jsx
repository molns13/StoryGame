import "../App.css"

export default function SceneView({ scene, inventory, onChoose }) {
  const visibleChoices = scene.choices.filter((c) => {
    if (!c.requiresItem) return true;
    return inventory.includes(c.reuiresItem);
  });

    return (
    <div>
        {scene.image && (
            <img
                src={new URL(`../assets/${scene.image}`, import.meta.url)}
                alt=""
                className="sceneImage"
            />
        )}

      <p className="sceneText">{scene.text}</p>

      <div>
        {visibleChoices.map((c) => (
          <button className="choiceBtn"
            key={c.id}
            onClick={() => onChoose(c.next, c.addItem)}
          >
            {c.text}
          </button>
        ))}
      </div>
    </div>
  );
}
