import { useEffect, useMemo, useState } from "react";
import { scenes as fantasyScenes } from "./data/stories/scenes";
import { scenes as adventuresOfCsoki } from "./data/stories/adventuresOfCsoki";
import SceneView from "./components/SceneView";
import "./App.css";

export default function App() {
  const stories = useMemo(
    () => ({
      fantasy: {
        title: "Fantasy Project",
        description: "Választós fantasy sztorijáték.",
        scenes: fantasyScenes,
        startSceneId: "start",
      },
      csoki: {
        title: "Csoki kalandjai",
        description: "Könnyedebb, humoros fantasy kaland.",
        scenes: adventuresOfCsoki,
        startSceneId: "start",
      },
    }),
    []
  );

  const [screen, setScreen] = useState("menu");
  const [storyKey, setStoryKey] = useState(null);
  const [sceneId, setSceneId] = useState("start");
  const [inventory, setInventory] = useState([]);

  const activeStory = storyKey ? stories[storyKey] : null;
  const activeScenes = activeStory?.scenes;

  const fallbackScene = {
    text: "Ismeretlen jelenet...",
    choices: [{ text: "Vissza a kezdethez", next: "start" }],
  };

  const scene = activeScenes ? activeScenes[sceneId] ?? fallbackScene : fallbackScene;

  function storageKey(key) {
    return `story_save_${key}`;
  }

  function resetRun(nextStoryKey) {
    const startId = stories[nextStoryKey]?.startSceneId ?? "start";
    setSceneId(startId);
    setInventory([]);
  }

  function startStory(nextStoryKey) {
    setStoryKey(nextStoryKey);

    const raw = localStorage.getItem(storageKey(nextStoryKey));
    if (!raw) {
      resetRun(nextStoryKey);
      setScreen("game");
      return;
    }

    try {
      const saved = JSON.parse(raw);
      const startId = stories[nextStoryKey]?.startSceneId ?? "start";

      setSceneId(saved.sceneId || startId);
      setInventory(Array.isArray(saved.inventory) ? saved.inventory : []);
      setScreen("game");
    } catch {
      resetRun(nextStoryKey);
      setScreen("game");
    }
  }

  function newGame() {
    if (!storyKey) return;

    localStorage.removeItem(storageKey(storyKey));

    const startId = stories[storyKey]?.startSceneId ?? "start";
    setSceneId(startId);
    setInventory([]);
    setScreen("game");
  }

  function backToMenu() {
    setScreen("menu");
  }

  function handleChoose(nextId, addItem) {
    if (addItem) {
      setInventory((inv) => (inv.includes(addItem) ? inv : [...inv, addItem]));
    }
    setSceneId(nextId);
  }

  useEffect(() => {
    if (!storyKey) return;
    if (screen !== "game") return;

    localStorage.setItem(
      storageKey(storyKey),
      JSON.stringify({ sceneId, inventory })
    );
  }, [sceneId, inventory, storyKey, screen]);

  return (
    <div className="page">
      <div className="app">
        {screen === "menu" ? (
          <div style={{ textAlign: "center", padding: 24, color: "white" }}>
            <h1 style={{ marginTop: 0 }}>Üdvözöl a StoryGame!</h1>
            <h2 style={{ marginTop: 0 }}>Válassz sztorit</h2>
            <p style={{ color: "white", opacity: 0.9 }}>
              Több történet közül választhatsz. Mindegyik külön mentést kap.
            </p>

            <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
              {Object.entries(stories).map(([key, s]) => (
                <button
                  key={key}
                  className="choiceBtn"
                  onClick={() => startStory(key)}
                  style={{ padding: "14px 16px", cursor: "pointer" }}
                >
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>{s.title}</div>
                  <div style={{ opacity: 0.9, fontSize: 14 }}>{s.description}</div>
                </button>
              ))}
            </div>

            <div style={{ marginTop: 16, opacity: 0.75, fontSize: 13 }}>
              Tipp: PWA módban a játék úgy néz ki, mint egy natív app.
            </div>
          </div>
        ) : (
          <>
            <div className="topbar">
              <p className="inventory">
                <strong>{activeStory?.title ?? "Történet"}</strong> — <strong>Tárgyaid:</strong>{" "}
                {inventory.length ? inventory.join(", ") : "(nincs)"}
              </p>

              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={newGame}>Új játék</button>
                <button onClick={backToMenu}>Menü</button>
              </div>
            </div>

            <SceneView
              key={`${storyKey}-${sceneId}`}
              scene={scene}
              inventory={inventory}
              onChoose={handleChoose}
            />
          </>
        )}
      </div>
    </div>
  );
}
