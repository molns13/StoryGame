import "../App.css";
import { useEffect, useMemo } from "react";

export default function SceneView({ scene, scenes, inventory, onChoose }) {
  const choices = useMemo(() => scene?.choices ?? [], [scene]);

  const visibleChoices = useMemo(() => {
    return choices.filter((c) => {
      if (!c?.requiresItem) return true;
      return inventory.includes(c.requiresItem);
    });
  }, [choices, inventory]);

  useEffect(() => {
    if (!scenes || !choices.length) return;

    const base = import.meta.env.BASE_URL;

    choices.forEach((choice) => {
      const nextScene = scenes[choice.next];
      if (!nextScene?.image) return;

      const img = new Image();

      img.src = nextScene.image.startsWith("/")
        ? `${base}${nextScene.image.slice(1)}`
        : `${base}${nextScene.image}`;
    });
  }, [choices, scenes]);

  const imgSrc = useMemo(() => {
    if (!scene?.image) return "";

    const base = import.meta.env.BASE_URL;

    return scene.image.startsWith("/")
      ? `${base}${scene.image.slice(1)}`
      : `${base}${scene.image}`;
  }, [scene]);

  return (
    <div>
      {scene?.image && (
        <img
          src={imgSrc}
          alt=""
          className="sceneImage"
          loading="eager"
          decoding="async"
        />
      )}

      <p className="sceneText">{scene?.text}</p>

      <div>
        {visibleChoices.map((c) => (
          <button
            className="choiceBtn"
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
