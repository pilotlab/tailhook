# Tailhook

Useful react hooks for pilotlab

### Hooks

#### Use Local Storage
```

const initialValue = true;
const [value, valueSetter] = useLocalStorage('storageKey')(initialValue);

```

#### Use Viewport
```

const { vw, vh } = useViewport();

```
