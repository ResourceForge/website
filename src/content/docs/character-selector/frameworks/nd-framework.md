---
title: ND Core
description: Installation and configuration instructions when using the ND Core framework with character-selector
---

## Installation

- Setup [nd](https://github.com/ND-Framework)
- Remove `ND_Characters` if enabled
- Enable use of external character system in `qbx_core` config
    - located in `qbx_core/config/client.lua` under `useExternalCharacters`
    - Set `useExternalCharacters` to `true`
- Set the framework in the config file
    - In `sh_config.lua` set `CONFIG.FRAMEWORK` to `FRAMEWORK.ND` or `'nd'`

## Configure max number of characters

:::warning
    Ensure there are enough character peds defined in the configuration when setting max characters, by default a max of `8` characters is supported.
:::

- In `sh_config.lua` set the `CONFIG.MAX_CHARACTERS` to a `number` of your choice e.g. `3`.

```lua
CONFIG.MAX_CHARACTERS = 3;
```

## Configure appearance script used

- In `sh_config.lua` the `CONFIG.APPEARANCE` setting controls which appearance script is used.
    - For **ND Framework** specifically there is an `APPEARANCE.ND` or `'nd'` option available
    - Use this if you use `fivem-appearance` included in the template

```lua
CONFIG.APPEARANCE = APPEARANCE.ND;
```