---
title: Client events
description: A list of available client events within the character-selector resource
---

## Event handlers

### characterSpawned

```lua
AddEventHandler('characterSpawned', function(isNew)
    --- do something
end)
```

- isNew: `boolean`
    - If spawned character is newly created or not