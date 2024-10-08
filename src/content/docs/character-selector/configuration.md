---
title: Configuration
description: Layout of character-selector configuration with descriptions and examples
---

The configuration for the resource is all contained within `sh_config.lua` in the root directory of the resource and allows for configurating max characters, where characters are positioned, character effects, character spawns and which frameworks to use.

## Framework

Which framework is being used by the server

```lua
---@type Framework
CONFIG.FRAMEWORK = FRAMEWORK.OX;
```

### Supported frameworks

```lua
---@enum Framework
FRAMEWORK = {
    OX = 'ox', -- ox-core
    QBOX = 'qbox', -- qbx_core
    ND = 'nd', -- ND_Core
    QB = 'qb', -- qb-core
}
```

See [frameworks](http://localhost:3000/category/frameworks) for framework specfic installation steps

## Appearance

Which appearance resource used by the server

```lua
---@type Appearance
CONFIG.APPEARANCE = APPEARANCE.ILLENIUM;
```

### Supported appearance resources

```lua
---@enum Appearance
APPEARANCE = {
    ILLENIUM = 'illenium', -- illenium-appearance
    ND = 'nd', -- fivem-appearance with ND_Core framework
    BYTELABS = 'bytelabs' -- bl_appearance
}
```

## Max characters

:::info
    This option does not work when using the ox or qbox frameworks, See [frameworks](http://localhost:3000/category/frameworks) for instructions
:::

How many characters the resource will allow you to create. If a player already has more characters than the maximum they still will be able to see them all.

:::warning
    Ensure there are enough character peds defined when setting max characters, by default a max of 8 characters is supported.
:::

```lua
CONFIG.MAX_CHARACTERS = 8;
```

## Spawns

Contains the positions for each spawn choice when a new character is created.

```lua
---@type vector4[]
CONFIG.SPAWNS = {
    vector4(0.0, 0.0, 0.0, 0.0),
    vector4(0.0, 0.0, 0.0, 0.0),
    vector4(0.0, 0.0, 0.0, 0.0),
    vector4(0.0, 0.0, 0.0, 0.0),
    vector4(0.0, 0.0, 0.0, 0.0),
    vector4(0.0, 0.0, 0.0, 0.0),
};
```

- Only 6 spawns are supported.
- Thumbnail images for each spawn can be changed, see [here](todo)
- Spawns can be handled by another resource, see [here](todo)

## Character peds

A list of character peds, contains the model, location, camera angles and animation used by every ped.

```lua
---@type CharacterPedOptions[]
CONFIG.CHARACTER_PEDS = {
	{
		model = 'mp_m_freemode_01',
		position = vector4(-93.96, -582.58, 59.43, 341.71),
		freeze = true,
		anim = {
			dictionary = 'missfam1_yachtbattleonyacht02_',
			animation = 'onboom_twohand_hang_idle',
			duration = -1,
			flags = ANIM_FLAG.LOOP,
		},
		camera = {
			positionOffset = vector3(0.0, -1.55, 2.0),
			targetOffset = vector3(0.0, 0.0, -0.5)
		},
		effect = 'falling'
	},
}
```

### Character ped options

- model: `string | number`
- position: `vector4`
- freeze?: `boolean`
- anim?: `PedAnimationOptions`
- scenario?: `PedScenarioOptions`
- camera?: `PedCameraOptions`
- lookAt?: `vector3`
- effect?: `string`

Go [here](./types) for a breakdown of types

### Model

The model to use for the ped, this is only used on empty character slots.

```lua
model = 'mp_m_freemode_01',
```

A list of ped models can be found [here](https://docs.fivem.net/docs/game-references/ped-models/)

### Position

The position where the ped will be spawned

- x: `number`
- y: `number`
- z: `number`
- w: `number` (heading)

```lua
position = vector4(-93.96, -582.58, 59.43, 341.71),
```

### Freeze

Whether to freeze the ped directly after being spawned, this is useful if the ped floats in the air.

```lua
freeze = false
```

### Animation / Scenario

Using an animation or scenario is optional but only one can be used for each ped

#### Animation

Plays an animation on the character ped after being placed at a position

- dictionary: `string`
- animation: `string`
- duration: `integer`
- flags: `AnimFlags | integer`
- positionOffset?: `vector3`
- rotationOffset?: `vector3`
- blendInDelta?: `AnimBlend | number`
- blendOutDelta?: `AnimBlend | number`
- timeToPlay?: `number`
- startPhase?: `number`
- phaseControlled?: `boolean`
- ikFlags?: `integer`
- freeze?: `boolean`

```lua
    anim = {
        dictionary = 'missfam1_yachtbattleonyacht02_',
        animation = 'onboom_twohand_hang_idle',
        duration = -1,
        flags = ANIM_FLAG.LOOP,
    },
```

- See available animation flags [here](./types)
- See available animation blend deltas [here](./types)

#### Scenario

Plays a scenario on the character ped after being placed at a position

- scenario: `string`
- duration: `number`
- positionOffset?: `vector3`
- playIntro?: `boolean`
- warp?: `boolean`

```lua
    scenario = {
        scenario = 'PROP_HUMAN_SEAT_BENCH',
        positionOffset = vector3(0, 0, -0.95),
        duration = -1,
        playIntro = false,
        warp = true
    }
```

### Camera

The camera settings controls where the camera is located and where the camera is pointing at, by default the camera is always located in front of the character ped and is pointed at the character.

- positionOffset?: `vector3`
- targetOffset?: `vector3`
- boneId?: `integer`

```lua
    camera = {
        positionOffset = vector3(1.55, 0.8, 0.7),
        targetOffset = vector3(-1.0, 1.8, 0.5)
    },
```

- The position of the character ped camera is offset relative to the ped's position
- The target where the camera is pointing at is offset relative to the ped's position

### Look At

The `lookAt` option controls where the character peds is actually looking, for example this can be used to make the character look towards the camera when it may not be facing towards it.

```lua
    lookAt = vector3(1.55, 0.8, 0.7),
```

- The lookAt option position an offset relative to the character peds position.

### Effect

Allows an effect to be played on the character ped when clicking outside of the interface when selecting a character. The effect system is how the falling effect is achieved.

```lua
effect = 'name'
```

- `effect` simply takes the name of an effect and is optional
- Additional effects can be created see [here](./guides/effects.md) for a guide.