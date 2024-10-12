---
title: Types
description: todo
---

List of types used within the resource

## Configuration

### CharacterPedOptions

```lua
---@class CharacterPedOptions
---@field model string | number
---@field position vector4
---@field freeze? boolean
---@field anim? PedAnimationOptions
---@field scenario? PedScenarioOptions
---@field camera? PedCameraOptions
---@field lookAt? vector3
---@field effect? string
```

### PedAnimationOptions

```lua
---@class PedAnimationOptions
---@field dictionary string
---@field animation string
---@field duration integer
---@field flags AnimFlags | integer
---@field positionOffset? vector3
---@field rotationOffset? vector3
---@field blendInDelta? AnimBlend | number
---@field blendOutDelta? AnimBlend | number
---@field timeToPlay? number
---@field startPhase? number
---@field phaseControlled? boolean
---@field ikFlags? integer
---@field freeze? boolean
```

### PedScenarioOptions

```lua
---@class PedScenarioOptions
---@field scenario string
---@field duration number
---@field positionOffset? vector3
---@field playIntro? boolean
---@field warp? boolean
```

### PedCameraOptions

```lua
---@class PedCameraOptions
---@field positionOffset? vector3
---@field targetOffset? vector3
---@field boneId? integer
```

## Animation

### Blends

```lua
---@enum AnimBlend
ANIM_BLEND = {
    WALK_BLEND_IN = 1.5, -- 20 frames
    WALK_BLEND_OUT = -1.5, -- 20 frames
    REALLY_SLOW_BLEND_IN = 2.0, -- 15 frames
    REALLY_SLOW_BLEND_OUT = -2.0, -- 15 frames
    SLOW_BLEND_IN = 4.0, -- 8 frames
    SLOW_BLEND_OUT = -4.0, -- 8 frames
    NORMAL_BLEND_IN = 8.0, -- 4 frames
    NORMAL_BLEND_OUT = -8.0, -- 4 frames
    FAST_BLEND_IN = 16.0, -- 2 frames
    FAST_BLEND_OUT = -16.0, -- 2 frames
    INSTANT_BLEND_IN = 1000.0, -- 0 frames
    INSTANT_BLEND_OUT = -1000.0, -- 0 frames
}
```

### Flags

```lua
---@enum AnimFlags
ANIM_FLAG = {
    DEFAULT = 0,
    LOOP = 1, -- Repeat the animation
    HOLD_LAST_FRAME = 2, -- Will freeze animation at last frame
    UPPERBODY = 16, -- Only play animation on upper body
    SECONDARY = 32, -- Run animation as secondary task, allowing movement
    ABORT_ON_PED_MOVEMENT = 128, -- If player tries to move, animation will stop
    TURN_OFF_COLLISION = 512, -- Won't react to collision detection
    HIDE_WEAPON = 1048576, -- Will hide weapon when animation is playing
}
```

## Internal

### Character

```lua
---@class Character
---@field charId? number
---@field firstName? string
---@field lastName? string
---@field x? number
---@field y? number
---@field z? number
---@field heading? number
---@field street? string
---@field isNew? boolean
---@field order? number
```

### NewCharacter

```lua
---@class NewCharacter
---@field firstName string
---@field lastName string
---@field gender string
---@field date string
```

### CharacterPed

```lua
---@class CharacterPed
---@field ped number
---@field camera Camera
```

### Camera

```lua
---@class Camera
---@field Destroy fun(self: self): self
---@field Create fun(self: self): self
---@field SetRotation fun(self: self, roll: number, pitch: number, yaw: number): self
---@field SetPosition fun(self: self, x: number, y: number, z: number): self
---@field PointAt fun(self: self, x: number, y: number, z: number): self
---@field PointAtEntity fun(self: self, entity: number, x?: number, y?: number, z?: number): self
---@field PointAtPedBone fun(self: self, ped: number, boneId: number, x?: number, y?: number, z?: number): self
---@field AttachToEntity fun(self: self, entity: number, x: number, y: number, z: number, relative: boolean): self
---@field AttachToBone fun(self: self, ped: number, bone: number, x: number, y: number, z: number, relative: boolean): self
---@field Detach fun(self: self): self
---@field Switch fun(self: self, from: number, duration: number, locationTransition: CameraTransition, rotationTransition: CameraTransition): self
---@field Activate fun(self: self, easeTransition: boolean, easeTime: number): self
---@field Deactivate fun(self: self, easeTransition: boolean, easeTime: number): self
---@field Exists fun(self: self): boolean
---@field Active fun(self: self): boolean
---@field Rendering fun(self: self): boolean
```

### CameraTransition

```lua
---@enum CameraTransition
CAMERA_TRANSITION = {
	LINEAR = 0,
	SIN_ACCEL_DECEL = 1,
	ACCEL = 2,
	DECEL = 3,
	SLOW_IN = 4,
	SLOW_OUT = 5,
	SLOW_IN_OUT = 6,
	VERY_SLOW_IN = 7,
	VERY_SLOW_OUT = 8,
	VERY_SLOW_IN_SLOW_OUT = 9,
	SLOW_IN_VERY_SLOW_OUT = 10,
	VERY_SLOW_IN_VERY_SLOW_OUT = 11,
	EASE_IN = 12,
	EASE_OUT = 13,
	QUADRATIC_EASE_IN = 14,
	QUADRATIC_EASE_OUT = 15,
	QUADRATIC_EASE_IN_OUT = 16,
	CUBIC_EASE_IN = 17,
	CUBIC_EASE_OUT = 18,
	CUBIC_EASE_IN_OUT = 19,
	QUARTIC_EASE_IN = 20,
	QUARTIC_EASE_OUT = 21,
	QUARTIC_EASE_IN_OUT = 22,
	QUINTIC_EASE_IN = 23,
	QUINTIC_EASE_OUT = 24,
	QUINTIC_EASE_IN_OUT = 25,
	CIRCULAR_EASE_IN = 26,
	CIRCULAR_EASE_OUT = 27,
	CIRCULAR_EASE_IN_OUT = 28,
}
```

### EffectState

```lua
---@class EffectState
---@field active boolean
---@field reset function
```
