---
title: qbcore
description: Installation and configuration instructions when using the qbcore framework with character-selector
---

## Installation

- Setup [qbcore](https://github.com/qbcore-framework/qb-core)
- Remove `qb-multicharacter` if enabled
- Set the framework in the config file
    - In `sh_config.lua` set `CONFIG.FRAMEWORK` to `FRAMEWORK.QB` or `'qb'`

## Configure max number of characters

:::warning
    Ensure there are enough character peds defined in the configuration when setting max characters, by default a max of `8` characters is supported.
:::

- In `sh_config.lua` set the `CONFIG.MAX_CHARACTERS` to a `number` of your choice e.g. `3`.

```lua
CONFIG.MAX_CHARACTERS = 3;
```